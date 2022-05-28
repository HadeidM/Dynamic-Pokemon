//////////////////////////
// Author : hadeid 
/////////////////////////

const container = document.querySelector('#container');
const head = document.querySelector('h1');
const h2 = document.createElement('h2');
h2.innerText = 'wait for it...'
setTimeout(() => head.insertAdjacentElement('beforeend', h2), 2100);

setTimeout(() => {
  for (let i = 1; i < 898; i++) {
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    container.appendChild(img);
  }
}, 4000);


