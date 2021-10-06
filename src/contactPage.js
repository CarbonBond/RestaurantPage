
function loadContact() {
    const bodyContent = document.querySelector('.bodyContent');
    const contact = document.querySelector('.tabContact');
    contact.classList.add('underline');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    bodyContent.appendChild(contactContainer);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer', 'shadowCover')
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer', 'shadowCover');
    contactContainer.appendChild(formContainer);
    contactContainer.appendChild(infoContainer);


//Contact Form On the left
    const contactForm = document.createElement('form');
    const contactFirstName = document.createElement('input');
    contactFirstName.id = 'contactFirstName';
    const contactFirstNameL = document.createElement('label');
    contactFirstNameL.htmlFor = contactFirstName.id;
    contactFirstNameL.textContent = 'First Name'
    const contactLastName = document.createElement('input');
    contactLastName.id = 'contactLastName';
    const contactLastNameL = document.createElement('label');
    contactLastNameL.htmlFor = contactLastName.id;
    contactLastNameL.textContent = 'Last Name'

    //Issue Selection
    const contactSelection = document.createElement('select');
    contactSelection.id = "contactSelection"
    const contactSelectionL = document.createElement('label');
    contactSelectionL.htmlFor = contactSelection.id;
    contactSelectionL.textContent = "Topic:"
    const contactSelectionFood = document.createElement('option');
    contactSelectionFood.textContent = "Food";
    contactSelection.appendChild(contactSelectionFood);
    const contactSelectionEmployee = document.createElement('option');
    contactSelection.appendChild(contactSelectionEmployee);
    contactSelectionEmployee.textContent = "Employee";
    const contactSelectionOther = document.createElement('option');
    contactSelection.appendChild(contactSelectionOther);
    contactSelectionOther.textContent = "other";
    


    //description
    const contactDescription = document.createElement('textarea');
    contactDescription.id = 'contactDescription';
    contactDescription.cols = '40';
    contactDescription.rows = '5';
    const contactDescriptionL = document.createElement('label')
    contactDescriptionL.htmlFor = contactDescription.id;
    contactDescriptionL.textContent = "Message:";

    const contactSubmit = document.createElement('input');
    contactSubmit.type = 'submit';
    contactSubmit.value = 'Submit';


    formContainer.appendChild(contactFirstNameL);
    formContainer.appendChild(contactFirstName);
    formContainer.appendChild(contactLastNameL);
    formContainer.appendChild(contactLastName);
    formContainer.appendChild(contactSelectionL);
    formContainer.appendChild(contactSelection);
    formContainer.appendChild(contactDescriptionL);
    formContainer.appendChild(contactDescription);
    formContainer.appendChild(contactSubmit);



    
//Info Section on the right side
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('infoItems');
    emailContainer.textContent = "Email: LoremIpsum@Mpizza.com"
    const phoneContainer = document.createElement('div');
    phoneContainer.classList.add('infoItems');
    phoneContainer.textContent ="Phone: 000-000-0000" 
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('infoItems');
    addressContainer.textContent = `
    Address: 0000 Street City State`;

    infoContainer.appendChild(emailContainer);
    infoContainer.appendChild(phoneContainer);
    infoContainer.appendChild(addressContainer);





};

export default loadContact;