const morgenMovingStep = 1

// let rotationAngle = 0;
let morgenVector = morgenMovingStep;

function drawMorgen() {
    if (isNaN(morgen.x) && isNaN(morgen.y)) {
        morgen.x = canvas.width / 2;
        morgen.y = (canvas.height / 2) - (morgen.height * 5);

        // morgen.rotationAngle = rotationAngle;
    }
    // context.save();
    // context.translate(morgen.x + morgen.width / 2, morgen.y + morgen.height / 2);
    //
    // context.rotate(rotationAngle * Math.PI / 180);
    context.drawImage(morgen.sprite, morgen.x, morgen.y, morgen.width, morgen.height);

    //context.restore();
}

function updateMorgen() {
    morgen.y += morgenVector;
}

function changeMorgenVector() {
    morgenVector *= -1;
}
