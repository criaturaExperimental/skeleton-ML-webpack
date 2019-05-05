import '../src/styles/main.scss';
import p5 from 'p5';

const sketch = p => {

  p.setup = () => {
    p.createCanvas(400, 400);
  }

  p.draw = () => {
    p.background(220);
    p.fill(0);
    p.textSize(32);
    p.text('Hello p.world!', 10, 30);
  }
}

new p5(sketch);