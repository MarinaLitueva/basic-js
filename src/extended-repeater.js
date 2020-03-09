module.exports = function repeater(str, options) {
    let strAdd = "";
    let result = "";
    if (options.hasOwnProperty("additionRepeatTimes")) {
      if (options.additionRepeatTimes != undefined) {
        let addsep =
          options.additionSeparator === undefined
            ? "|"
            : options.additionSeparator;
        strAdd = (options.addition + addsep)
          .repeat(options.additionRepeatTimes)
          .slice(0, strAdd.length - addsep.length);
      } else strAdd = options.addition;
    }
  
    if (options.hasOwnProperty("repeatTimes")) {
      if (options.repeatTimes != undefined) {
        let addsep = options.separator === undefined ? "+" : options.separator;
        result = (str + strAdd + addsep).repeat(options.repeatTimes);
        result = result.slice(0, result.length - addsep.length);
      } else result = str + strAdd;
    }
    return result;
  }