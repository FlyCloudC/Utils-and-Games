class UI {
  constructor() {
    this.view = {
      taskView: 'task-view',
      countdownView: 'countdown-view',
      statisticView: 'statistic-view',
      settingsView: 'setting-view',
    };
    this.button = {
      addButton: 'add-button',
      chooseTaskButton: 'choose-task-button',
      chooseStatisticButton: 'choose-statistic-button',
      chooseCountdownButton: 'choose-countdown-button',
      chooseSettingButton: 'choose-setting-button',
    }
    this.showingView = null;
  }

  initialize() {
    for (let i in ui.view) {
      ui.view[i] = document.getElementById(ui.view[i]);
      ui.view[i].style.display = 'none';
    }

    for (let i in ui.button) {
      ui.button[i] = document.getElementById(ui.button[i]);
    }

    this.loadTaskList();
    this.loadCountdownList();
    this.showingView = this.view.taskView;
    this.showView(this.showingView);

    this.button.chooseTaskButton.onclick = () => this.showView(this.view.taskView);
    this.button.chooseStatisticButton.onclick = () => this.showView(this.view.statisticView);
    this.button.chooseCountdownButton.onclick = () => this.showView(this.view.countdownView);
    this.button.chooseSettingButton.onclick = () => this.showView(this.view.settingsView);
  }

  showView(view) {
    this.showingView.style.display = 'none';
    this.showingView = view;
    view.style.display = 'inline';

    if (this.showingView == this.view.taskView) {
      this.button.addButton.style.display = 'inline-block';
      this.button.onclick = () => {

        user.addTask();
      };
    }
    else if (this.showingView == this.view.countdownView) {
      this.button.addButton.style.display = 'inline-block';
      this.button.onclick = () => {
        user.addCountdown();
      };
    }
    else {
      this.button.addButton.style.display = 'none';
    }
  }

  loadTaskList() {
    this.view.taskView.innerHTML = '';
    for (let x of user.data.taskList) {
      this.addTaskCard(x);
    }
  }

  loadCountdownList() {

  }

  addTaskCard(task) {
    let taskCardDiv = Utils.createElement('div', 'task-card');
    let taskCardLeftDiv = Utils.createElement('div', 'task-card-left');
    let taskTitleH3 = Utils.createElement('h3', 'task-title');
    taskTitleH3.innerHTML = task.title;
    let taskSubtitleH6 = Utils.createElement('h6', 'task-subtitle');
    taskSubtitleH6.innerHTML = task.singleTime + '分钟';
    let startButton = Utils.createElement('button', 'task-card-button');
    startButton.onclick = () => alert(task.description);
    startButton.innerHTML = '开始';

    taskCardDiv.appendChild(taskCardLeftDiv);
    taskCardLeftDiv.appendChild(taskTitleH3);
    taskCardLeftDiv.appendChild(taskSubtitleH6);
    taskCardDiv.appendChild(startButton);

    this.view.taskView.appendChild(taskCardDiv);
  }

  removeTaskCard(title) {
    for (let taskTitleH3 of document.getElementsByClassName('task-title')) {
      if (taskTitleH3.innerHTML == title) {
        taskTitleH3.parentElement.parentElement.remove();
        return true;
      }
    }
    return false;
  }

  addCountdownCard() {

  }

  removeCountdownCard() {

  }
}

const ui = new UI();