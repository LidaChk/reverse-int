module.exports = function reverse (n) {
  return parseInt((n+ '').replace(/\D+/, '').split('').reverse().join(''));
}
