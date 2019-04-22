import { Controller } from './controller.js';


class Canvas {
    constructor({
        id, width = 300, 
        height = 200, 
        ctrl = []
    }){
        this.initCanvas(id, width, height);
        this.crtl = new Controller(ctrl);
    }

    initCanvas(id, width, height){
        if(id){
            this.canvas = document.querySelector(`#${id}`);
            this.canvas.width = width;
            this.canvas.height = height;
            return this.canvas;
        }
    }


    getCtx(){
        return this.canvas.getContext('2d');
    }
}



export { Canvas };