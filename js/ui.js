const getReady = {
    url: 'images/get_ready.svg',
    width: 184,
    height: 60,
    image: new Image()
};

const tapTap = {
    url: 'images/taptap.svg',
    width: 134,
    height: 119,
    image: new Image()
};

const gameOver = {
    url: 'images/game_over.svg',
    width: 192,
    height: 42,
    image: new Image()
};

const numberImageStaticParams = {
    width: 24,
    height: 36
};

const numbersImages = {
    '0': {
        url: 'images/numbers/0.svg',
        image: new Image()
    },
    '1': {
        url: 'images/numbers/1.svg',
        image: new Image()
    },
    '2': {
        url: 'images/numbers/2.svg',
        image: new Image()
    },
    '3': {
        url: 'images/numbers/3.svg',
        image: new Image()
    },
    '4': {
        url: 'images/numbers/4.svg',
        image: new Image()
    },
    '5': {
        url: 'images/numbers/5.svg',
        image: new Image()
    },
    '6': {
        url: 'images/numbers/6.svg',
        image: new Image()
    },
    '7': {
        url: 'images/numbers/7.svg',
        image: new Image()
    },
    '8': {
        url: 'images/numbers/8.svg',
        image: new Image()
    },
    '9': {
        url: 'images/numbers/9.svg',
        image: new Image()
    }
};

const taptapAnimationLoops = 100;

let isTaptapMini = false;
let taptapLoopsCount = 0;

function intToImages(integer) {
    let images = [];
    let stringInteger = integer.toString();

    for (let i = 0; i < stringInteger.length; i++) {
        let image = {
            url: numbersImages[stringInteger[i]].url,
            image: numbersImages[stringInteger[i]].image,
        };

        images.push(image);
    }

    return images;
}

function drawGetReady() {
    let x = (canvas.width / 2) - (getReady.width / 2);
    let y = (canvas.height / 2) - (getReady.height * 2);

    context.drawImage(getReady.image, x, y, getReady.width, getReady.height);
}

function drawTapTap(is_mini) {
    const mini_difference = 10;

    let x = (canvas.width / 2) - (tapTap.width / 2);
    let y = (canvas.height / 2);

    if (!is_mini) {
        context.drawImage(tapTap.image, x, y, tapTap.width, tapTap.height);
    } else {
        context.drawImage(
            tapTap.image, x,
            y + mini_difference,
            tapTap.width - mini_difference,
            tapTap.height - mini_difference
        );
    }
}

function drawGameOver() {
    let x = (canvas.width / 2) - (gameOver.width / 2);
    let y = (canvas.height / 2) - (gameOver.height * 2);

    context.drawImage(gameOver.image, x, y, gameOver.width, gameOver.height);
}

function drawScore() {
    let images = intToImages(score);
    let scoreSize = numberImageStaticParams.width * images.length;

    let y = (canvas.height / 2) - (numberImageStaticParams.height  * 4);
    let x = (canvas.width / 2) - (scoreSize / 2);

    for (let i = 0; i < images.length; i++) {
        context.drawImage(images[i].image, x, y, numberImageStaticParams.width, numberImageStaticParams.height);

        x += numberImageStaticParams.width;
    }

    // let scoreSize = 48;
    //
    // let x = (canvas.width / 2) - (scoreSize / 4);
    // let y = (canvas.height / 2) - (scoreSize * 4);
    //
    // context.font = scoreSize.toString() + 'px' + ' ' + 'serif';
    // context.fillStyle = 'white';
    //
    // context.fillText(score.toString(), x, y, scoreSize);
}