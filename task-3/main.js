const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var reqem = parseInt(result.input); // 9
    let arr = []
    function eded (array){
        for (let i = array.length-1; i >=0; i--) {
           arr.push(array[i]) 
            
        }console.log(arr);
    }
    eded([92846,96841,33582,25998])
});
