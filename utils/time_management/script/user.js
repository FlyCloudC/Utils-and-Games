class User {
  constructor(name) {
    this.data = {
      name,
      taskList: [],
      CountdownList: [],
      settings: {
        dayStartTime: 0,
        nightMode: 'off',
      },
    }
  }

  addTask(title) {
    if (this.data.taskList.find(x => x.title == title) !== undefined) {
      return false;
    }
    let task = new Task(...arguments);
    this.data.taskList.push(task);
    saveData(this);
    ui.addTaskCard(task);
    return true;
  }

  removeTask(title) {
    let index = this.data.taskList.findIndex(x => x.title == title)
    if (index == -1)
      return false;
    this.data.taskList.splice(index, 1);
    saveData(this);
    ui.removeTaskCard(title);
    return true;
  }

  addCountdown(title) {
    if (this.data.CountdownList.find(x => x.title == title) !== undefined) {
      return false;
    }
    this.data.CountdownList.push(new Countdown(...arguments));
    return true;
  }

  removeCountdown(title) {
    let index = this.data.CountdownList.findIndex(x => x.title == title)
    if (index == -1)
    return false;
    this.data.CountdownList.splice(index, 1);
    saveData(this);
    return true;
  }
}

//任务--------------------------------------------------------------
class Task {
  constructor(title, description, singleTime, dailyNumber) {
    this.title = title;
    this.description = description;
    
    this.singleTime = singleTime;
    this.dailyNumber = dailyNumber;
    
    this.statistic = {
      totalTime: 0,
      list: {},
    }
  }
  
  getDailyTime() {
    return this.totalTime / getDealtDay(Date.now(), this.startDate);
  }
  
  addRecord(duration, time = new Date()) {
    let { year, month, date } = Utils.unpackTime(time);
    const list = this.statistic.list;
    
    if (list[year] === undefined)
    list[year] = {};
    if (list[year][month] === undefined)
    list[year][month] = {};
    if (list[year][month][date] === undefined)
    list[year][month][date] = duration;
    else
    list[year][month][date] += duration;

    this.statistic.totalTime += duration;
    
    saveData(user);
  }
  
  removeRecord(duration = 84000, time = new Date()) {
    let { year, month, date } = Utils.unpackTime(time);
    const list = this.statistic.list;
    
    if (list[year]?.[month]?.[date] === undefined)
    return false;
    
    if (list[year][month][date] <= duration) {
      duration = list[year][month][date];
      delete list[year][month][date];
      if (Utils.isEmpty(list[year][month]))
      delete list[year][month];
      if (Utils.isEmpty(list[year]))
      delete list[year];
    }
    else
    list[year][month][date] -= duration;
    
    this.statistic.totalTime -= duration;
    
    saveData(user);
  }
}

//倒计时------------------------------------------------------------
class Countdown {
  constructor(title, subtitle, start, end) {
    this.title = title;
    this.subtitle = subtitle;

    this.start = start;
    this.end = end;
  }
  getLeft() {
    return Utils.getDealtDay(Date.parse(this.end), Date.now());
  }
}

const user = new User();

/*
菜单：
  任务列表
    任务：
      标题、时长、完成次数、开始按钮
      *按钮查看单个任务统计信息
  倒计时列表
    倒计时：
      主标题、副标题、开始日期、截至日期、剩余天数
      *背景进度条
  统计列表
    累计专注：次数、时长、日均时长
    当日专注：次数、时长
    *专注时间曲线
  设置与数据管理
*/