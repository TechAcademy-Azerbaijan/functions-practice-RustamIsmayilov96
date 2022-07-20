const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var number = parseInt(result.input); // 9
    var square_number = number*number; // 81
    let first = 0
    let second = 0
    let third = 0
    let orta 
    
    function disk(say){
    
        first = parseInt (say/100) * 100
        orta = (parseInt((say%100)/10))
        third = ((say - first)%10) * 2
    if(orta%2==0){
       second =  (orta/2)*30
    }else if(orta%2 !=0){
        second = parseInt(orta/2)*30
    }
    console.log(second);
    
    }
    disk(123)
    
});
