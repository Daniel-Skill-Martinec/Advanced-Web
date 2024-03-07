function displayFactors(targetNumber) {
    for (let i = 1; i <= targetNumber; i++) {
        const factors = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                factors.push(j);
            }
        }
        console.log(`Factors of ${i}: [${factors.join(', ')}]`);
    }
}

// Get Number
const targetNumber = parseInt(prompt("Enter the Target Number:"));

// Check
if (isNaN(targetNumber) || targetNumber < 1) {
    console.log("Enter a Positive Number.");
} else {
    // Displays the Factors
    displayFactors(targetNumber);
}
