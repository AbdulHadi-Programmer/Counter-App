// Selecting HTML elements
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initial counter value
let counterValue = 0;

// Function to update the counter value and display
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Event listener for button clicks
function handleButtonClick(action) {
    if (action === 'increment') {
        counterValue++;
    } else if (action === 'decrement' && counterValue > 0) {
        counterValue--;
    } else if (action === 'reset') {
        counterValue = 0;
    }
    
    updateCounter();
}

// Adding click event listeners to buttons
incrementBtn.addEventListener('click', () => handleButtonClick('increment'));
decrementBtn.addEventListener('click', () => handleButtonClick('decrement'));
resetBtn.addEventListener('click', () => handleButtonClick('reset'));