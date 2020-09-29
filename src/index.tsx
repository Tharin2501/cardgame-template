import './styles.scss'

export const deck: any[] = [];
// @ts-ignore
export let players = [];

export class Deck {

    public shuffleDeck = () => {

        for (let i = 0; i < 100; i++) {
            const location1 = Math.floor((Math.random() * deck.length));
            const location2 = Math.floor((Math.random() * deck.length));
            const tmp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = tmp
        }
        console.log('Shuffled!')
    };

    public createDeck = (): void => {

        const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < values.length; i++) {
            for (let x = 0; x < suits.length; x++) {
                let card = {Value: values[i], Suit: suits[x]};
                deck.push(card)
            }
        }
        console.log('Number of cards in deck: ' + deck.length)
    };


    public selectPlayers = (num: number) => {

        players = [];

        for (let i = 1; i <= num; i++) {
            const hand: string[] = [];
            const player = {Name: 'Player ' + i, ID: i, Points: 0, Hand: hand};
            // @ts-ignore
            players.push(player)
        }
        console.log(players)
    };

    public dealCards = (): void => {

        for (let i = 0; i < 52 / players.length; i++) {
            for (let n = 0; n < players.length; n++) {
                const card = deck.pop()
                // @ts-ignore
                players[n].Hand.push(card)
                //renderCard(card, x);
            }
        }
    };

    public renderCards = (): void => {
        let hand = document.getElementById('hand_' + players);
        // @ts-ignore
        hand.appendChild(this.getCardUI(card));
    };

    // @ts-ignore
    public getCardUI = (card) => {
        let el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = card.Suit + ' ' + card.Value;
        return el;
    };

    public createPlayersUI = (): void => {
        {
            // @ts-ignore
            document.getElementById('players').innerHTML = '';
            for (let i = 0; i < players.length; i++) {
                const div_player = document.createElement('div');
                const div_playerid = document.createElement('div');
                const div_hand = document.createElement('div');
                const div_points = document.createElement('div');

                div_points.className = 'points';
                div_points.id = 'points_' + i;
                div_player.id = 'player_' + i;
                div_player.className = 'player';
                div_hand.id = 'hand_' + i;

                // @ts-ignore
                div_playerid.innerHTML = players[i].ID;
                div_player.appendChild(div_playerid);
                div_player.appendChild(div_hand);
                div_player.appendChild(div_points);
                // @ts-ignore
                document.getElementById('players').appendChild(div_player);
            }
        }
    }

}

// @ts-ignore
module.exports = {Deck};
