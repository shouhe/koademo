function* a(next) {
  yield 1;

  // 执行下一个中间件
  yield* next;

  yield '继续执行A中间件';
}

// 中间件 b
function* b(next) {
  yield 2;
  yield 3;
}


var next = function* (){
};
var i = [a, b].length;

// 通过next首尾相连
while(i--) {
  // 相当于把B绑定到A的 next中 执行的是一个从右到左的compose rightReduce

  next = [a, b][i].call(null, next);
  console.log(next);
}
// 包裹第一个middleware
function* start(ne) {
  return yield* ne;
}


// 输出
console.log(start(next).next());
console.log(start(next).next());
console.log(start(next).next());
console.log(start(next).next());
console.log(start(next).next());