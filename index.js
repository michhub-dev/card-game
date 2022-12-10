let card_Id
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
     console.log(data.cards)
     document.getElementById('draw-img').innerHTML = 
     `<img src=${data.cards[0].image} />
      <img src=${data.cards[1].image} />
     `
    })
 }
document.getElementById('draw-btn').addEventListener('click', drawCard)