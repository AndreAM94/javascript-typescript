module.exports = {
    curry: function curry(fn, ctx){
        return function cf(){
          var args = [].slice.call(arguments);
          return (args.length >= fn.length) ?
            fn.apply(null, args) :
            function () {
              return cf.apply(ctx, args.concat([].slice.call(arguments)));
            };
        };
      }
};