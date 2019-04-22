import { init } from './data/data.js'
import { Canvas }   from './class/init.js';

let canvas = new Canvas(init);

let ctx = canvas.getCtx();
