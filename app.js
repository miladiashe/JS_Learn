const age = parseInt(prompt("나이."));



if(isNaN(age) || age<0){
    console.log("양수를 적어라")
}else if(age < 19){
    console.log("집에 가서 자라")
} else if(age >= 18 && age <= 50){
    console.log("술 많이 먹자")
} else if( age>50 && age<=80){
    console.log("아조씨.....")
} else{
    console.log("건강을 생각하셔야죠 어르신")
}
