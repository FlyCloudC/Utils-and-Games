class Utils {
  static isEmpty(x) {
    if (Array.isArray(x))
      return x.every(() => false);
    return Object.keys(x).length == 0;
  }

  static getDealtDay(time1, time2) {
    return Math.floor((time1 - time2) / 86400000) + 1;
  }

  static unpackDate(x) {
    x.setHour(x.getHour - user.settings.dayStartTime);
    return {
      year: x.getFullYear(),
      month: x.getMonth(),
      date: x.getDate(),
    };
  }

  static unpackSecond(x) {
    return {
      hour: Math.floor(x / 3600),
      minute: Math.floor(x / 60) % 60,
      second: x % 60,
    }
  }

  static createElement(type, className) {
    let res = document.createElement(type);
    res.className = className;
    return res;
  }
};