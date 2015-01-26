var result=0;
var fib = [1,2];

while(fib[1]<4000000){
  if(fib[1] % 2==0){
    result = result + fib[1];
  }
  var fib = [fib[1], fib[0]+fib[1]];
}

debug(result);
