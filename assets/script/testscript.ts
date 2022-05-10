
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = testscript
 * DateTime = Mon May 09 2022 08:15:29 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = testscript.ts
 * FileBasenameNoExtension = testscript
 * URL = db://assets/script/testscript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
// var hard2 =[2,4,5,3,1]

//  const order = "23456789TJQKA"
//  var hand = '2A'

//  const cards = hand.split("") // Split into cards
//     //  const faces = cards.map(a => String.fromCharCode([77 - order.indexOf(a[0])])).sort() 
//     // const suits = cards.map(a => a[1]).sort()
// const value = cards[0]
// const suits = cards[1]
//     console.log(cards)
//     console.log(value)
//     console.log(suits)

@ccclass('testscript')
export class testscript extends Component {
    // [1]


    
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        // console.log('test script is running')
        
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
