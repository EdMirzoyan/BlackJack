const cards = Array.from(document.getElementsByClassName('card' ))
const finish1 = document.getElementById('finish1');
const finish2 = document.getElementById('finish2');
const newGame = document.getElementById('newGame');
let firstPlayerScore = document.getElementById('firstPlayerScore');
let secondPlayerScore = document.getElementById('secondPlayerScore');

let count = 0
let addcount = 1
let cardsArray = [2,3,4,5,6,7,8,9,10,'valet','dama','karol','tuz']
let firstPlayersRes = 0;
let secondPlayersRes = 0;

cards.map((el,index) => {
    el.addEventListener('click', () => {
        if (count === index ) {
            el.innerHTML = cardsArray[Math.floor(Math.random() * cardsArray.length)]
            count = count + addcount
            console.log(count)
        if(index % 2 === 0) {
           if(!isNaN(el.innerText)) {
            firstPlayersRes = firstPlayersRes +  Number(el.innerText);
           } else if(el.innerText === 'karol' || el.innerText === 'valet' || el.innerText === 'dama') {
                firstPlayersRes = firstPlayersRes + 10;
           } else if(el.innerText === 'tuz') {
                if(firstPlayersRes > 11 ){
                    firstPlayersRes = firstPlayersRes + 1;
                }  else {
                    firstPlayersRes = firstPlayersRes + 11;
                }
            }
        } else if(index % 2 === 1) {
            if(!isNaN(el.innerText)) {
                secondPlayersRes = secondPlayersRes +  Number(el.innerText);
            } else if(el.innerText === 'karol' || el.innerText === 'valet') {
                secondPlayersRes = secondPlayersRes + 10;
            } else if(el.innerText === 'tuz') {
                if(secondPlayersRes > 11 ){
                        secondPlayersRes = secondPlayersRes + 1;
                }  else {
                        secondPlayersRes = secondPlayersRes + 11;
                }
            }
        }
        }
        firstPlayerScore.innerText = `First players Score: ${firstPlayersRes}`;
        secondPlayerScore.innerText = `Second players Score: ${secondPlayersRes}`;

        if(firstPlayersRes > secondPlayersRes && firstPlayersRes > 21) {
            alert(`winner: second player ${secondPlayersRes}, loser: first player ${firstPlayersRes}`);
        } else if(firstPlayersRes === 21) {
            alert('first player wins: 21');  
        }

        if(secondPlayersRes > firstPlayersRes && secondPlayersRes > 21) {
            alert(`winner: first player ${firstPlayersRes}, loser: second player ${secondPlayersRes}`);
        } else if(secondPlayersRes === 21) {
            alert('second player wins: 21'); 
        }
    })
})


finish1.addEventListener('click', () => {
    if (count % 2 === 1) {
        addcount = 2
    } else if (count % 2 === 0) {
        count = count + 1
        addcount = 2
    }
    console.log(count);
})

finish2.addEventListener('click', () => {
    if (count % 2 === 0) {
        addcount = 2
    } else if (count % 2 === 1) {
        count = count + 1
        addcount = 2
    }
})

newGame.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('card')).map(el => {
        el.innerText = '';
        count = 0;
        addcount = 1;
        firstPlayersRes = 0;
        secondPlayersRes = 0; 
        firstPlayerScore.innerText = `First players Score: ${firstPlayersRes}`;
        secondPlayerScore.innerText = `Second players Score: ${secondPlayersRes}`;
    })
})