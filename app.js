// import functions and grab DOM elements
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');
const container = document.getElementById('name-tag');
container.style.backgroundColor = 'blue';
const greeting = document.getElementById('greeting');
const nameDiv = document.getElementById('name');
nameDiv.textContent = 'Enter name here';
nameDiv.style.color = 'green';

// let state

// set event listeners 
updateButton.addEventListener('click', () => { });
  // get user input
  // use user input to update state
updateButton.addEventListener('click', () => {
    const value = nameInput.value;
    nameDiv.textContent = value;
});
  // update DOM to reflect the new state
  






