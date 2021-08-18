const goose = document.getElementById('goose');
const bush = document.getElementById('bush');
const score = document.querySelector('.score');
let count = 0;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'Space' || key === 'ArrowUp') {
        jump();
    }
});

const initialPosition = goose.offsetTop;
const g = 4;
const m = 1.5;
let velocity = 0;

function jump() {
    velocity = 50;
    // if (!goose.classList.contains('jump')) {
    //     goose.classList.add('jump');
    // }
    // setTimeout(() => {
    //     if (goose.classList.contains('jump')) {
    //         goose.classList.remove('jump');
    //     }
    // }, 300)
    // count++;
    // score.textContent = count;
}

// setInterval(() => {
//     let gooseTop = parseInt(window.getComputedStyle(goose).getPropertyValue('top'));
//     let bushLeft = parseInt(window.getComputedStyle(bush).getPropertyValue('left'));

//     if (bushLeft < 110 && bushLeft > 0 && gooseTop >= 420) {
//         alert('GAME OVER');
//         bush.style.display = 'none';
//         setTimeout(() => {
//             bush.style.display = 'block';
//         }, 3000) 
//         count = 0;
//         score.textContent = count;
//     }
// }, 10);
let t = 1;
setInterval(() => {
    const pos = goose.offsetTop;
    let resultPos = pos
    if (velocity > 0) {
        resultPos = initialPosition - (velocity * t - m * g * t * t / 2)
        t++;
    }
    if (resultPos >= initialPosition && velocity > 0) {
        t = 1;
        velocity = 0;
        resultPos = initialPosition;
    }
    goose.style.top = `${resultPos}px`
}, 30)
