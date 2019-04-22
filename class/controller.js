
class Controller{
    constructor(ctrl){
        this.ifTypeCtrl(ctrl);
    }

    ifTypeCtrl(ctrl){
        if(ctrl){
            if(ctrl.key){
                this.ctrlKey();
            }else if(ctrl.mouse){

            }
        }
    }

    ctrlKey(){
        document.addEventListener("keydown", (e) => this.keyDown(e), false);
        document.addEventListener("keyup", (e) => this.keyUp(e), false);
    }

    keyDown(e){
        console.log(`keyDown:::::: ${e.key}`);
    }

    keyUp(e){
        console.log(`keyUp:::::: ${e.key}`);
    }
}

export { Controller };