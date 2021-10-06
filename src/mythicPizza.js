function pageLoad(){
    const contentDiv = document.querySelector("#content");
    const restaurantPage = document.createElement('div');
    restaurantPage.classList.add('restaurantPage')
    contentDiv.appendChild(restaurantPage);

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('bannerContainer');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    restaurantPage.appendChild(bannerContainer);
    restaurantPage.appendChild(contentContainer);


    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('linkContainer');
    bannerContainer.appendChild(titleContainer);
    bannerContainer.appendChild(linkContainer);
    
    const pizzaIcon = document.createElement('div');
    pizzaIcon.classList.add('icon');
    titleContainer.appendChild(pizzaIcon);

    const nameAndDesc = document.createElement('div');
    nameAndDesc.classList.add('nameAndDesc');
    titleContainer.appendChild(nameAndDesc);

    const title = document.createElement('h1');
    title.textContent= 'Mythical Pizzaria';
    nameAndDesc.appendChild(title);
    const titleDesc = document.createElement('p');
    titleDesc.textContent = 'Locally Made Authentic Pizza';
    nameAndDesc.appendChild(titleDesc);

    const tabAboutUs = document.createElement('div');
    tabAboutUs.classList.add('tabAboutUs', 'tab')
    tabAboutUs.textContent = 'About Us';
    const tabOrder = document.createElement('div');
    tabOrder.classList.add('tabOrder', 'tab');
    tabOrder.textContent = 'Order';
    const tabContact = document.createElement('div');
    tabContact.classList.add('tabContact', 'tab');
    tabContact.textContent = 'Contact'
    
    linkContainer.appendChild(tabOrder);
    linkContainer.appendChild(tabAboutUs);
    linkContainer.appendChild(tabContact);

    const bodyContent = document.createElement('div');
    bodyContent.classList.add('bodyContent');
    contentContainer.appendChild(bodyContent);

    const DELETEME = document.createElement('div');
    bodyContent.appendChild(DELETEME)

}

export default pageLoad