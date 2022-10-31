const c = document.querySelectorAll('.col');
const randomButton = document.querySelector('#randomButton');

const colorBox = document.querySelector('#colorBox')
const addButton = document.querySelector('#addButton')
const subButton = document.querySelector('#subButton')

let totalDiv = 3;
let maxDiv = 10;
let minDiv = 3;


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};



subButton.addEventListener('click', () => {
    if(totalDiv !==  minDiv ){
        colorBox.lastChild.remove();
        totalDiv -= 1;
    }
})

addButton.addEventListener('click', () => {
if(totalDiv !==  maxDiv ){
    const newDiv = document.createElement('div')
    colorBox.appendChild(newDiv);
    newDiv.classList.add('col');
    newDiv.style.backgroundColor = makeRandColor();
    totalDiv+=1;

    randomButton.addEventListener('click', () => {
        const addcolor = makeRandColor();
        newDiv.style.backgroundColor = addcolor;
    })

}

})

randomButton.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        const newColor = makeRandColor();
        c[i].style.backgroundColor = newColor;
    }
})


c[0].style.backgroundColor =  makeRandColor()
c[1].style.backgroundColor =  makeRandColor()
c[2].style.backgroundColor =  makeRandColor()

