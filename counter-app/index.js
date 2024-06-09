let counter = document.getElementById("counter")
let previous = document.getElementById("previous")
let count = 10

function increment() {
    count += 1
    counter.innerText = count
}

function saveCount(){
    let prev = count + ' - '
    previous.textContent += prev

    count = 0
    counter.textContent = count

}
