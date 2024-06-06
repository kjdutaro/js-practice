
document.addEventListener("DOMContentLoaded", function() {
    result = document.getElementById("result")
})

function getResult() {
    return result.value
}

function setResult(value) {
    result.value = value
}

function appendValue(value) {
    let res = getResult()
    if (res === "0") {
        setResult(value)
    } else {
        setResult(res + value)
    }
}

function clearResult() {
    setResult("0")
}

function remove() {
    let res = getResult()
    if (res.length > 0) {
        setResult(res.slice(0, -1))
    } else {
        setResult("0")
    }
}

function evaluateResult() {
    try {
        setResult(eval(getResult()))
    } catch (error) {
        setResult("Error")
    }
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault()
    })
})


// Function mapping for buttons
function one() { appendValue('1') }
function two() { appendValue('2') }
function three() { appendValue('3') }
function four() { appendValue('4') }
function five() { appendValue('5') }
function six() { appendValue('6') }
function seven() { appendValue('7') }
function eight() { appendValue('8') }
function nine() { appendValue('9') }
function zero() { appendValue('0') }
function zeros() { appendValue('00') }
function modulo() { appendValue('%') }
function divide() { appendValue('/') }
function multiply() { appendValue('*') }
function minus() { appendValue('-') }
function plus() { appendValue('+') }
function dot() { appendValue('.') }
function allClear() { clearResult() }
function cancel() { remove() }
function equals() { evaluateResult() }
