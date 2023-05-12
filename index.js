let player = {
    name : "Payout",
    chips : 145
}

let cardList = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("palyer-el")
let dynamicEl = document.getElementById("dynamic-el")
let restartBtn = document.createElement("button");
restartBtn.textContent = "RESTART"

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let a= Math.ceil( Math.random()*13 )
    if (a > 10) {
        return 10
    } else if (a === 1) {
        return 11
    } else {
        return a
    }

}

function startGame() {
 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardList = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cardList.length; i++) {
        cardsEl.textContent += cardList[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Wanna draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        dynamicEl.appendChild(restartBtn);

    } else {
        message = "Busted ! Try another hand"
        isAlive = false
        dynamicEl.appendChild(restartBtn);
    }
    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackJack === false){
        let newDrawnCard = getRandomCard()
        sum += newDrawnCard
        cardList.push(newDrawnCard)
        renderGame()
    }
    
}

restartBtn.onclick = function(){
    location.reload()
}