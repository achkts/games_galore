const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = 350;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255,255,255)';

ctx.translate(width / 4, height / 4);

const image = new Image();
image.src = "/images/diceRoll.png";
image.onload = draw;

let dice = 0;
let posX = 0;

function draw() {
    ctx.fillRect(-(width / 4), -(height / 4), width, height);
    ctx.drawImage(image, dice * 245, 0, 245, 500, 0 + posX, -74, 245, 265);
    if (posX % 13 === 0) {
        if (dice === 5) {
          dice = 0;
        } else {
          dice++;
        }
      }
      if (posX -500 > width / 2) {
        let newStartPos = -(width / 2 + 102);
        posX = Math.ceil(newStartPos);
        console.log(posX);
      } else {
        posX += 2;
      }
      window.requestAnimationFrame(draw);
}