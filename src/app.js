// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo){
    if ((numberOne < 0) || (numberTwo < 0)){
        return "Negative numbers are not allowed"
    }else{
        return numberOne - numberTwo
    }
}

// Progression 2: Create simple division

function simpleDivision(numberOne, numberTwo){
    if (numberOne < numberTwo){
        return "Cannot divide a smaller number by a larger number"
    }else if ((numberOne < 0) || (numberTwo < 0)){
        return "Negative numbers are not allowed"
    }else if(numberTwo == 0){
        return "Not a number"
    }else{
        return numberOne/numberTwo
    }
}

// Progression 3: Create the special calculator

function specialCalculator(numberOne, numberTwo, operation){
    if (operation == specialAddition){
        return specialAddition(numberOne, numberTwo)
    }else if (operation == simpleDivision){
        return simpleDivision(numberOne, numberTwo)
}
}