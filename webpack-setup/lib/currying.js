module.exports = {
  curry: function curry(fn, ctx) {
    return function cf() {
      var args = [].slice.call(arguments);
      return (args.length >= fn.length) ?
        fn.apply(null, args) :
        function () {
          return cf.apply(ctx, args.concat([].slice.call(arguments)));
        };
    };
  },
  uncurriedSum: function (a, b, c) {
    return a + b + c
  },
  curriedSum3: function (a) {
    return function (b) {
      return function (c) {
        return a + b + c
      }
    }
  },
};