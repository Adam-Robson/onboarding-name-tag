/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');
const container = document.getElementById('name-tag');
const greeting = document.getElementById('greeting');
const nameDiv = document.getElementById('name');
nameDiv.textContent = 'Enter name here';

// let state

// set event listeners 
updateButton.addEventListener('click', () => { 
    let value = nameInput.value;
    nameDiv.textContent = value;
});

  // get user input
  // use user input to update state
nameInput.addEventListener('input', () => {
    const value = nameInput.value;
    nameDiv.textContent = value;
});
  // update DOM to reflect the new state
  






