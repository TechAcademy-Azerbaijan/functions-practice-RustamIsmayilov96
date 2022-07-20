const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "2,3,5"
    var numbers = input.split(','); // ['2', '3', '5']
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
});
