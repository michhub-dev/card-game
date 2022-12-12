let card_Id
const imageContainer = document.getElementById('draw-img')
const winnerMessage = document.getElementById('winner-message')
const remainingCard = document.getElementById('remaining')
const drawBTN = document.getElementById('draw-btn')
// fetch the API to start a new game when clicked
document.getElementById('new-game').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
       .then(res => res.json())
       .then(data => {
        card_Id = data.deck_id
        remainingCard.textContent = `Remaining card: ${data.remaining}`
       })
       

})
// Draw and shuffle the cards when clicked 
 const drawCard = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${card_Id}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        imageContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class='img'/>`
        imageContainer.children[1].innerHTML =  `<img src=${data.cards[1].image} class='img'/>`
        const winnerText = determineWinner(data.cards[0], data.cards[1])
        winnerMessage.textContent = winnerText
        remainingCard.textContent = `Remaining card: ${data.remaining}`

        if(data.remaining === 0){
            drawBTN.disabled = true
        }
    })
 }
drawBTN.addEventListener('click', drawCard)

const determineWinner = (card1, card2) => {
    const options = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1Value = options.indexOf(card1.value) 
    const card2Value = options.indexOf(card2.value) 

    if(card1Value > card2Value){
        return 'card 1 wins'
    }else if(card1Value < card2Value){
        return 'card 2 wins'
    }else{
        return 'draw'
    }
}

