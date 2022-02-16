const collisionTypes = {
    no: 0,
    border: 1,
    newScore: 2,
    pipe: 3
};

function detectCollisions() {
    if(detectBorderCollision()) {
        return collisionTypes.border;
    }

    if(detectNewScore()) {
        return collisionTypes.newScore;
    }

    if(detectPipeCollision()) {
        return collisionTypes.pipe;
    }

    return collisionTypes.no;
}

function detectBorderCollision() {
    let morgenBottomCord = morgen.y + morgen.height;

    return morgen.y <= 0 || morgenBottomCord >= canvas.height - bottomBase.height;
}

function detectNewScore() {
    for (let i = 0; i < pipesPairs.length; i++) {
        if(morgen.x === pipesPairs[i].top_pipe.x + pipesPairs[i].top_pipe.width) {
            return true;
        }
    }

    return false;
}

function detectPipeCollision() {
    let isCollisionDetected = false;

    for (let i = 0; i < pipesPairs.length; i++)  {
        let isTopPipeCollisionX = (morgen.x + morgen.width) >= pipesPairs[i].top_pipe.x &&
            morgen.x < pipesPairs[i].top_pipe.x + pipesPairs[i].top_pipe.width;

        let isTopPipeCollisionY = morgen.y < (pipesPairs[i].top_pipe.y + pipesPairs[i].top_pipe.height);

        let isBottomPipeCollisionX = (morgen.x + morgen.width) >= pipesPairs[i].bottom_pipe.x &&
            morgen.x < pipesPairs[i].bottom_pipe.x + pipesPairs[i].bottom_pipe.width;

        let isBottomPipeCollisionY = (morgen.y + morgen.height) >
            (pipesPairs[i].bottom_pipe.y);

        isCollisionDetected = (isTopPipeCollisionX && isTopPipeCollisionY) ||
            (isBottomPipeCollisionX && isBottomPipeCollisionY);

        if(isCollisionDetected) {
            break;
        }
    }

    return isCollisionDetected;
}
