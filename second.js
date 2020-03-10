var a = 0;
var c = 1;
var b = [1, 2];
var summ = 9;

for (var i = 0; i<1000000000; i++){  
    var R = b[a] + b[c];
    if(R>=4000000){
        break;
    }  
    console.log (R);
    b.push(R);
    a++;
    c++;
    var count = b.length - 1;
    if(b[count]%2==false){
        summ+=b[count]
    }
}
console.log('Result is' + ' ' + summ+2);