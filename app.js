document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: '1',
            img: 'img/1.jpg'
        },
        {
            name:'2',
            img: 'img/2.jpg'
        },
        {
            name:'3',
            img: 'img/3.jpg'
        },
        {
            name:'4',
            img: 'img/4.jpg'
        },
        {
            name:'5',
            img: 'img/5.jpg'
        },
        {
            name:'6',
            img: 'img/6.jpg'
        },
        {
            name:'7',
            img: 'img/7.jpg'
        },
        {
            name:'8',
            img: 'img/8.jpg'
        },
        {
            name: '1',
            img: 'img/1.jpg'
        },
        {
            name:'2',
            img: 'img/2.jpg'
        },
        {
            name:'3',
            img: 'img/3.jpg'
        },
        {
            name:'4',
            img: 'img/4.jpg'
        },
        {
            name:'5',
            img: 'img/5.jpg'
        },
        {
            name:'6',
            img: 'img/6.jpg'
        },
        {
            name:'7',
            img: 'img/7.jpg'
        },
        {
            name:'8',
            img: 'img/8.jpg'
        },
        

    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const  resultDisplay = document.querySelector('#score--result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'img/blank.jpg')
          cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
          alert('T\'es selfish, pas aware')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('J\'adore l\'eau, dans dix ans y\'en a plus.')
          cards[optionOneId].setAttribute('src', 'img/won.jpg')
          cards[optionTwoId].setAttribute('src', 'img/won.jpg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'img/blank.jpg')
          cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
          alert('Tu me déçois')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = '1 et 1 ça fait 11 et ça c\'est beau'
        }
      }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 100)
        }
    }

    createBoard()

})

