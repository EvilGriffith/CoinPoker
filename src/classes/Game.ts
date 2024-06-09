export class Game{
    createCards(){
        const deck = []
        let startcard: number | string = 2
        for(let cards = 0; cards <= 12; cards++){
            if(startcard <= 10){
                for(let suit = 0; suit <= 3;suit++){
                    let finsuit = ''
                    switch (suit){
                        case 0:
                            finsuit = "♠"
                            break
                        case 1:
                            finsuit = "♥"
                            break
                        case 2:
                            finsuit = "♦"
                            break
                        case 3:
                            finsuit = "♣"
                            break
                    }
                    const card = {
                        number: startcard,
                        suit: finsuit,
                        name: startcard + finsuit
                    }
                    deck.push(card)
                    if(suit == 3){
                        startcard += 1
                    }
                }
            }
            else if(startcard == 11){
                for(let suit = 0; suit <= 3;suit++){
                    let finsuit = null
                    switch (suit){
                        case 0:
                            finsuit = "♠"
                            break
                        case 1:
                            finsuit = "♥"
                            break
                        case 2:
                            finsuit = "♦"
                            break
                        case 3:
                            finsuit = "♣"
                            break
                    }
                    const card = {
                        number: 11,
                        suit: finsuit,
                        name: "J" + finsuit
                    }
                    deck.push(card)
                    if(suit == 3){
                        startcard += 1
                    }
                }
            }
            else if(startcard == 12){
                for(let suit = 0; suit <= 3;suit++){
                    let finsuit = null
                    switch (suit){
                        case 0:
                            finsuit = "♠"
                            break
                        case 1:
                            finsuit = "♥"
                            break
                        case 2:
                            finsuit = "♦"
                            break
                        case 3:
                            finsuit = "♣"
                            break
                    }
                    const card = {
                        number: 12,
                        suit: finsuit,
                        name: "Q" + finsuit
                    }
                    deck.push(card)
                    if(suit == 3){
                        startcard += 1
                    }
                }
            }
            else if(startcard == 13){
                for(let suit = 0; suit <= 3;suit++){
                    let finsuit = null
                    switch (suit){
                        case 0:
                            finsuit = "♠"
                            break
                        case 1:
                            finsuit = "♥"
                            break
                        case 2:
                            finsuit = "♦"
                            break
                        case 3:
                            finsuit = "♣"
                            break
                    }
                    const card = {
                        number: 13,
                        suit: finsuit,
                        name: "K" + finsuit
                    }
                    deck.push(card)
                    if(suit == 3){
                        startcard += 1
                    }
                }
            }
            else if(startcard == 14){
                for(let suit = 0; suit <= 3;suit++){
                    let finsuit = null
                    switch (suit){
                        case 0:
                            finsuit = "♠"
                            break
                        case 1:
                            finsuit = "♥"
                            break
                        case 2:
                            finsuit = "♦"
                            break
                        case 3:
                            finsuit = "♣"
                            break
                    }
                    const card = {
                        number: 1,
                        suit: finsuit,
                        name: "A" + finsuit
                    }
                    deck.push(card)
                    if(suit == 3){
                        startcard += 1
                    }
                }
            }
        }
        return deck
    }
    shuffleCards(deck: Array<object>){
        const shufflecards = deck.sort(() => Math.random() - 0.5)
        return shufflecards
    }
    checkcombination(cards: any){
        let combination = null

        // check pair

        for(let z = 0; z < cards.length;z++){
            const checkcard = cards[z]
            for(let i = 0; i < cards.length;i++){
                if(checkcard.number == cards[i].number){
                    if(checkcard.suit !== cards[i].suit){
                        combination = "pair"
                    }
                }
                else{
                    continue
                }
            }
        }
        
        // check double pair

        let firstpair = null
        let secondpair = null
        let stopcicle = false

        while(!stopcicle){
            for(let i = 0; i < cards.length; i++){
                
                if(i == cards.length - 1){
                    stopcicle = true
                    
                }
                const checkcard = cards[i]
                for(let z = 0; z < cards.length;z++){
                    if(checkcard.number == cards[z].number){
                        if(checkcard.suit !== cards[z].suit){
                            if(firstpair == null){
                                firstpair = checkcard.number

                            }
                            else if(secondpair == null && checkcard.number !== firstpair){
                                secondpair = checkcard.number
                                stopcicle = true
                            }
                        }
                    }
                }
                
            }
            
        }

        if(firstpair && secondpair){
            combination = "double pair"
        }

        // check set

        let firstsuit = null
        let secondsuit = null
        let numberofset = null
        for(let z = 0; z < cards.length;z++){
            const checkcard = cards[z]
            for(let i = 0; i < cards.length;i++){
                if(checkcard.number == cards[i].number){
                    if(checkcard.suit !== cards[i].suit){
                        firstsuit = checkcard.suit
                        secondsuit = cards[i].suit
                        numberofset = checkcard.number
                        for(let c = 0; c < cards.length;c++){
                            if(numberofset == cards[c].number && firstsuit !== cards[c].suit && secondsuit !== cards[c].suit){
                                combination = "set"
                            }
                        }
                    }
                }
                else{
                    continue
                }
            }
        }

        // check street

        // ДОДЕЛАТЬ НАХУЙ 😡😡😡😡
        const sortedcards = cards.sort((a:any,b:any) => {return a.number - b.number})
        for (let i = 1; i < sortedcards.length; i++) {
            if (sortedcards[i] - sortedcards[i - 1] == 1) {
              combination = "street"
            }
          }
        
        
        

        return combination
    }
    

}