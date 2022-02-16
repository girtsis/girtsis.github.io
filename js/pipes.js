const pipesMovingStep = 1;
const freeAreaLength = canvas.width / 2;

let pipesPairs = [];

function generatePipesPair() {
  let topPipeHeight = randomInt(pipe.min_height, pipe.max_height);
  let bottomPipeHeight = randomInt(pipe.min_height, pipe.max_height);

  let topPipeCords = {
    x: canvas.width,
    y: 0
  };

  let bottomPipeCords = {
    x: topPipeCords.x,
    y: canvas.height - bottomBase.height - bottomPipeHeight
  };

  let topPipe = createPipe(pipe.top_type, topPipeCords.x, topPipeCords.y, topPipeHeight);
  let bottomPipe = createPipe(pipe.bottom_type, bottomPipeCords.x, bottomPipeCords.y, bottomPipeHeight);

  return {
    top_pipe: topPipe,
    bottom_pipe: bottomPipe
  }
}

function createPipe(pipeType, pipeX, pipeY, pipeHeight) {
    return {
        url: pipeType === pipe.top_type ? pipe.top_path : pipe.bottom_path,
        x: pipeX,
        y: pipeY,
        width: pipe.width,
        height: pipeHeight,
        sprite: pipeType === pipe.top_type ? pipe.top_sprite : pipe.bottom_sprite,
        draw: function () {
            context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        }
    };
}

function updatePipes() {
  if(pipesPairs.length === 0) {
    pipesPairs.push(generatePipesPair());
  }

  else if(pipesPairs.length === 1) {
    movePipePair(pipesPairs[0]);

    if(pipesPairs[0].top_pipe.x === freeAreaLength - pipe.width) {
      pipesPairs.push(generatePipesPair());
    }
  }

  else if(pipesPairs.length === 2) {
    movePipePair(pipesPairs[0]);
    movePipePair(pipesPairs[1]);

    if(pipesPairs[0].top_pipe.x <= 0 - pipe.width) {
      pipesPairs.shift();
    }
  }
}

function movePipePair(pipePair) {
  pipePair.top_pipe.x -= pipesMovingStep;
  pipePair.bottom_pipe.x -= pipesMovingStep;
}
