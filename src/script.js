const goose = document.getElementById('goose');
const bush = document.getElementById('bush');
const score = document.querySelector('.score');

// const MaxVelocity = 50;
let count = 0;
let record = 0;

const gooseData = {
    MaxVelocity: 50,
    initialPosition: goose.offsetTop,
    g: 4,
    gooseMass: 1.5,

    gooseJump() {
        document.body.addEventListener('keydown', event => {
            const key = event.key;
            if (key === ' ' || key === 'ArrowUp') {
                jump();
            }
        });
    }
}

gooseData.gooseJump();

// document.body.addEventListener('keydown', event => {
//     const key = event.key;
//     if (key === ' ' || key === 'ArrowUp') {
//         jump();
//     }
// });

// const initialPosition = goose.offsetTop;
// const g = 4;
// const gooseMass = 1.5;
let velocity = 0;

function jump() {
    velocity = gooseData.MaxVelocity;
}

let t = 1;
setInterval(() => {
    const pos = goose.offsetTop;
    let resultPos = pos
    if (velocity > 0) {
        resultPos = gooseData.initialPosition - (velocity * t - gooseData.gooseMass * gooseData.g * t * t / 2)
        t++;
    }
    if (resultPos >= gooseData.initialPosition && velocity > 0) {
        t = 1;
        velocity = 0;
        resultPos = gooseData.initialPosition;
    }
    goose.style.top = `${resultPos}px`

    let bushLeft = bush.offsetLeft;
    if (bushLeft < 50 && bushLeft > 35) {
        count++;
        score.textContent = count;
    }
}, 25)

let save = () => {
    localStorage.score = score.textContent;
}

let isAlive = setInterval(() => {
    let gooseTop = goose.offsetTop;
    let bushLeft = bush.offsetLeft;
    if (bushLeft < 130 && bushLeft > 0 && gooseTop >= 450) {
        alert('GAME OVER');
        record = count;
        score.textContent = record;
        save();
        count = 0;
        score.textContent = count;
    }
}, 10)



