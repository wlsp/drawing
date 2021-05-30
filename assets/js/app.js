let isDrawing = false;
let x = 0;
let y = 0;
let colors = [" "];
const randomColor = () => Math.floor(Math.random() * 256)
const area = document.getElementById('area');
const context = area.getContext('2d');


document.getElementById('test').addEventListener('click', (event) => {
  event.target.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`
  event.target.style.transition = "all .8s";
});

document.getElementById('test').addEventListener('click', (event) => {
  if (event.target.id === 'test') {
    colors[0] = test.style.background
    console.log(colors)
    console.log(test.style.background)
  }
});


area.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});
// JS-Code for Media Query
area.addEventListener('touchstart', e => {
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
// JS-Code for Media Query
area.addEventListener('touchmove', e => {
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
// JS-Code for Media Query
window.addEventListener('touchend', e => {
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

document.getElementById('clear').addEventListener('click', (clearCanvas) => {
  context.clearRect(0, 0, area.width, area.height);
  console.log("clean?!")
});