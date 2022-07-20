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
eded(4)
