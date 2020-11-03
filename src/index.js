
// To select an element with the id players, we can:
// document.querySelector('CSS SELECTOR')
document.querySelector('#players');

// on getElementById we do not add the #
const list = document.getElementById('players');

// console log driven development
// console.log(list)

// element.insertAdjacentHTML('position', 'element to be inserted')
// list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
// list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");

const winners = document.querySelectorAll('ol#fifa-wins li');

const brazil = winners[0];

const germany = winners[1];
// manipulating classes
germany.classList.add('red');
germany.classList.add('bg-dark');


// DOES IT WORK ⁉ NO!
// winners.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')

// We need to insert adjacent HTML on an ELEMENT, not an ARRAY
const winnersOl = document.querySelector('ol#fifa-wins');
winnersOl.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// const romain = document.getElementById('romain');
const imgs = document.querySelectorAll('img');

imgs.forEach((image) => {
    image.addEventListener('click', (event) => {
        // event is the click itself
        // console.log(event);
    
        // both represent romain
        console.log(event.currentTarget);
        console.log(image);
    
        event.currentTarget.classList.toggle('img-circle');
    });
})


// element.addEventListener('event', (eventItself) => {})
// element.addEventListener('event', behavior)
