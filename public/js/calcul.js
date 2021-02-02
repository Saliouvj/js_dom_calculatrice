let calculer = (firstNum, operateur, secondNum) => {
    let result = ''
    if (operateur === "add") {
        result = parseFloat(firstNum) + parseFloat(secondNum)
    } else if (operateur === "subtract") {
        result  = parseFloat(firstNum) - parseFloat(secondNum)
    } else if (operateur === "multiply") {
        result  = parseFloat(firstNum) * parseFloat(secondNum)
    } else if (operateur === "divide") {
        result  = parseFloat(firstNum) / parseFloat(secondNum)
    }
    return result
}

export {calculer}