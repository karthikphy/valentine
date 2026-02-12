// YES BUTTON
function acceptLove(){
    document.getElementById("response").style.display = "block";
}

// MOVING NO BUTTON
function moveNo(){
    const btn = document.querySelector(".no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// FLOATING HEARTS ANIMATION
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for(let i=0;i<50;i++){
    hearts.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*20+10,
        speed: Math.random()*1+0.5
    });
}

function drawHeart(x,y,size){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(x-size/2,y-size/2,x-size,y+size/3,x,y+size);
    ctx.bezierCurveTo(x+size,y+size/3,x+size/2,y-size/2,x,y);
    ctx.fillStyle="rgba(255,255,255,0.7)";
    ctx.fill();
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    hearts.forEach(h=>{
        h.y -= h.speed;
        if(h.y < -20) h.y = canvas.height;
        drawHeart(h.x,h.y,h.size);
    });
    requestAnimationFrame(animate);
}

animate();
