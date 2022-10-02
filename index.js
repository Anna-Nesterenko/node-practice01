const chalk = require("chalk");

console.log(chalk.blue.bold("Game start! Guess Number"));

const readLine = require("readline").createInterface({
  output: process.stdout,
  input: process.stdin,
});

let count = 1;
let randomNumber = Math.round(Math.random() * 10);
let tryLimit = 3;

const game = () => {
  if (tryLimit >= count) {
    readLine.question(
      chalk.yellow("Enter your Number from 0 to 10\n"),
      (number) => {
        if (randomNumber === number) {
          console.log(chalk.red.inverse("You Win!"));
          readLine.close();
        }
        if (randomNumber > number) {
          console.log(chalk.red.inverse(`You ${number} is less`));
          count += 1;
          game();
        }
        if (randomNumber < number) {
          console.log(chalk.red.inverse(`You ${number} is more`));
          count += 1;
          game();
        }
      }
    );
  } else {
    console.log(chalk.red.bold`Game over, write answer ${randomNumber}`);
    readLine.close();
  }
};

game();
