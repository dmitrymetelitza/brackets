module.exports = function check(str, bracketsConfig) {
  let result = str;
  const brackets = bracketsConfig.map((b) => b.join(""));
  let repeat = true;
  while (repeat) {
    let tmp = result;
    brackets.forEach((b) => {
      result = result.replace(b, "");
    });
    if (result === tmp) {
      repeat = false;
    } else {
      repeat = true;
    }
  }
  return !!!result;
};
