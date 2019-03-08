var i;

for(i=1;i<=100;i++){
    if(i % 2 == 0){
        console.log('GENAP');
    }
    else{
        console.log('GANJIL');
    }
}
console.log('LOOPING KELIPATAN 3');
i=1;
while(i<=100){
    if(i % 3 == 0){
        console.log('3 kelipatan 3');
    }
    i = i+2;
}
console.log('LOOPING KELIPATAN 6');
i=1;
while(i<=100){
    if(i % 6 == 0){
        console.log('6 kelipatan 6 ');
    }
    i = i+5;
}
console.log('LOOPING KELIPATAN 10');
i=1;
while(i<=100){
    if(i % 10 == 0){
        console.log('10 kelipatan 10');
    }
    i = i+9;
}