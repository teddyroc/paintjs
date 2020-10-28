const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
}

function stopPainting() {
    painting = false;
}

function startPainting(event) {
    painting = true;
}

function handleClickColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillstyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);

}

if(range) {
    range.addEventListener("input", handleRangeChange);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleClickColor))