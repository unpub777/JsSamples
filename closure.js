function closure(value) {
  var sum = 0;
  var func = function (v) {
     if (v) {
        sum += v;
        return func;
     } else {
        return sum;
     }
  }
  return func(value);
}

var res = closure(1)(2)(3)(4)();
console.log(res);