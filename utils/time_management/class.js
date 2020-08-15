class Task {
  constructor(title, time, dailyCount) {
    this.title = title;
    this.time = time;
    this.dailyCount = dailyCount;
    this.todayCount = 0;

    this.totalCount = 0;
    this.totalTime = 0;
    this.statistic = new Array();
  }
}

class Countdown {
  constructor(title, subtitle, start, end) {
    this.title = title;
    this.subtitle = subtitle;
    this.start = start;
    this.end = end;
  }
  getLeft() {
    return Math.floor((Date.parse(this.end) - Date.now()) / 86400000) + 1;
  }
}

class Statistic {
  constructor(){
    this.totalCount = 0;
    this.totalTime = 0;

    this.todayCount = 0;
    this.todaytime = 0
  }
}
/*

菜单：
  任务列表
    任务：
      标题、时长、完成/每日次数、开始按钮
      *按钮查看单个任务统计信息
  倒计时列表
    倒计时：
      主标题、副标题、开始日期、截至日期、剩余天数
      *背景进度条
  统计列表
    累计专注：次数、时长、日均时长
    当日专注：次数、时长
  *专注时间曲线
*/