const basesMovingStep = 1;

let bottomBases = [
    createBottomBase(0), createBottomBase(canvas.width)
];

function createBottomBase(baseX) {
    return {
        url: bottomBase.url,
        x: baseX,
        y: canvas.height - bottomBase.height,
        width: canvas.width,
        height: bottomBase.height,
        sprite: bottomBase.sprite,
        draw: function () {
            context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
    };
}

function updateBases() {
    moveBases();

    if(bottomBases[0].x === 0 - canvas.width) {
        bottomBases.shift();
        bottomBases.push(createBottomBase(canvas.width));
    }
}

function moveBases() {
    bottomBases[0].x -= basesMovingStep;
    bottomBases[1].x -= basesMovingStep;
}