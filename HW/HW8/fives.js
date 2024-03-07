function printMultiplesOf5(list) {
    for (let item of list) {
        if (item > 500) {
            // Break
            break;
        } else if (item > 150) {
            // Continue
            continue;
        } else if (item % 5 === 0) {
            // Print
            console.log(item);
        }
    }
}

// Example input
const exList = [12, 75, 150, 180, 145, 525, 50];

printMultiplesOf5(exList);
