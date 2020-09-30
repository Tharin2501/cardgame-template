import React, {Component} from "react"

export const deck2: any[] = [];
// @ts-ignore
export let players = [];
export class Deck extends Component {

    public createDeck = (): number | string => {

        const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < values.length; i++) {
            for (let x = 0; x < suits.length; x++) {
                let card = {Value: values[i], Suit: suits[x]};
                deck2.push(card)
            }
        }
        console.log('Number of cards in deck: ' + deck2.length);

        return('Number of cards in deck: ' + deck2.length)
    };

    public shuffleDeck = () => {

        for (let i = 0; i < 100; i++) {
            const location1 = Math.floor((Math.random() * deck2.length));
            const location2 = Math.floor((Math.random() * deck2.length));
            const tmp = deck2[location1];

            deck2[location1] = deck2[location2];
            deck2[location2] = tmp
        }
        console.log('Cards shuffled!');

        return("Cards shuffled!")
    };

    public selectPlayers = (num: number) => {

        players = [];

        for (let i = 1; i <= num; i++) {
            const hand: string[] = [];
            const player = {Name: 'Player ' + i, ID: i, Points: 0, Hand: hand};
            // @ts-ignore
            players.push(player)
        }
        console.log(players);

        return('Number of players selected: ' + players.length)
    };

    public dealCards = (): any => {

        for (let i = 0; i < 52 / players.length; i++) {
            for (let n = 0; n < players.length; n++) {
                const card = deck2.pop()
                // @ts-ignore
                players[n].Hand.push(card)
                //renderCard(card, x);
            }
        }

    };


    render() {
        // @ts-ignore
        const game = new Deck();
        game.createDeck();
        game.shuffleDeck();
        game.selectPlayers(2);
        //game.createPlayersUI();
        game.dealCards();
        return (
            <div>
                <p>{this.createDeck()} </p>
                <p>{this.shuffleDeck()} </p>
                <p>{this.selectPlayers(2)} </p>
                <p>{this.dealCards()} </p>
            </div>
        );
    }
}
