// Import the readline module for user input
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate area and perimeter
function calculateAreaAndPerimeter(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}

// Function to prompt the user and calculate the results
function promptUser() {
    rl.question('Enter the length of the rectangle: ', (lengthInput) => {
        const length = parseFloat(lengthInput);
        
        rl.question('Enter the width of the rectangle: ', (widthInput) => {
            const width = parseFloat(widthInput);
            
            if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
                console.log('Please enter valid positive numbers for length and width.');
                rl.close();
                return;
            }

            const { area, perimeter } = calculateAreaAndPerimeter(length, width);

            console.log(`Area: ${area.toFixed(2)}`);
            console.log(`Perimeter: ${perimeter.toFixed(2)}`);
            rl.close();
        });
    });
}

// Start the prompt
promptUser();
