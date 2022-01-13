const age = parseInt(prompt("나이."));



if(isNaN(age)){
    console.log("숫자를 적어라")
}else if(age < 19){
    console.log("집에 가서 자라")
} else{
    console.log("소주 만병만 주소")
}
