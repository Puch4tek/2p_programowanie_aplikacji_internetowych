let x = 300;
function setup () {
    createCanvas(600, 600);
}

function draw () {
    let left = false;
    background(220);
    fill("red");
    circle(x, 300, 300);
    fill("green");
    circle(200, 300, 300);
    if (x === 450)
        left = true;
    if (x === 150)
        left = false;

    if (left === false)
        x++;
    else if (left === true)
        x--;
    //when mouse button is pressed, circles turn black
    if (mouseIsPressed === true) {
        fill(0);
    } else {
        fill(255);
    }

//white circles drawn at mouse position
    circle(mouseX, mouseY, 100);
    line(300,300,mouseX, mouseY);
}
