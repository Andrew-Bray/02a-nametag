const myName = document.getElementById('my-name');
const myNewName = document.getElementById('name-input');
const myButton = document.getElementById('name-button');

// this is how we tell the button to listen for clicks
myButton.addEventListener('click', () => {
    // the cool zone -- the place where stuff happens in response to a click!
    // go grab the current value of the text input
    const userInput = myNewName.value;


    myName.textContent = userInput;
});