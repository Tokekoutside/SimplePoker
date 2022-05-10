
import { _decorator, Component, Node, Vec3, CCObject, Sprite, Label, quat, math} from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = flips
 * DateTime = Wed May 04 2022 10:54:02 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = flips.ts
 * FileBasenameNoExtension = flips
 * URL = db://assets/script/flips.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('flips')
export class flips extends Component {
    // [1]
    // dummy = '';

    // [2]
    @property(Sprite)
    front : Label = null;
    
    @property(Sprite)
    back: Sprite = null;
    // serializableDummy = 0;

    onLoad ( ){
        // onloadsss
        
        

    }
    start () {
        // [3]
      
         
    }

     update (deltaTime: number) {
         // [4]
         for (var i = 0; i <=75; i += 5)
         this.node.setRotationFromEuler(this.node.rotation.x, this.node.rotation.y -i, this.node.rotation.z)
        
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
