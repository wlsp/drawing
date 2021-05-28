// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;
let colors = ["blue"];
const randomColor = () => Math.floor(Math.random() * 255)


document.getElementById('test').addEventListener('click', (event) => {
    event.target.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`
    event.target.style.transition = "all .8s";
    console.log(test)
})

document.getElementById('test').addEventListener('click', (event) => {
    if (event.target.id === 'test') {
        colors.shift(event.target.style.background)
    }
 })



const area = document.getElementById('area');
const context = area.getContext('2d');

area.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

area.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = colors
  context.lineWidth = 1.5;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}