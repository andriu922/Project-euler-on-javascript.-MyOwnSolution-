    var a =0 ;
    var b = 0;
    for (let a = 0; a <= 1000; a++) {
        if((a%3==0)||(a%5==0)){
            console.log(a);
            b+=a;
            
        }
        
    }
    console.log('REsult = ' + b);