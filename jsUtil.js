// =====================
/**
 * 全局函数
 */

/**
 * 通过标签id获取标签
 */
function id(id) {
    return document.getElementById(id)
}


// =====================


/**
 * 日期工具
 */
let DateUtil = new Object()

/**
 * 某个月的天数
 */
DateUtil.daysOfMonth = function (year, month) {
    let date = new Date(year, month, 0)
    return date.getDate()
}

/**
 * 当前时间
 */
DateUtil.currentDate = function () {
    return new Date()
}

/**
 * 当前年
 */
DateUtil.currentYear = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).year
}

/**
 * 当前月
 */
DateUtil.currentMonth = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).month
}

/**
 * 当前日
 */
DateUtil.currentDay = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).day
}

/**
 * 当前时
 */
DateUtil.currentHour = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).hour
}

/**
 * 当前分
 */
DateUtil.currentMinute = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).minute
}

/**
 * 当前秒
 */
DateUtil.currentSecond = function () {
    return DateUtil.parseDate(DateUtil.currentDate()).second
}

/**
 * 将传入的时间转成：年月日时分秒
 */
DateUtil.parseDate = function (date) {
    let obj = {}
    if (!date) return null
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    obj.year = year
    obj.month = month
    obj.day = day
    obj.hour = hour
    obj.minute = minute
    obj.second = second
    return obj
}


// =====================


/**
 * 字符串工具
 */
let StringUtil = new Object()
/**
 * 判断字符串是否为空
 */
StringUtil.isBlank = function (s) {
    if (!s) return true
    if (!s.trim()) return true
    return false
}




