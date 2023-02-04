console.log("index.js is working");
import {createHeaderElements, createHomeElements, createMenuElements, createContactElements} from './modules.js';

createHeaderElements()
createHomeElements();

let homeButton = document.querySelector('#home-button');
let menuButton = document.querySelector('#menu-button');
let contactButton = document.querySelector('#contact-button');

homeButton.classList.add('selected');

function redecalreButtons() {
    homeButton = document.querySelector('#home-button');
    menuButton = document.querySelector('#menu-button');
    contactButton = document.querySelector('#contact-button');
}

function removeSelectedClass() {
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
}

homeButton.addEventListener('click', () => {
    createHomeElements();
    removeSelectedClass();
    homeButton.classList.add('selected');
});

menuButton.addEventListener('click', () => {
    createMenuElements();
    removeSelectedClass();
    menuButton.classList.add('selected');
});

contactButton.addEventListener('click', () => {
    createContactElements();
    removeSelectedClass();
    contactButton.classList.add('selected');
});



