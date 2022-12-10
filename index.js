let cardId

document.getElementById('new-game').addEventListener('click', () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
       .then(res => res.json())
       .then(data => {
        console.log(data)
        cardId = data.deck_id
       })
       

})