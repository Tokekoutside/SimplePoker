
import { _decorator, Component, Node,Sprite,Label, renderer, math, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = cards
 * DateTime = Wed May 04 2022 14:08:00 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = cards.ts
 * FileBasenameNoExtension = cards
 * URL = db://assets/script/cards.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('cards')
export class cards extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(SpriteFrame)
    front : Label = null;
    
    @property(SpriteFrame)
    back: Sprite = null;
    // serializableDummy = 0;
     Card = ["1Spade","2Spade","3Spade","4Spade","5Spade","6Spade","7Spade","8Spade","9Spade","10Spade","JSpade","QSpade","KSpade",
            "1Diamond","2Diamond","3Diamond","4Diamond","5Diamond","6Diamond","7Diamond","8Diamond","9Diamond","10Diamond","JDiamond","QDiamond","KDiamond",
            "1Club","2Club","3Club","4Club","5Club","6Club","7Club","8Club","9Club","10Club","JClub","QClub","KClub",
            "1Heart","2Heart","3Heart","4Heart","5Heart","6Heart","7Heart","8Heart","9Heart","10Heart","JHeart","QHeart","KHeart",];
    
    onLoad (){

        // let cards = ['asdsa',1,2,10,24,51]
        // //onlaodsadas
        // const cards1 = cards[Math.floor(Math.random() *cards.length)];
        // console.log(cards1);

        // var card1 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card1);
        // var card2 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card2);
        // var card3 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card3);
        // var card4 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card4);
        // var card5 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card5)
        // var card6 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card6)
        // var card7 = this.Card[Math.floor(Math.random() * this.Card.length)];
        // console.log(card7)
        // card 1 //
      
    }
    start () {
        // [3]
        var CardDraw1 = Math.floor(Math.random() * this.Card.length);
        var Card1 = this.Card.splice(CardDraw1,1)[0]
        console.log(Card1)
        // Card 2 //
        var CardDraw2 = Math.floor(Math.random() * this.Card.length);
        var Card2 = this.Card.splice(CardDraw2,1)[0]
        console.log(Card2)
        // Card 3 //
        var CardDraw3 = Math.floor(Math.random() * this.Card.length);
        var Card3 = this.Card.splice(CardDraw3,1)[0]
        console.log(Card3)
        // Card 4 //
        var CardDraw4 = Math.floor(Math.random() * this.Card.length);
        var Card4 = this.Card.splice(CardDraw4,1)[0]
        console.log(Card4)
        // Card 5 //
        var CardDraw5 = Math.floor(Math.random() * this.Card.length);
        var Card5 = this.Card.splice(CardDraw5,1)[0]
        console.log(Card5)
        // Card 6 //
        var CardDraw6 = Math.floor(Math.random() * this.Card.length);
        var Card6 = this.Card.splice(CardDraw6,1)[0]
        console.log(Card6)
        // Card 7 //
        var CardDraw7 = Math.floor(Math.random() * this.Card.length);
        var Card7 = this.Card.splice(CardDraw7,1)[0]
        console.log(Card7)
        // card remain //
        console.log(this.Card)

    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
