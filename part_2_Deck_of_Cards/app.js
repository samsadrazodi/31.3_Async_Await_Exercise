

// part 1

let baseURL = 'https://deckofcardsapi.com/api/deck';
async function part1(){

    let res = await axios.get(`${baseURL}/new/draw/`);
    console.log(`Deck: `, res.data.deck_id)
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    

}



// part 2

async function part2(){
    let deck = await axios.get(`${baseURL}/new/shuffle/`)
    let res = await axios.get(`${baseURL}/${deck.data.deck_id}/draw/?count=1`);
    let res2 = await axios.get(`${baseURL}/${deck.data.deck_id}/draw/?count=1`);
    console.log(`deck: ${res.data.deck_id}--> card: ${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    console.log(`deck: ${res.data.deck_id}--> card: ${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`)

}



// part 3

async function cardDraw(){
    let btn = document.getElementById('button');
    let display = document.getElementById('displayArea');

    let deck = await axios.get(`${baseURL}/new/shuffle/`);
    btn.addEventListener('click', async function(){
        let card = await axios.get(`${baseURL}/${deck.data.deck_id}/draw/`)
        let cardImg = card.data.cards[0].image;
        let img = document.createElement('img')
        img.src=cardImg;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        img.style.transform = `rotate(${angle}deg) translate(${randomX}px, ${randomY}px)`;
        display.append(img)
        if( card.data.remaining ===0){btn.remove();} 
    })
    
}
cardDraw()