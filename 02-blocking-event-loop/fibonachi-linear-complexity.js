// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function info(text) {
  console.log(text, performance.now().toFixed(2));
}

info("start");

setTimeout(() => info("timeout"), 0);

function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let fib1 = 0;
  let fib2 = 1;
  for (let i = 2; i <= n; i++) {
    const result = fib1 + fib2;
    fib1 = fib2;
    fib2 = result;
  }
  return fib2;
}

console.log(fib(1000));

info("end");
