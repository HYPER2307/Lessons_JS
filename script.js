const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('rge');
// };

// btn.onclick = function() {
//     alert('rfsde');
// };

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
});