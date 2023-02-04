let contentDiv = document.querySelector("#content");

//Function to create an element with an id and text content and returns it
function createElementIDText(elementType, idName, text) {
    let element = document.createElement(elementType);
    element.setAttribute('id', idName);
    element.textContent = text;
    return element;
};

function createElementText(elementType, text) {
    let element = document.createElement(elementType);
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
    console.log("createHomeElements is working");

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
    console.log("createHomeElements is working");
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
    console.log('createMenuElements is working');
    removeChildren(contentDiv);
};

function createContactElements() {
    console.log('createContactElements is working');
    removeChildren(contentDiv);
};

export { createHeaderElements, createHomeElements, createMenuElements, createContactElements }; 