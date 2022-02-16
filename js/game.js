const background = {
    url: 'images/background.svg',
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    image: new Image(),
    draw: function () {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
};

function draw() {
    background.draw();

    if (!is_game_running) {
        drawGetReady();

        drawTapTap(isTaptapMini);

        if (taptapLoopsCount === taptapAnimationLoops) {
            isTaptapMini = !isTaptapMini;
            taptapLoopsCount = 0;
        } else {
            taptapLoopsCount++;
        }
    }

    bottomBases[0].draw();
    bottomBases[1].draw();

    if (is_game_running) {
        if (pipesPairs.length === 1) {
            pipesPairs[0].top_pipe.draw();
            pipesPairs[0].bottom_pipe.draw();
        } else if (pipesPairs.length === 2) {
            pipesPairs[0].top_pipe.draw();
            pipesPairs[0].bottom_pipe.draw();

            pipesPairs[1].top_pipe.draw();
            pipesPairs[1].bottom_pipe.draw();
        }
    }

    drawMorgen();

    if (is_game_over) {
        drawGameOver();
    }

    if (is_game_running) {
        drawScore();
    }
}

let mainLoopCalls = 0;

function mainLoop() {
    if (reset_game_call) {
        resetGame();
    }

    if (is_game_running && !is_game_over) {
        updateBases();
        updateMorgen();

        if (mainLoopCalls === 500) {
            mainLoopCalls = -1;
        } else if (mainLoopCalls === -1) {
            updatePipes();
        } else {
            mainLoopCalls++;
        }

        let collisionCode = detectCollisions();

        switch (collisionCode) {
            case collisionTypes.border:
                onGameOver();
                break;
            case collisionTypes.newScore:
                score++;
                break;
            case collisionTypes.pipe:
                onGameOver();
                break;
            default:
                break;
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    draw();
    setMainLoopEvent();
}

function onGameOver() {
    is_game_over = true;
}

function resetGame() {
    is_game_over = false;
    is_game_running = false;
    reset_game_call = false;

    score = 0;
    mainLoopCalls = 0;

    bottomBases = [
        createBottomBase(0), createBottomBase(canvas.width)
    ];

    pipesPairs = []

    morgen.x = NaN;
    morgen.y = NaN;

    morgenVector = morgenMovingStep;
}

function setMainLoopEvent() {
    window.setTimeout(mainLoop, 3);
}

function setOnClickEvents() {
    canvas.onclick = onClickCanvans;
}

background.image.src = background.url;
morgen.sprite.src = morgen.url;

for (let i = 0; i <= 9; i++) {
    numbersImages[i.toString()].image.src = numbersImages[i.toString()].url;
}

getReady.image.src = getReady.url;
tapTap.image.src = tapTap.url;
gameOver.image.src = gameOver.url;

bottomBase.sprite.src = bottomBase.url;
pipe.top_sprite.src = pipe.top_path;
pipe.bottom_sprite.src = pipe.bottom_path;

setMainLoopEvent();
setOnClickEvents();
