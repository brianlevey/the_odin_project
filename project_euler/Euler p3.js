var isPrime = function(primenum){
  for(i=2; i<primenum; i++){
    if(primenum % i ===0){
      return(false);
    }
  }
  return(true);
}

var bigprime = function(num){
  var j=2, pn=num;
  while(num>1){
    if(num % j === 0){
      num /= j;
      if(isPrime(j===true)){
        pn = j;
      }
    }
    j += 1;
  }
  return(pn);
}

debug(bigprime(600851475143));
