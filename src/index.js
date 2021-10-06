import './style.css';
import './pizza.png';
import './backgroundPizza.jpg';
import pageLoad from './mythicPizza.js';
import loadAboutUs from './aboutUsPage.js'
import loadMenu from './orderPage.js'
import loadContact from './contactPage.js'

pageLoad();


const tabAboutUs = document.querySelector('.tabAboutUs');
const tabOrder = document.querySelector('.tabOrder');
const tabContact = document.querySelector('.tabContact');

tabAboutUs.addEventListener('click', () => {
    whipe();
    loadAboutUs();
});
tabOrder.addEventListener('click', () => {
    whipe();
    loadMenu();
});
tabContact.addEventListener('click', () => {
    whipe();
    loadContact();
});

function whipe() {
    const bodyContent = document.querySelector('.bodyContent')
    const childNodes = bodyContent.childNodes;
    childNodes.forEach(item => {
        item.remove();
    })
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(item => {
        item.classList.remove('underline');
    })
}