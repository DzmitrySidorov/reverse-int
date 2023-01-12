module.exports = function reverse (n) {
 if (n < 0) {n = -1 * n}
 n = n.toString();
 return parseInt(n.split('').reverse().join(''));
}
