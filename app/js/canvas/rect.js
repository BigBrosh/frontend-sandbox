const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

canvas.height = 200;

function drawFilledRect() {
    // createLinearGradient(x0, y0, x1, y1)
    // creating gradient
    // x0, y0 - start point of gradient
    // x1, y1 - end point of gradient
    const gradient = ctx.createLinearGradient(0, 0, 100, 50);

    // addColorStop(offset, color)
    // adding colors to gradient
    // offset can be from 0.0 to 1.0
    gradient.addColorStop(0, '#004cb5');
    gradient.addColorStop(1, '#4aa9b5');

    // fillStyle sets which color/gradient will be used to fill the figure
    ctx.fillStyle = gradient;

    // fillRect (x, y, width, height)
    // describing what we want to fill
    // x, y - top left coordinate of our rectangle
    ctx.fillRect(10, 10, 100, 100);

    // filling our element
    ctx.fill();

    // setTimeout(() => {
    //     // clear area
    //     // parameters are similar to fillReact
    //     ctx.clearRect(15, 15, 50, 50);
    // }, 3000);
}

function drawRectBorder() {
    const strokeGradient = ctx.createLinearGradient(0, 0, 0, 150);
    strokeGradient.addColorStop(0, '#004cb5');
    strokeGradient.addColorStop(1, '#4aa9b5');

    ctx.lineJoin = 'round';
    ctx.lineWidth = 7;
    ctx.strokeStyle = strokeGradient;

    ctx.strokeRect(10, 10, 150, 150);
    ctx.stroke();
}

drawFilledRect();
// drawRectBorder();