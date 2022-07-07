const background = document.querySelector('.background');
const goose = document.getElementById('goose');
const bush = document.getElementById('bush');
const score = document.querySelector('.score');

let count = 0;

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

}, 25)

const color = ['white', '#222222', 'teal', '#483D88', 'lavender', '#ffc107']

setInterval(() => {
    let bushLeft = bush.offsetLeft;
    //console.log(bush.getBoundingClientRect())
    //console.log(bushLeft)
    if (bushLeft >= -15 && bushLeft <= 10) {
        count++;
        score.textContent = count;

        if (count % 5 === 0) {
            let randomColor = Math.floor(Math.random() * color.length);
            bush.style.left = '1300px'
            background.style.background = `${color[randomColor]}`
        }
        if (count === 50) {
            goose.style.backgroundImage = 'url(img/golden-goose.png)'
        }
     }
}, 50)

let isAlive = setInterval(() => {
    let gooseTop = goose.offsetTop;
    let bushLeft = bush.offsetLeft;
    if (bushLeft <= 100 && bushLeft > 0 && gooseTop >= 450) {
        alert('GAME OVER');
        score.textContent = 'Score';
        count = 0;
        bush.style.animation = 'bush 2.5s infinite linear'
        background.style.background = 'white'
        i = 0
        goose.style.backgroundImage = 'url(img/goose.png)'
    }
}, 0)




