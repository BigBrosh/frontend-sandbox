const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

ctx.width = 400;
ctx.height = 400;

function drawQuadraticCurve() {
    ctx.beginPath();

    // to draw quadratic curve we need three point
    // first one is created by moveTo
    // quadraticCurveTo(cpx, cpy, x, y)
    // cpx, cpy - second point, describes our angle point
    // x, y are coordinates of end point
    ctx.moveTo(10, 10);
    ctx.quadraticCurveTo(30, 80, 150, 10);
    ctx.stroke();
}

function drawBezierCurve() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    // bezier curve needs 4 points
    // first one from moveTo and others from
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    // cp - are curve points
    // and x, y are coordinates of end point
    ctx.bezierCurveTo(0, 80, 90, 80, 90, 0);
    ctx.stroke();
}

// drawQuadraticCurve();
drawBezierCurve();