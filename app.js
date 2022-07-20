// import functions and grab DOM elements
const nameElem = document.getElementById('name');
nameElem.textContent = 'Benny';
nameElem.style.color = 'green';

const container = document.getElementById('name-tag');
container.style.backgroundColor = 'blue';

// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
  
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');
const nameDiv = document.getElementById('name');

updateButton.addEventListener('click', () => { });

updateButton.addEventListener('click', () => {
    const value = nameInput.value;
    nameDiv.textContent = value;
});