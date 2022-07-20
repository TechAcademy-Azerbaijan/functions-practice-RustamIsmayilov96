const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    var reqem = parseInt(result.input); // 9
    let tanitma = true
    function eded (reqem){
         for (let i = 2; i < reqem; i++) {
            if(reqem%i ==0){
                console.log("NO");
                tanitma = false
                break;
            } 
        }
        if(tanitma===true){
            console.log("Yes");
        }
    }
});
