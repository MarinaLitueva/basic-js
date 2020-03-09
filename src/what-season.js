module.exports = function getSeason(date) {

  let map = new Map ([
    [0, "winter"],
    [1, "winter"],
    [2, "spring"],
    [3, "spring"],
    [4, "spring"],
    [5, "summer"],
    [6, "summer"],
    [7, "summer"],
    [8, "autumn"],
    [9, "autumn"],
    [10, "autumn"],
    [11, "winter"]
  ])

  if ((arguments.length===0)) {
    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length >= 1) {
    throw  "Error"
  }

  let result = map.get (date.getMonth())
  return result
};
