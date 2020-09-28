// Globals
export const deck: any[] = []
// @ts-ignore
export let players = []

export class Deck {

  public shuffleDeck = (): void => {

    for (let i = 0; i < 100; i++) {
      const location1 = Math.floor((Math.random() * deck.length))
      const location2 = Math.floor((Math.random() * deck.length))
      const tmp = deck[location1]

      deck[location1] = deck[location2]
      deck[location2] = tmp
    }
    console.log('Shuffled')
  }

  public createDeck = (): void => {

    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

    for (let i = 0; i < values.length; i++) {
      for (let x = 0; x < suits.length; x++) {
        let card = { Value: values[i], Suit: suits[x] }
        deck.push(card)
      }
    }
    console.log('Number of cards in deck: ' + deck.length)
  }


  public selectPlayers = (num: number) => {

    players = []

    for (let i = 1; i <= num; i++) {
      const hand: string[] = []
      const player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
      // @ts-ignore
      players.push(player)
    }
    console.log(players)
  }

  public dealCards = (): void => {

    for (let i = 0; i < 52 / players.length; i++) {
      for (let n = 0; n < players.length; n++) {
        const card = deck.pop()
        // @ts-ignore
        players[n].Hand.push(card)
      }
    }
  }

}

// @ts-ignore
module .exports = {Deck};
