let ladybug = document.querySelector("#ladybug");
let x = 0;  // top position
let y = 0;  // left position
let speed = 10;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// make a ladybug move

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft")  {  // Arrow left (moves left)
            x -= speed
            ladybug.style.left = x + "px";
            ladybug.style.transform = "rotate(270deg)";
    }
    else if (e.key === "ArrowDown") {   // arrow down (moves down)
            y += speed;
            ladybug.style.top = y + "px";
            ladybug.style.transform = "rotate(180deg)";
    }
    else if (e.key === "ArrowUp")  {   // arrow top (moves top)
        y -= speed;
        ladybug.style.top = y + "px";
        ladybug.style.transform = "rotate(0deg)";
    }
    else if (e.key === "ArrowRight")  {   // arrow right (moves right)
        x += speed;
        ladybug.style.left = x + "px";
        ladybug.style.transform = "rotate(90deg)";
    }
});

const showText = document.querySelector("#status");

const button1 = document.querySelector("#check-status");

button1.onclick = Imhome;

function Imhome()  {
    if ((ladybug.style.Top < "410px" || ladybug.style.Top > "330px") && (ladybug.style.Left > "590px" || ladybug.style.Left < "770px"))  {
        showText.innerText = "Whoorayyy!!! The Bug reached its home!";
        showText.style.color = "green";
        button1.style.display = "none";
    }
    /*
    else  {
        showText.innerText = "The Bug wants to go home!";
        showText.style.color = "red";
    }  */
}