const prompt = require("prompt-sync")({ sigint: true });
let number = Math.floor(Math.random() * 100 + 1);
console.log("\nProgram to guess the number between 1 - 100\n");
// console.log(number);
let Points = 100;
while (true) {
    let input = Number.parseInt(prompt("Enter the Guess: "));
    if (input > number) {
        console.log("The guess entered is bigger than the number, try again!");
        Points -= 1;
    } else if (input < number) {
        console.log("The guess entered is smaller than the number, try again!");
        Points -= 1;
    } else {
        console.log(`Congratulations! For guessing the number. Score: ${Points}`);
        break;
    }
}
