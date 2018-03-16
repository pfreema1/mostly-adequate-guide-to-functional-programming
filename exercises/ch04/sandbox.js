const curry = (fn, ...args) => {
  if (args.length === fn.length) {
    return fn(...args);
  } else {
    return (...moreArgs) => {
      const newArgs = args.concat(moreArgs);

      return curry(fn, ...newArgs);
    };
  }
};

let myFunc = (foo, bar, baz) => foo + bar + baz;

let curried = curry(myFunc)("meow");

let answer = curried("moo")("quack");

console.log(answer);

//need to get a better grasp of whats' happening when using the spread operator in function arguments
