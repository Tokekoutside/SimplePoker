
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { randomcard } from './deck';
/**
 * Predefined variables
 * Name = result
 * DateTime = Tue May 10 2022 10:05:46 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = result.ts
 * FileBasenameNoExtension = result
 * URL = db://assets/script/result.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('result')
export class result extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // whichhand
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
