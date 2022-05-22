const c = document.querySelectorAll('.col');
const randomButton = document.querySelector('#randomButton');

const colorBox = document.querySelector('#colorBox')
const addButton = document.querySelector('#addButton')
const subButton = document.querySelector('#subButton')

addButton.addEventListener('click', () => {

    const newDiv = document.createElement('div')
    colorBox.appendChild(newDiv);
    newDiv.classList.add('col');
    newDiv.style.backgroundColor = makeRandColor();

    randomButton.addEventListener('click', () => {
        const addcolor = makeRandColor();
        newDiv.style.backgroundColor = addcolor;
    })
})



subButton.addEventListener('click', () => {
    colorBox.lastChild.remove();
})

randomButton.addEventListener('click', () => {
    for (let i = 0; i < 12; i++) {
        const newColor = makeRandColor();
        c[i].style.backgroundColor = newColor;
    }
})



const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};
