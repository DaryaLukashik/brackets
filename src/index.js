module.exports = function check(str, bracketsConfig) {
  let res;
  for (let i = 0; i < bracketsConfig.length; i++) {
    console.log(
      "str=",
      str,
      bracketsConfig[i],
      "after",
      str.split(bracketsConfig[i][0])
    );
    console.log(
      "str=",
      str,
      bracketsConfig[i],
      "after",
      str.split(bracketsConfig[i][0])
    );
    res =
      str.split(bracketsConfig[i][0]).length ==
      str.split(bracketsConfig[i][0]).length;
    if (res == false) {
      return false;
    }
  }
  return res;
};
