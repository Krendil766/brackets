module.exports = function check(str, bracketsConfig) {
  let arrBreakets = bracketsConfig.map((item) => item.join(""));

  for (let i = 0; i < arrBreakets.length; i++) {
      if (str.indexOf(arrBreakets[i]) != -1) {
          console.log(arrBreakets[i]);
          
          str = str.replace(arrBreakets[i], '');
          i = -1;
      }
  }
  return str.length === 0 ? true : false
}