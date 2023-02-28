
function sum_of_squares(x, y){
    alert((x**2)+(y**2));
    console.log((x**2)+(y**2));
}

function usd_to_kzt(dollar) {
    alert(dollar * 475);
    console.log(dollar * 475);
}

function even_or_odd(num) {
    if(num % 2 == 0){
        alert("even");
        console.log("even");
    }
    else {
        alert("odd");
        console.log("odd");
    }
}
function run() {
    let task = prompt("To work with functions enter the number of the task");
    if(task == 1){
        let x = prompt("Enter the value for the first number: ");
        let y = prompt("Enter the value for the second number: ");
        sum_of_squares(x, y);
    }
    else if(task == 2){
        let usd = prompt("Enter the amount of dollar to convert: ");
        usd_to_kzt(usd);
    }
    else if(task == 3){
        let number = prompt("Enter the number to find the parity: ");
        even_or_odd(number); 
    }
}
alert("There are three available tasks, namely: \n1. Function that returns the sum of squares of two given numbers; \n2. Function to convert dollars to tenge; \n3. Function to check whether a given number is even or odd.");
run();
alert("To check other functions reload the page. Shortcuts: cmd + r or ctrl + r");