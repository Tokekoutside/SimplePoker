// KODE NYA BERANTAKAN ///
// sorry for messy code//
// maybe another time//
// hey as long as is work//


import {
    _decorator,
    Component,
    Node,
    input,
    Input,
    Sprite,
    SpriteFrame,
    url,
    Label,
    EventKeyboard,
    EventMouse,
    KeyCode,
} from 'cc';


const {
    ccclass,
    property
} = _decorator;

/**
 * Predefined variables
 * Name = randomcard
 * DateTime = Thu May 05 2022 09:25:02 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = randomcard.ts
 * FileBasenameNoExtension = randomcard
 * URL = db://assets/script/randomcard.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('randomcard')
export class randomcard extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property

    //  HOW TO MAKE ARRAY IN PROPERTIES???? //
    /* 
    @property(SpriteFrame)
    deckCard : SpriteFrame[] =[];

    */
    @property(Label)
    playerName = null;
    @property(Label)
    betammount = null;
    @property(Label)
    balance = null;
    @property(Label)
    winresult = null;


    @property(SpriteFrame)
    backcard: SpriteFrame = null;

    // SPADE //

    @property(SpriteFrame)
    spade1: SpriteFrame = null;
    @property(SpriteFrame)
    spade2: SpriteFrame = null;
    @property(SpriteFrame)
    spade3: SpriteFrame = null;
    @property(SpriteFrame)
    spade4: SpriteFrame = null;
    @property(SpriteFrame)
    spade5: SpriteFrame = null;
    @property(SpriteFrame)
    spade6: SpriteFrame = null;
    @property(SpriteFrame)
    spade7: SpriteFrame = null;
    @property(SpriteFrame)
    spade8: SpriteFrame = null;
    @property(SpriteFrame)
    spade9: SpriteFrame = null;
    @property(SpriteFrame)
    spade10: SpriteFrame = null;
    @property(SpriteFrame)
    spadeJ: SpriteFrame = null;
    @property(SpriteFrame)
    spadeQ: SpriteFrame = null;
    @property(SpriteFrame)
    spadeK: SpriteFrame = null;

    // Diamond //
    @property(SpriteFrame)
    diamond1: SpriteFrame = null;
    @property(SpriteFrame)
    diamond2: SpriteFrame = null;
    @property(SpriteFrame)
    diamond3: SpriteFrame = null;
    @property(SpriteFrame)
    diamond4: SpriteFrame = null;
    @property(SpriteFrame)
    diamond5: SpriteFrame = null;
    @property(SpriteFrame)
    diamond6: SpriteFrame = null;
    @property(SpriteFrame)
    diamond7: SpriteFrame = null;
    @property(SpriteFrame)
    diamond8: SpriteFrame = null;
    @property(SpriteFrame)
    diamond9: SpriteFrame = null;
    @property(SpriteFrame)
    diamond10: SpriteFrame = null;
    @property(SpriteFrame)
    diamondJ: SpriteFrame = null;
    @property(SpriteFrame)
    diamondQ: SpriteFrame = null;
    @property(SpriteFrame)
    diamondK: SpriteFrame = null;

    // Club //
    @property(SpriteFrame)
    club1: SpriteFrame = null;
    @property(SpriteFrame)
    club2: SpriteFrame = null;
    @property(SpriteFrame)
    club3: SpriteFrame = null;
    @property(SpriteFrame)
    club4: SpriteFrame = null;
    @property(SpriteFrame)
    club5: SpriteFrame = null;
    @property(SpriteFrame)
    club6: SpriteFrame = null;
    @property(SpriteFrame)
    club7: SpriteFrame = null;
    @property(SpriteFrame)
    club8: SpriteFrame = null;
    @property(SpriteFrame)
    club9: SpriteFrame = null;
    @property(SpriteFrame)
    club10: SpriteFrame = null;
    @property(SpriteFrame)
    clubJ: SpriteFrame = null;
    @property(SpriteFrame)
    clubQ: SpriteFrame = null;
    @property(SpriteFrame)
    clubK: SpriteFrame = null;

    // Heart //
    @property(SpriteFrame)
    heart1: SpriteFrame = null;
    @property(SpriteFrame)
    heart2: SpriteFrame = null;
    @property(SpriteFrame)
    heart3: SpriteFrame = null;
    @property(SpriteFrame)
    heart4: SpriteFrame = null;
    @property(SpriteFrame)
    heart5: SpriteFrame = null;
    @property(SpriteFrame)
    heart6: SpriteFrame = null;
    @property(SpriteFrame)
    heart7: SpriteFrame = null;
    @property(SpriteFrame)
    heart8: SpriteFrame = null;
    @property(SpriteFrame)
    heart9: SpriteFrame = null;
    @property(SpriteFrame)
    heart10: SpriteFrame = null;
    @property(SpriteFrame)
    heartJ: SpriteFrame = null;
    @property(SpriteFrame)
    heartQ: SpriteFrame = null;
    @property(SpriteFrame)
    heartK: SpriteFrame = null;

    private _timer: number = 0.0;





    checkresult = false;
    checkbalance = false;

    betMoney: number = 1000;
    startBalance: number = 100000;

    // pair = false;
    // twopair = false;
    // treecard = false;
    // straight = false;
    // flush = false;
    // fullhouse= false;
    // fourcard = false;
    // straightflush=false;
    // royalflush= false;

    onLoad() {

        this.playerName.string = 'Super';
        this.balance.string = " Balance : " + this.startBalance.toString();
        this.betammount.string = " Bet Ammount : " + this.betMoney.toString();
        this.winresult.string = "";
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);

        // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);


    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log('Press a key');
                break;
        }
    }
    start() {

        let Card = ["2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS",
            "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
            "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC",
            "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AD",
        ];

        this._timer = 1.0;
        let Kartu1 = this.node.getChildByName("Card1")
        let Kartu2 = this.node.getChildByName("Card2")
        let Kartu3 = this.node.getChildByName("Card3")
        let Kartu4 = this.node.getChildByName("Card4")
        let Kartu5 = this.node.getChildByName("Card5")
        let Kartu6 = this.node.getChildByName("Card6")
        let Kartu7 = this.node.getChildByName("Card7")

        let betButton = this.node.getChildByName("blackgoldbuttontexted")
        let plusButton = this.node.getChildByName("plusbutton")
        let minusButton = this.node.getChildByName("minusbutton")



        function resetcard() {
            // Kartu1.getComponent(Sprite).spriteFrame = this.backcard;
            // Kartu2.getComponent(Sprite).spriteFrame = this.backcard;
            // Kartu3.getComponent(Sprite).spriteFrame = this.backcard;
            // Kartu4.getComponent(Sprite).spriteFrame = this.backcard;
            // Kartu5.getComponent(Sprite).spriteFrame = this.backcard;
            // Kartu6.getComponent(Sprite).spriteFrame = this.backcard;
            //     // Kartu7.getComponent(Sprite).spriteFrame = this.backcard;
            //     Card = ["2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS",
            //     "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
            //     "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC",
            //     "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AD",
            // ];
            //     console.log('reset card');
            //     console.log(Card)
        }


        plusButton.on(Node.EventType.MOUSE_DOWN, (event) => {
            console.log('increase bet by 1k')
            if( this.betMoney > (this.startBalance -1000)) this.betMoney = this.startBalance - 1000;
          this.betMoney = this.betMoney + 1000;
            this.betammount.string = " Bet Ammount : " + this.betMoney.toString(); 

        })

        minusButton.on(Node.EventType.MOUSE_DOWN, (event) => {
            console.log(`descrease bet by 1k`)
            if (this.betMoney < 2000) this.betMoney = 2000;
            this.betMoney = this.betMoney - 1000;
            this.betammount.string = " Bet Ammount : " + this.betMoney.toString(); 
        })






        betButton.on(Node.EventType.MOUSE_DOWN, (event) => {
            console.log('Mouse down');

            betButton.active = false;
            this.startBalance = this.startBalance - this.betMoney;
            this.balance.string = " Balance : " + this.startBalance.toString();

            // Card 1 //
            var CardDraw1 = Math.floor(Math.random() * Card.length);
            var Card1 = Card.splice(CardDraw1, 1)[0]
            console.log(Card1)
            // Card 2 //
            var CardDraw2 = Math.floor(Math.random() * Card.length);
            var Card2 = Card.splice(CardDraw2, 1)[0]
            console.log(Card2)
            // Card 3 //
            var CardDraw3 = Math.floor(Math.random() * Card.length);
            var Card3 = Card.splice(CardDraw3, 1)[0]
            console.log(Card3)
            // Card 4 //
            var CardDraw4 = Math.floor(Math.random() * Card.length);
            var Card4 = Card.splice(CardDraw4, 1)[0]
            console.log(Card4)
            // Card 5 //
            var CardDraw5 = Math.floor(Math.random() * Card.length);
            var Card5 = Card.splice(CardDraw5, 1)[0]
            console.log(Card5)
            // Card 6 //
            var CardDraw6 = Math.floor(Math.random() * Card.length);
            var Card6 = Card.splice(CardDraw6, 1)[0]
            console.log(Card6)
            // Card 7 //
            var CardDraw7 = Math.floor(Math.random() * Card.length);
            var Card7 = Card.splice(CardDraw7, 1)[0]
            console.log(Card7)


            //  FLIPS CARD 1//
            this.scheduleOnce(function () {
                console.log('2sec')
                if (Card1 == "AS") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card1 === "2S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card1 === "3S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card1 === "4S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card1 === "5S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card1 === "6S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card1 === "7S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card1 === "8S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card1 === "9S") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card1 === "TS") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card1 === "JS") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card1 === "QS") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card1 === "KS") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card1 === "AD") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card1 === "2D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card1 === "3D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card1 === "4D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card1 === "5D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card1 === "6D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card1 === "7D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card1 === "8D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card1 === "9D") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card1 === "TD") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card1 === "JD") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card1 === "QD") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card1 === "KD") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card1 === "AC") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card1 === "2C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card1 === "3C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card1 === "4C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card1 === "5C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card1 === "6C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card1 === "7C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card1 === "8C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card1 === "9C") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card1 === "TC") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card1 === "JC") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card1 === "QC") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card1 === "KC") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card1 === "AH") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card1 === "2H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card1 === "3H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card1 === "4H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card1 === "5H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card1 === "6H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card1 === "7H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card1 === "8H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card1 === "9H") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card1 === "TH") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card1 === "JH") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card1 === "QH") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card1 === "KH") {
                    Kartu1.getComponent(Sprite).spriteFrame = this.heartK;
                };
            }, 0);


            // FLIPS CARD 2//
            this.scheduleOnce(function () {
                if (Card2 == "AS") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card2 === "2S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card2 === "3S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card2 === "4S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card2 === "5S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card2 === "6S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card2 === "7S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card2 === "8S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card2 === "9S") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card2 === "TS") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card2 === "JS") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card2 === "QS") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card2 === "KS") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card2 === "AD") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card2 === "2D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card2 === "3D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card2 === "4D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card2 === "5D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card2 === "6D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card2 === "7D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card2 === "8D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card2 === "9D") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card2 === "TD") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card2 === "JD") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card2 === "QD") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card2 === "KD") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card2 === "AC") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card2 === "2C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card2 === "3C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card2 === "4C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card2 === "5C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card2 === "6C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card2 === "7C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card2 === "8C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card2 === "9C") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card2 === "TC") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card2 === "JC") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card2 === "QC") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card2 === "KC") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card2 === "AH") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card2 === "2H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card2 === "3H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card2 === "4H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card2 === "5H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card2 === "6H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card2 === "7H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card2 === "8H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card2 === "9H") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card2 === "TH") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card2 === "JH") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card2 === "QH") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card2 === "KH") {
                    Kartu2.getComponent(Sprite).spriteFrame = this.heartK;
                };
            }, 0.5);



            // FLIPS KARTU 3//
            this.scheduleOnce(function () {
                if (Card3 == "AS") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card3 === "2S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card3 === "3S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card3 === "4S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card3 === "5S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card3 === "6S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card3 === "7S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card3 === "8S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card3 === "9S") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card3 === "TS") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card3 === "JS") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card3 === "QS") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card3 === "KS") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card3 === "AD") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card3 === "2D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card3 === "3D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card3 === "4D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card3 === "5D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card3 === "6D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card3 === "7D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card3 === "8D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card3 === "9D") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card3 === "TD") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card3 === "JD") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card3 === "QD") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card3 === "KD") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card3 === "AC") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card3 === "2C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card3 === "3C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card3 === "4C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card3 === "5C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card3 === "6C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card3 === "7C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card3 === "8C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card3 === "9C") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card3 === "TC") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card3 === "JC") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card3 === "QC") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card3 === "KC") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card3 === "AH") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card3 === "2H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card3 === "3H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card3 === "4H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card3 === "5H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card3 === "6H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card3 === "7H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card3 === "8H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card3 === "9H") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card3 === "TH") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card3 === "JH") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card3 === "QH") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card3 === "KH") {
                    Kartu3.getComponent(Sprite).spriteFrame = this.heartK;
                };
            }, 1);



            // FLIPS KARTU 4//
            this.scheduleOnce(function () {
                if (Card4 == "AS") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card4 === "2S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card4 === "3S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card4 === "4S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card4 === "5S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card4 === "6S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card4 === "7S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card4 === "8S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card4 === "9S") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card4 === "TS") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card4 === "JS") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card4 === "QS") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card4 === "KS") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card4 === "AD") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card4 === "2D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card4 === "3D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card4 === "4D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card4 === "5D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card4 === "6D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card4 === "7D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card4 === "8D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card4 === "9D") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card4 === "TD") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card4 === "JD") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card4 === "QD") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card4 === "KD") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card4 === "AC") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card4 === "2C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card4 === "3C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card4 === "4C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card4 === "5C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card4 === "6C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card4 === "7C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card4 === "8C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card4 === "9C") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card4 === "TC") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card4 === "JC") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card4 === "QC") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card4 === "KC") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card4 === "AH") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card4 === "2H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card4 === "3H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card4 === "4H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card4 === "5H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card4 === "6H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card4 === "7H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card4 === "8H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card4 === "9H") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card4 === "TH") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card4 === "JH") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card4 === "QH") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card4 === "KH") {
                    Kartu4.getComponent(Sprite).spriteFrame = this.heartK;
                };
            }, 1.5);



            // KARTU 5//
            this.scheduleOnce(function () {

                if (Card5 == "AS") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card5 === "2S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card5 === "3S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card5 === "4S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card5 === "5S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card5 === "6S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card5 === "7S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card5 === "8S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card5 === "9S") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card5 === "TS") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card5 === "JS") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card5 === "QS") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card5 === "KS") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card5 === "AD") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card5 === "2D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card5 === "3D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card5 === "4D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card5 === "5D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card5 === "6D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card5 === "7D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card5 === "8D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card5 === "9D") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card5 === "TD") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card5 === "JD") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card5 === "QD") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card5 === "KD") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card5 === "AC") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card5 === "2C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card5 === "3C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card5 === "4C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card5 === "5C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card5 === "6C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card5 === "7C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card5 === "8C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card5 === "9C") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card5 === "TC") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card5 === "JC") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card5 === "QC") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card5 === "KC") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card5 === "AH") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card5 === "2H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card5 === "3H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card5 === "4H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card5 === "5H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card5 === "6H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card5 === "7H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card5 === "8H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card5 === "9H") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card5 === "TH") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card5 === "JH") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card5 === "QH") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card5 === "KH") {
                    Kartu5.getComponent(Sprite).spriteFrame = this.heartK;
                };

            }, 2);



            // KARTU 6//
            this.scheduleOnce(function () {

                if (Card6 == "AS") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card6 === "2S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card6 === "3S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card6 === "4S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card6 === "5S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card6 === "6S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card6 === "7S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card6 === "8S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card6 === "9S") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card6 === "TS") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card6 === "JS") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card6 === "QS") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card6 === "KS") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card6 === "AD") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card6 === "2D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card6 === "3D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card6 === "4D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card6 === "5D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card6 === "6D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card6 === "7D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card6 === "8D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card6 === "9D") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card6 === "TD") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card6 === "JD") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card6 === "QD") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card6 === "KD") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card6 === "AC") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card6 === "2C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card6 === "3C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card6 === "4C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card6 === "5C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card6 === "6C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card6 === "7C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card6 === "8C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card6 === "9C") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card6 === "TC") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card6 === "JC") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card6 === "QC") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card6 === "KC") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card6 === "AH") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card6 === "2H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card6 === "3H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card6 === "4H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card6 === "5H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card6 === "6H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card6 === "7H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card6 === "8H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card6 === "9H") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card6 === "TH") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card6 === "JH") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card6 === "QH") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card6 === "KH") {
                    Kartu6.getComponent(Sprite).spriteFrame = this.heartK;
                };
            }, 2.5);




            // KARTU 7//
            this.scheduleOnce(function () {

                if (Card7 == "AS") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade1;
                } else if (Card7 === "2S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade2;
                } else if (Card7 === "3S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade3;
                } else if (Card7 === "4S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade4;
                } else if (Card7 === "5S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade5;
                } else if (Card7 === "6S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade6;
                } else if (Card7 === "7S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade7;
                } else if (Card7 === "8S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade8;
                } else if (Card7 === "9S") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade9;
                } else if (Card7 === "TS") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spade10;
                } else if (Card7 === "JS") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spadeJ;
                } else if (Card7 === "QS") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spadeQ;
                } else if (Card7 === "KS") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.spadeK;
                } else if (Card7 === "AD") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond1;
                } else if (Card7 === "2D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond2;
                } else if (Card7 === "3D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond3;
                } else if (Card7 === "4D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond4;
                } else if (Card7 === "5D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond5;
                } else if (Card7 === "6D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond6;
                } else if (Card7 === "7D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond7;
                } else if (Card7 === "8D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond8;
                } else if (Card7 === "9D") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond9;
                } else if (Card7 === "TD") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamond10;
                } else if (Card7 === "JD") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamondJ;
                } else if (Card7 === "QD") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamondQ;
                } else if (Card7 === "KD") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.diamondK;
                } else if (Card7 === "AC") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club1;
                } else if (Card7 === "2C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club2;
                } else if (Card7 === "3C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club3;
                } else if (Card7 === "4C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club4;
                } else if (Card7 === "5C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club5;
                } else if (Card7 === "6C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club6;
                } else if (Card7 === "7C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club7;
                } else if (Card7 === "8C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club8;
                } else if (Card7 === "9C") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club9;
                } else if (Card7 === "TC") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.club10;
                } else if (Card7 === "JC") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card7 === "QC") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.clubQ;
                } else if (Card7 === "KC") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.clubK;
                } else if (Card7 === "AH") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart1;
                } else if (Card7 === "2H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart2;
                } else if (Card7 === "3H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart3;
                } else if (Card7 === "4H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart4;
                } else if (Card7 === "5H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart5;
                } else if (Card7 === "6H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart6;
                } else if (Card7 === "7H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart7;
                } else if (Card7 === "8H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart8;
                } else if (Card7 === "9H") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart9;
                } else if (Card7 === "TH") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heart10;
                } else if (Card7 === "JH") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heartJ;
                } else if (Card7 === "QH") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heartQ;
                } else if (Card7 === "KH") {
                    Kartu7.getComponent(Sprite).spriteFrame = this.heartK;
                };

            }, 3);


            this.scheduleOnce(function () {

                let result = `${Card1} ${Card2} ${Card3} ${Card4} ${Card5} ${Card6} ${Card7}`
                let resultsplit = result.split(" ")

                let rankArray = [];
                let suitArray = [];

                const suits = ["C", "D", "H", "S"];
                const ranks = [

                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "T",
                    "J",
                    "Q",
                    "K",
                    "A",

                ];

                function sorted(resultsplit) {
                    let sortedcard = [];
                    for (let i = 0; i < ranks.length; i++) {
                        for (let j = 0; j < resultsplit.length; j++) {
                            if (ranks[i] === resultsplit[j].charAt(0)) {
                                sortedcard.push(resultsplit[j]);
                            }
                        }
                    }
                    return sortedcard
                }
                console.log(sorted(resultsplit))

                let sortedHandOne = sorted(resultsplit);

                console.log(sortedHandOne, 'sortedhand')

                function suitAndRank(sortedHandOne) {
                    console.log(sorted, "sorted");
                    for (let i = 0; i < sortedHandOne.length; i++) {
                        let sted = sortedHandOne;
                        rankArray.push(sted[i].charAt(0));
                        suitArray.push(sted[i].charAt(1));
                    }
                }
                suitAndRank(sortedHandOne);
                console.log(rankArray, suitArray, "rank and suit");

                function countSuites(suitArray) {
                    let suitCount = {};
                    suitArray.forEach(function (x) {
                        suitCount[x] = (suitCount[x] || 0) + 1;
                    });
                    return suitCount;
                }

                function countRanks(rankArray) {
                    let rankCount = {};
                    rankArray.forEach(function (x) {
                        rankCount[x] = (rankCount[x] || 0) + 1;
                    });
                    return rankCount;
                }

                function isFlush() {
                    let cS = countSuites(suitArray);
                    if (Object.keys(cS).find(key => cS[key] === 7)) {
                        return true;
                    } else {
                        return false;
                    }
                }


                function isStraight() {
                    let index = ranks.indexOf(rankArray[0]);
                    let ref = ranks.slice(index, index + 7).join("");
                    let section = rankArray.slice(0).join("");
                    if (section === "10JQKA" && section === ref) {
                        return "ROYALSTRAIGHT";
                    } else if (section === "A2345" || section === ref) {
                        return "STRAIGHT";
                    } else {
                        return "FALSE";
                    }
                }

                function pairs() {
                    let rS = countRanks(rankArray);
                    return Object.keys(rS).filter(key => rS[key] === 2).length;
                }








                let rS = countRanks(rankArray);
                if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
                    console.log("Royal Flush");
                    this.winresult.string = "You Get Royal Flush";
                    this.startBalance = this.startBalance * 500;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (isFlush() === true && isStraight() === "STRAIGHT") {
                    console.log("Straight Flush");
                    this.winresult.string = "You Get Straight Flush";
                    this.startBalance = this.startBalance * 200;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (Object.keys(rS).find(key => rS[key] === 4)) {
                    console.log("Four of a Kind");
                    this.winresult.string = "You get Four of a Kind";
                    this.startBalance = this.startBalance * 100;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 1) {
                    console.log("Full House");
                    this.winresult.string = "You get Full House";
                    this.startBalance = this.startBalance * 50;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (isFlush() === true) {
                    console.log("Flush");
                    this.winresult.string = "You get Flush";
                    this.startBalance = this.startBalance * 10;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (isStraight() === "STRAIGHT") {
                    console.log("Straight");
                    this.winresult.string = "You Get Straight";
                    this.startBalance = this.startBalance * 5;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (Object.keys(rS).find(key => rS[key] === 3)) {
                    console.log("Three of a Kind");
                    this.winresult.string = "You Get Three of a Kind";
                    this.startBalance = this.startBalance * 2;
                    this.balance.string = " Balance : " + this.startBalance.toString();
                } else if (pairs() === 2) {
                    console.log("Two Pair");
                    this.winresult.string = "You Get Two Pair";
                } else if (pairs() === 1) {
                    console.log("Pair");
                    this.winresult.string = "You Get Pair";
                } else {
                    console.log("High Card", rankArray[rankArray.length - 1]);
                    this.winresult.string = `You get High Card ${rankArray[rankArray.length -1].toString()}`;
                }


            }, 3.5)
            this.scheduleOnce(function () {
                Card = ["2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS", "AS",
                    "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD", "AD",
                    "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC", "AC",
                    "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH", "AD",
                ];

                Kartu1.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu2.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu3.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu4.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu5.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu6.getComponent(Sprite).spriteFrame = this.backcard;
                Kartu7.getComponent(Sprite).spriteFrame = this.backcard;

                betButton.active = true;


                this.winresult.string = "";

                this.checkbalance = true;

            }, 7.0)


        }, this);










        
       


    }

    update(deltaTime: number) {

        if (this.startBalance <= 0)
        if (this.checkbalance){
            console.log( `game over`);
            this.checkbalance = false;
        }







        // const value = resultsplit.map(a => a[0]).sort()
        // const suits = resultsplit.map(a => a[1]).sort()
        // const counts = value.reduce(count, {})
        // const duplicates = Object.values(counts).reduce(count, {})
        // const flush = suits[0] === suits[6]

        // function count(c, a) {
        //     c[a] = (c[a] || 0) + 1
        //     return c
        // }

        // if (flush){
        //     console.log ('flush')
        // }
        // console.log (result ,'result')
        // console.log (resultsplit, ' result split')
        // console.log (value, 'value')
        // console.log (suits, 'suits')





        // const nilai = ['1','1','1','2','2','4','5']




        // function count_duplicate(nilai){
        // let counts = {}

        // for(let i =0; i < nilai.length; i++){ 
        //     if (counts[nilai[i]]){
        //      counts[nilai[i]] += 1
        //     } else {
        //     counts[nilai[i]] = 1
        // }
        // }  
        // for (let prop in counts){
        // if (counts[prop] >= 2 && counts[prop] < 3 ){
        //     console.log(/*prop + " counted: " + counts[prop] + " times."*/ 'pair')
        // } else if (counts[prop] >= 3 && counts[prop] <4){
        //     console.log('triple card')
        // }else if (counts[prop]>= 4){
        //     console.log('4 of kinds')
        // }

        // }
        // console.log(counts)
        // }
        // count_duplicate(nilai)
    }


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