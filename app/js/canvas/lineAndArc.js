const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

ctx.width = 400;
ctx.height = 400;

function drawLine() {
    ctx.beginPath();
    // we can combine lineTo-s
    ctx.moveTo(5,13,);
    ctx.lineTo(80, 110);
    ctx.lineTo(155, 13);
    ctx.closePath();

    // or draw a single line
    ctx.moveTo(0,0,);
    ctx.lineTo(0, 30);

    ctx.stroke();
}

function drawTriangle() {
    // beginPath() clears the current internal path object and its sub-paths,
    // which accumulates path operations such as line, rect, arc, arcTo and so on
    // and creates new path
    ctx.beginPath();
    ctx.lineWidth = 4;

    // moveTo create sub path
    ctx.moveTo(20, 20);
    ctx.lineTo(80, 100);
    ctx.lineTo(140, 20);

    // closePath() connects the current path, or sub-path,
    // position with the first point on that path created
    // either with beginPath() or moveTo()
    // with one that was used later.
    ctx.closePath();

    ctx.stroke();
}

function drawArc() {
    ctx.beginPath();
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    // x, y - center of circle
    // angles - right 0 / 2 * Math.PI, left: 1 * Math.PI
    // top - 1.5 * Math.Pi, bottom - 0.5 * Math.PI
    // anticlockwise has false by default and describe line's direction
    ctx.arc(80, 130, 10, 0, 2 * Math.PI, true);
    ctx.stroke();
}

drawLine();
setTimeout(
    drawTriangle,
    2000
);
drawArc();