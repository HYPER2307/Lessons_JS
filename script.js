// touchstart
// touchmove 
// touchend
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
        console.log(e.targetTouches);
    });
});

// touches
// targetTouches
// changedTouches