// Part 1: Fizz Buzz Problem
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log('Fizz Buzz');
    } else if (i % 3 == 0 ) {
        console.log('Fizz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i)
    }
}



// Part 2: Prime Number Finder
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

let n = 4; //my variable
while (true) {
    n++;
    if (isPrime(n)) {
        console.log(n);
        break;
    }
}

// Part 3CSV Processing
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the data into rows
let rows = csvData.split('\n');

// Loop through each row
for (let row of rows) {
    // Split each row into cells
    const cells = row.split(',');

    // Log each cell
    console.log(cells.join(', '));
}


    