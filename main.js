function ccardnum(value){

    let countOdd = 0;
    let countEven = 0;
    let k = x.length;
    for(let i = k - 1; i >= 0; i--){

        let ccval = parseInt(value[i]);

        if(i % 2 !==0){
            countOdd += ccval;
        }

        else{
            ccval *= 2;
            if(ccval > 9){
                ccval -= 9;
                countEven += ccval;
            }
            else{
                countEven += ccval
            }

        }

     console.log(ccval)


    }
    let sum = countOdd + countEven;
    
    if (sum % 10 == 0){
        
        return true

    
    }

    return false
       
    
    }


let payBtn = document.getElementById('btn');
let cardField = document.getElementById('cardnum');

if(ccardnum(btn.value)) {
    payBtn.style.color = "red";
    cardField.style.color = "red"
    e.preventDefault();
}else{
    payBtn.style.color = "green";
    cardField.style.color = "red",
    e.preventDefault();
}



        



