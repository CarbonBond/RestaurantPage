import Icon from './mythicOwner.jpg';

function loadAboutUs() {
    const bodyContent = document.querySelector('.bodyContent');
    const aboutUs = document.querySelector('.tabAboutUs');
    aboutUs.classList.add('underline');

    const container = document.createElement('div');
    container.classList.add('aboutUsContainer');
    container.classList.add('shadowCover');

    bodyContent.appendChild(container);

    const whoAreWe = document.createElement('div');
    whoAreWe.classList.add('whoAreWe')
    whoAreWe.textContent = 'Who are we?';
    container.appendChild(whoAreWe);

    const descContainer = document.createElement('div');
    descContainer.classList.add('descContainer');
    container.appendChild(descContainer);

    const myIcon = new Image(300);
    myIcon.src = Icon;
    descContainer.appendChild(myIcon);

    const description = document.createElement('div');
    description.classList.add('aboutUsDescription');

    const paragraghIntro = document.createElement('P');
    paragraghIntro.textContent = `Our owner Mythic loves both cooking and pizza. 
    He has worked at as many pizza places as he could to understand each stores value. 
    From chains to mom and pop shops, He\'s been everywhere! After seeing how most Pizzarias are run, he decided to open his own business!`;
    const paragraghMiddle = document.createElement('P');
    paragraghMiddle.textContent = `He learned that customers always come first, and the pizza can get suprisingly complicated. 
    This is why all of are pizzas are unlimited toppings, making the ordering process easier. We only change are prices based on size and syle! He also loves to experiment, this is why we also sell Desert Pizzas.`;


    description.appendChild(paragraghIntro);
    description.appendChild(paragraghMiddle);
    descContainer.appendChild(description);

};

export default loadAboutUs;