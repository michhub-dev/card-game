let card_Id
let imageContainer = document.getElementById('draw-img')

// fetch the API to start a new game when clicked
document.getElementById('new-game').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
       .then(res => res.json())
       .then(data => {
        console.log(data)
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