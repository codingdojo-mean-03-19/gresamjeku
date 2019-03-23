function fib() {
    var start = 0;
    var num = 1;
    function nacci() {
        const sum = start;
        console.log(num);
        start = num;
        num += sum;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  