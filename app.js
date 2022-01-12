const calculator = {
    add : function(a, b){
        return a+b;
    },

    minus : function(a, b){
        return a-b;
    },

    divide : function(a, b){
        return a/b;
    },

    powerOf : function(a, b){
        return a**b;
    },

    times : function(a, b){
        return a*b
    }

}

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.powerOf(10, minusResult);
const divResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.powerOf(divResult, minusResult);