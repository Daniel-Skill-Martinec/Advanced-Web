function calculateBMI(weight, height) {
    // Meters to Centimeters
    const heightInCm = height * 100;

    // Formula: weight (kg) / (height (m))^2
    const bmi = weight / Math.pow(height, 2);

    return bmi;
}

// Change to Whatever You Want
const weight = 80; // Kilograms
const height = 2; // Meters

const bmiValue = calculateBMI(weight, height);

// Printed Results
console.log(`Your BMI with weight: ${weight} kgs and height ${height} mts is ${bmiValue.toFixed(2)} kg/sq.mt`);
