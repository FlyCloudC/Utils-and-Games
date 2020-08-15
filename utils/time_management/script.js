const UI = {};
//const Data;

window.onload = () => {
  [UI.taskDiv, UI.countdownDiv, UI.statisticDiv] =
    ['task-list', 'countdown-list', 'statistic-list']
      .map(x => document.getElementById(x));

}
