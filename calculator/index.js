let result = document.getElementById("result")
let resValue = result.value
console.log(resValue)

function checker(res, input) {
    if (res == 0) {
        result.textContent = input
    } else if (res != 0) {
        result.textContent += input
        console.log(resValue)
    }
}

function one(){
    let input = 1
    checker(resValue, input)
}

function two(){
    let input = 2
    checker(resValue, input)
}

function three(){
    let input = 3
    checker(resValue, input)
}

function four(){
    let input = 4
    checker(resValue, input)
}

function five(){
    let input = 5
    checker(resValue, input)
}

function six(){
    let input = 6
    checker(resValue, input)
}

function seven(){
    let input = 7
    checker(resValue, input)
}

function eight(){
    let input = 8
    checker(resValue, input)
}

function nine(){
    let input = 9
    checker(resValue, input)
}

function zero(){
    let input = 0
    checker(resValue, input)
}

function rightPar(){
    let input = '('
    checker(resValue, input)
}

function leftPar(){
    let input = ')'
    checker(resValue, input)
}

function modulo(){
    let input = '%'
    checker(resValue, input)
}

function AC(){
    let input = 0
    result.innerText = input
}

function divide(){
    let input = '/'
    checker(resValue, input)
}

function multiply(){
    let input = '*'
    checker(resValue, input)
}

function minus(){
    let input = '-'
    checker(resValue, input)
}

function plus(){
    let input = '+'
    checker(resValue, input)
}

function dot(){
    let input = '.'
    checker(resValue, input)
}

function equals() {
    let input = resValue
    result.innerText = input

}