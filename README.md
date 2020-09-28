## Cardgame-template
A template for creating card games.
Implemented using TypeScript.

Contains boilerplate code for creating any type of card game you want. 
Bootstraped with the CRA template so that the user can add their own frontend


### Requirements
- Yarn or NPM
- TypeScript (v3.0.0+) 

### Installation 


Yarn

`$ yarn install cardgame-template`

NPM
 
`$ npm install cardgame-template`

### Usage


  ```typescript
  import {Deck} from cardgame-template/dist";

  const Example = () => {
  
    const game = new Deck(); // create instance of Deck class
  
    game.createDeck(); // create the 52 cards with suits and values.
    game.shuffleDeck(); // shuffle the deck.
    game.selectPlayers(2); // specify the number of players.
    game.dealCards(); // deal the cards equally to all players
    
       return(
            <div>
                ...
            </div>
        )
  }
  ```                        

### API Documentation


| Name        | Type            | Description  |
| ------------- |-------------  | -------------|
| createDeck      | void        | Create the deck containing all 52 cards. |
| shuffleDeck     | void        | Shuffle the deck.                     |
| selectPlayers   | number      | Select amount of players by providing a number as argument. |
| dealCards       | void        | Deal the cards. 52 cards / number of players.



### License
Source code in this repository is released under [MIT license](/LICENSE.txt)
