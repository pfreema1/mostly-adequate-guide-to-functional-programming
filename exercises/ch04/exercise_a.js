// Refactor to remove all arguments by partially applying the function.

var _ = require("ramda");

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

var words = function(str) {
  return _.split(" ", str);
};

// words :: String -> [String]
// const words = str => split(" ", str);

console.log(words("poopoosnacks foofoofeet"));

// const words = split(' ');
