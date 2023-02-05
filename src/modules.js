let contentDiv = document.querySelector("#content");

//Function to create an element with an id and text content and returns it
function createElementIDText(elementType, idName, text) {
    let element = document.createElement(elementType);
    element.setAttribute('id', idName);
    element.textContent = text;
    return element;
};

//Function to create an element with text content and returns it
function createElementText(elementType, text) {
    let element = document.createElement(elementType);
    element.textContent = text;
    return element;
}
function createElementClassText(elementType, className, text) {
    let element = document.createElement(elementType);
    element.classList.add(className);
    element.textContent = text;
    return element;
}

//Appends multiple elements at once to the same append location
function appendMultiple(appendLocation, ...apendedElements) {
    apendedElements.forEach(element => {
        appendLocation.appendChild(element);
    });
};

function removeChildren(parentElement) {
    let childElement = parentElement.lastElementChild;
    while (parentElement.lastChild.id !== 'header') {
        parentElement.removeChild(parentElement.lastChild);
    };
};

function createHeaderElements() {
    //Create header
    let header = document.createElement('header');
    header.setAttribute('id', 'header');
    contentDiv.appendChild(header);

    //Create resturant heading
    let resturantHeading = createElementIDText('h1', 'restraurant-heading', 'Great Restaurant');

    //Create Button Divs
    let buttonDivs = document.createElement('div');
    buttonDivs.classList.add('button-tabs');

    //Append heading and buttonDiv to header
    appendMultiple(header, resturantHeading, buttonDivs);

    //Create buttons and append to buttonDiv
    let homeButton = createElementIDText('button', 'home-button', 'Home');
    let menuButton = createElementIDText('button', 'menu-button', 'Menu');
    let contactButton = createElementIDText('button', 'contact-button', 'Contact');
    appendMultiple(buttonDivs, homeButton, menuButton, contactButton);
};

function createHomeElements() {
    removeChildren(contentDiv);

    //Create and append home content div
    let homeContentDiv = document.createElement('div');
    homeContentDiv.setAttribute('id', 'home-content');
    contentDiv.appendChild(homeContentDiv);

    //Create varibales for the text content
    let homeHeadingText = "Very Delicious Food is Here!";
    let homeParagraphText = "Come here to get some very delicous food. I promise it is very good and you will have no regrets. We may have some food posioning cases but that is okay.";

    let homeHeading = createElementText('h2', homeHeadingText);
    let homeParagraph = createElementText('p', homeParagraphText);
    appendMultiple(homeContentDiv, homeHeading, homeParagraph);  
};

function createMenuElements() {
    removeChildren(contentDiv);

    let menuDiv = document.createElement("div");
    menuDiv.setAttribute('id', 'menu-div');
    contentDiv.appendChild(menuDiv);

    appendMultiple(menuDiv,
        (createElementClassText("div", "food-item", 'Coffee')),
        (createElementClassText("div", "food-item", 'Pizza')),
        (createElementClassText("div", "food-item", 'Ice Cream')),
        (createElementClassText("div", "food-item", 'Watermelon')),
        (createElementClassText("div", "food-item", 'Cake')),
        (createElementClassText("div", "food-item", 'Water')),
        (createElementClassText("div", "food-item", 'Ice')),
        (createElementClassText("div", "food-item", 'Heroin')),
        (createElementClassText("div", "food-item", 'Peas')),
    );
    
};

function createContactElements() {
    removeChildren(contentDiv);

    let contactDiv = document.createElement("div");
    contactDiv.setAttribute('id', 'contact-div');
    contentDiv.appendChild(contactDiv);

    appendMultiple(contactDiv,
        (createElementIDText('p', 'phone-number', 'Ph: 0400 000 000')),
        (createElementIDText('p', 'adresss', 'Address: 123 street suburb, State')))
};

export { createHeaderElements, createHomeElements, createMenuElements, createContactElements }; 