let card_Id
let imageContainer = document.getElementById('draw-img')

// fetch the API to start a new game when clicked
document.getElementById('new-game').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
       .then(res => res.json())
       .then(data => {
        card_Id = data.deck_id
       })
       

})
// Draw and shuffle the cards when clicked 
 const drawCard = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${card_Id}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        imageContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class='img'/>`
        imageContainer.children[1].innerHTML =  `<img src=${data.cards[1].image} class='img'/>`
    })
 }
document.getElementById('draw-btn').addEventListener('click', drawCard)

const determineWinner = (card1, card2) => {
    const options = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1Value = options.indexOf(card1.value) 
    const card2Value = options.indexOf(card2.value) 

    if(card1Value > card2Value){
        console.log('card 1 wins')
    }else if(card1Value < card2Value){
        console.log('card 2 wins')
    }else{
        console.log('draw')
    }
}

const card1IndexValue = {
    value: '8'
}
const card2IndexValue = {
    value: 'ACE'
}

determineWinner(card1IndexValue, card2IndexValue)