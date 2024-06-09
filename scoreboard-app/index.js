let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0

function score(base, input) {
    if(base == 1) {
        homeScore += input
        home.innerText = homeScore
        console.log(base, homeScore)
    } else if(base == 2) {
        guestScore += input
        guest.innerText = guestScore
        console.log(base, guestScore)
    }
}

function reset() {
    home.innerText = 0
    guest.innerText =0
}