// eslint-disable no-unused-vars

// import functions and grab DOM elements

// let state, set event listeners 

const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-button');
const nameDiv = document.getElementById('name');


nameInput.addEventListener('input', function() {
    nameInput.textContent = this.value;
});

updateButton.addEventListener('click', () => {
    const value = nameInput.value; 
    nameDiv.textContent = value;
});




