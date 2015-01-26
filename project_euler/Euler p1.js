// version 1 using a for loop to determine whether each is a multiple
var result = 0;
for (i=1; i<1000; i++){
    if (i%3==0 || i%5==0){
        result += i;
    }
}
debug(result);


// version 2 storing all multiples first then adding
var m3=0;
var m5=0;
var m15=0;

for(i=3; i<1000; i+=3){
  m3 += i;
}

for(i=5; i<1000; i+=5){
  m5 += i;
}

for(i=15; i<1000; i+=15){
  m15 += i;
}

debug(m3+m5-m15);

