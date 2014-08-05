$(document).ready(function(){
    
    var number = 5000;
    var time = 5000;
    var diff1, diff2, diff3, time1, time2, time3, x1,x2,x3;
    var displayNumber = 0;
    
    //if number > 500, show last 20 numbers, slowly
    if(number <= 500){
        diff1 = Math.floor(number*.7);
        diff2 = Math.floor(number*.2);
        diff3 = number-diff1-diff2;
    }else{
        diff1 = Math.floor(number*.8);
        diff2 = number-diff1-20;
        diff3 = 20;
    }
    
    time1 = Math.floor(time*.15);
    time2 = Math.floor(time*.35);
    time3 = Math.floor(time*.5);
    x1 = time1/diff1;
    x2 = time2/diff2;
    x3 = time3/diff3;
    
//    console.log(diff1 +", "+ diff2 +", "+ diff3);
//    console.log(time1 +", "+ time2 +", "+ time3);
//    console.log(x1 +", "+ x2 +", "+ x3);

    var timer1 = setTimeout(function(){
        callInterval(0, diff1, x1);
    }, 0);
    
    var timer2 = setTimeout(function(){
        clearInterval(displayNumber);
        callInterval(diff1, diff1+diff2, x2);
    }, time1);
    
    var timer3 = setTimeout(function(){
        clearInterval(displayNumber);
        callInterval(diff1+diff2+1, number, x3);
    }, time2);

    function callInterval(start, end, interval){
        displayNumber = setInterval(function(){
            if(start <= end){
                console.log(start);
                $("#number").text(start++);
            }else
                clearInterval(displayNumber);
        }, interval);
    }
    
});