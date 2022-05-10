
import { _decorator, Component, Node,input,Input, director,Label } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = mainmenu
 * DateTime = Tue May 10 2022 13:45:24 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = mainmenu.ts
 * FileBasenameNoExtension = mainmenu
 * URL = db://assets/script/mainmenu.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
 
@ccclass('mainmenu')
export class mainmenu extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    @property(Label)
    playerName = null;
    // serializableDummy = 0;

onLoad (){
    
}

    start () {
        // [3]
    let login = this.node.getChildByName("loginButton")
    let validationcharacter = true;
    let validationletter = true;
    let validationdigit = true;
    
        // var p = this.playerName.string;
        // if (p.length < 6){
        //  console.log ('lenght of username must between 6 - 8')
        //  validationcharacter = false;
        // } 
        // if (p.search(/[a-z]/i) < 0) {
        //     console.log("Your password must contain at least one letter.");
        //     validationletter = false;
        // }
        // if (p.search(/[0-9]/) < 0) {
        //     console.log("Your password must contain at least one digit."); 
        //     validationdigit = false;
        // }
        
      var p = this.playerName.string;
        
        
        
    
    login.on(Node.EventType.MOUSE_DOWN, (event) =>{
        var p = this.playerName.string;
        
        function validatePassword(p) {
            let errors = [];
        
            if (p.length <6 ) {
                console.log ('lenght of username must between 6 - 8') 
                errors.push("Your password must be at least 8 characters");
               return false;
               
            }
            if (p.search(/[a-z]/i) < 0) {
                console.log("Your password must contain at least one letter.");
                errors.push("Your password must contain at least one letter."); 
               return false;
                
            }
            if (p.search(/[0-9]/) < 0) {
               console.log("Your password must contain at least one digit."); 
               errors.push("Your password must contain at least one digit.");
              return false;
               
            }if (errors.length > 0) {
                alert(errors.join("\n"));
                return false;
                
            } else {
                return true;
            }
            
           
        }
        console.log("login klcikec")
        if(validatePassword(p)){
            console.log('login success')
            director.loadScene("scene-001");
        }else {
            console.log('login failed')
        }
        

    })
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
