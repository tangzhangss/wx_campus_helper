/*
 *   功能:实现VBScript的DateAdd功能.
 *   参数:interval,字符串表达式，表示要添加的时间间隔.
 *   参数:number,数值表达式，表示要添加的时间间隔的个数.
 *   参数:date,Date对象.
 *   返回:新的时间对象.
 *   var now = new Date();
 *   var newDate = dateAdd( "d", 5, now);
 *---------------   dateAdd(interval,number,date)   -----------------
 */
function dateAdd(interval, number, date) {
  switch (interval) {
    case "y": {
      date.setFullYear(date.getFullYear() + number);
      return date;
      break;
    }
    case "q": {
      date.setMonth(date.getMonth() + number * 3);
      return date;
      break;
    }
    case "m": {
      date.setMonth(date.getMonth() + number);
      return date;
      break;
    }
    case "w": {
      date.setDate(date.getDate() + number * 7);
      return date;
      break;
    }
    case "d": {
      date.setDate(date.getDate() + number);
      return date;
      break;
    }
    case "h": {
      date.setHours(date.getHours() + number);
      return date;
      break;
    }
    case "m": {
      date.setMinutes(date.getMinutes() + number);
      return date;
      break;
    }
    case "s": {
      date.setSeconds(date.getSeconds() + number);
      return date;
      break;
    }
    default: {
      date.setDate(date.getDate() + number);
      return date;
      break;
    }
  }
}

function showToastWithNoneIcon(title, duration) {
  duration = duration == undefined ? 1500 : duration;
  wx.showToast({
    title: title,
    icon: "none",
    duration: duration
  })
}
function showToastWithWarnIcon(title, duration) {
  duration = duration == undefined ? 1500 : duration;
  wx.showToast({
    title: title,
    icon: "none",
    image: "/img/toast/warn.png",
    duration: duration
  })
}
function showToastWithSuccessIcon(title, duration) {
  duration = duration == undefined ? 1500 : duration;
  wx.showToast({
    title: title,
    icon: "success",
    duration: duration
  })
}

function clearEmoji(str) {
  return str.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
}

function friendly_time(time1) {

  var time1 = new Date(time1);//需要转换的时间

  var time2 = new Date();//当前时间
  var time = 0;//时间差
  //需要转换的不可能比当前时间大..如果有 自行添加判断
  time = time2 - time1;
  if (time < 1000) return "刚刚";
  time = parseInt(time / 1000);
  if (time > 86400) {
    var day = parseInt(time / (24 * 60 * 60));
    if (day == 1) {
      let min = time1.getMinutes();
      min = min > 9 ? min : '0' + min;
      return "昨天(" + time1.getHours() + ":" + min + ")";
    } else if (day < 30) {
      return day + "天前";
    } else if (day < 360) {
      var moth = parseInt(day / 30);
      return moth + "个月前";
    } else {
      var year = parseInt(day / 360);
      return year + "年前";
    };
  } else if (time > 3600) {
    var hour = parseInt(time / (60 * 60));
    return hour + "小时前";
  } else if (time > 60) {
    var hour = parseInt(time / 60);
    return hour + "分钟前";
  } else {
    return time + "秒前";
  }
}
/**
 * 时间 格式化
 * usedDay String
 * 时间格式与PHP格式 一致....仅一部分
 * return String类型
 */
function format(usedDay, fmt) {
  var usedDate = new Date(usedDay);
  var o = {
    "m+": usedDate.getMonth() + 1, //月份 
    "d+": usedDate.getDate(), //日 
    "h+": usedDate.getHours(), //小时 
    "i+": usedDate.getMinutes(), //分 
    "s+": usedDate.getSeconds(), //秒 
    "q+": Math.floor((usedDate.getMonth() + 3) / 3), //季度 
    "S": usedDate.getMilliseconds() //毫秒 
  };
  if (/([y|Y]+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (usedDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
module.exports = {
  showToastWithNoneIcon: showToastWithNoneIcon,
  showToastWithWarnIcon: showToastWithWarnIcon,
  showToastWithSuccessIcon: showToastWithSuccessIcon,
  friendly_time: friendly_time,
  clearEmoji: clearEmoji,
  format: format,
  dateAdd: dateAdd
}
