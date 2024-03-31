// // const goToDate= confirm("are you reay to pay")

// // if(goToDate){
// //     alert("proceed to payment")
// // }else{
// //     alert("payment cancelled")
// // }
// // const username =prompt("What is your name")

// // if(username === "betty"){
// //     console.log("welcome betty")
// // }else if(username === "tobi"){
// //     console.log("welcome tobi")
// // }else{
// //     console.log("Invalid username")    
// // }

// // const age = parseInt(prompt("how old are you"))
// // if(age>=18){
// //     console.log("welcome to the bar!")
// // }else{
// //     console.log("You are not allowed in")
// // }

// // function greetings (user ="DAYO"){
// //     console.log("welcome",user)
// // }
// // greetings("Fatai")
// // greetings("Fatai")
// // greetings("Fatai")
// // greetings("")

// // function add(num, boo = 1){
// //     return num*boo
// // }
// // console.log(add(8,3))
// // function checkBachelorEligibility(age) {
// //     if (age >= 18 & age <= 40) {
// //         console.log("You are eligible for bachelor studies.");
// //     } else {
// //         console.log("You are not eligible for bachelor studies.");
// //     }
// // }

// // function main() {
// //     let ageInput = prompt("Enter your age:");
// //     let age = parseInt(ageInput);

// //     if (isNaN(age)) {
// //         console.log("Please enter a valid age.");
// //     } else {
// //         checkBachelorEligibility(age);
// //     }
// // }
// // function checkAgeCondition(age) {
// //     if (age < 18) {
// //         console.log("You are too young to get married.");
// //     } else if (age >= 18 && age <= 23) {
// //         console.log("You are in the bachelor age range.");
// //     } else if (age >= 24 && age <= 32) {
// //         console.log("It's time to get serious about life.");
// //     } else if (age >= 33 && age <= 40) {
// //         console.log("It's time to consider settling down and getting married.");
// //     } else {
// //         console.log("You are out of the eligible age range.");
// //     }
// // }

// // function main() {
// //     let ageInput = prompt("Enter your age:");
// //     let age = parseInt(ageInput);

// //     if (isNaN(age)) {
// //         console.log("Please enter a valid age.");
// //     } else {
// //         checkAgeCondition(age);
// //     }
// // }

// // main();

// // const pizza = prompt(
// //     "Please select your preference\n 1. Small pizza\n 2.Medium pizza\n 3. Large pizza\n 4.Family size pizza"
// //     )

// // switch (pizza) {
// //     case"1":
// //         confirm("You've choosen Small pizza")
// //         break
// //      case"2":
// //         confirm("You've choosen Medium pizza")
// //         break
// //      case"3":
// //         confirm("You've choosen Large pizza")
// //         break
// //      case"4":
// //         confirm("You've choosen Family size pizza")
// //         break
// //     default:
// //         alert("invalid input")
// // }
// // const DispensaryMachine = prompt("pls select your preference\n 1.coke\n 2.fanta\n 3.water\n 4.sprite")
// // switch (DispensaryMachine){
// //         case"1":
// //             confirm("You've choosen coke")
// //             break
// //          case"2":
// //             confirm("You've choosen fanta")
// //             break
// //          case"3":
// //             confirm("You've choosen water")
// //             break
// //          case"4":
// //             confirm("You've choosen sprite")
// //             break
// //         default:
// //             alert("No soda available")
// // }
// // const bender = {
// //     name: "zuko",
// //     age: "15",
// //     power:"fire",
// //     nation:" fire nation",
// // }

// // const bender2 = {
// //     name: "aang",
// //     age: "12",
// //     power:["fire","water","air","earth"],
// //     nation:"air nation",
// //     fight: function(){
// //         return " i will fight for peace with my"
// //         +this.power[0]+ "power"

// //     }
// // }
// // console.log(bender)

// // let num =0

// // while(num<100){
// //     console.log("i am a god",num)
// //     num++
// // }

// // do{
// //     console.log("I am dancing")
// //     num++
// // } while(num < 110)

// // for (let i = 1; i <= 5; i++) {
// //     console.log("say Hi" ,1)
// // }
// // const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers);

// // for(let i=0; i<numbers.length; i++){
// //     console.log("$(numbers[i]) this is are numbers")
// // }
// // // Create an empty array to store numbers
// // let numbersArray = [];

// // // Populate the array with numbers from 1 to 10
// // for (let i = 0; i <= 10; i++) {
// //     numbersArray.push(i);
// // }

// // // // Loop through the array to check for odd and even numbers
// // for (let i = 0; i < numbersArray.length; i++) {
// //     if (numbersArray[i] % 2 === 0) {
// //         console.log(numbersArray[i] + " is even.");
// //     } else {
// //         console.log(numbersArray[i] + " is odd.");
// //     }
// // }

// // // Create an array of numbers from 1 to 10 using map function
// // let numbersArray = Array.from({length: 10}, (_, i) => i + 1);

// // // Function to check if a number is odd or even
// // function checkOddEven(number) {
// //     if (number % 2 === 0) {
// //         console.log(number + " is even.");
// //     } else {
// //         console.log(number + " is odd.");
// //     }
// // }
// // // Iterate through the array and check odd/even using forEach function
// // numbersArray.forEach(checkOddEven);

// // const array = []; 
// // let x = 0;

// // while (x < 5) {
// //     array.push(x); 
// //     console.log(array); 
// //     x++; 
// // }

// // const arr = []; // Initialize an empty array

// // while (true) {
// //     const item = prompt("Enter an item (type 'done' to exit):"); // Prompt for input

// //     if (item === 'done') {
// //         break; // Exit the loop if 'done' is entered
// //     }

// //     arr.push(item); // Push the input value into the array
// //     console.log(arr); // Log the array
// // }

// // const arr = []; // Initialize an empty array
// // let x = 5; // Initialize a variable to track the number of iterations

// // while (true) {
// //     const item = prompt("Enter an item (type 'done' to exit):"); // Prompt for input

// //     if (item === 'done') {
// //         break; // Exit the loop if 'done' is entered
// //     }

// //     arr.push(item); // Push the input value into the array
// //     console.log(arr); // Log the array
// //     x++; // Increment x
// // }

// const arr = []

// while (arr.length < 5){
//     const item = prompt("Enter a array item")
//     arr.push(item)


// }




// console.log(arr)

const choices = ['rock', 'paper', 'scissors'];

        function getComputerChoice() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                return "It's a tie!";
            } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                       (playerChoice === 'scissors' && computerChoice === 'paper') ||
                       (playerChoice === 'paper' && computerChoice === 'rock')) {
                return "You win!";
            } else {
                return "Computer wins!";
            }
        }

        function isValidChoice(choice) {
            return choices.includes(choice);
        }

        document.getElementById('playButton').addEventListener('click', function() {
            const playerChoice = document.getElementById('userChoice').value.toLowerCase();

            if (!isValidChoice(playerChoice)) {
                document.getElementById('result').textContent = "Invalid choice. Please enter 'rock', 'paper', or 'scissors'.";
                return;
            }

            const computerChoice = getComputerChoice();
            document.getElementById('result').textContent = "Computer's choice: " + computerChoice;

            const result = determineWinner(playerChoice, computerChoice);
            document.getElementById('result').textContent += "\n" + result;

            const playAgain = document.getElementById('playAgain').value.toLowerCase();
            if (playAgain !== 'yes') {
                document.getElementById('result').textContent += "\nThanks for playing!";
            }
        });

        document.getElementById('resetButton').addEventListener('click', function() {
            document.getElementById('result').textContent = "";
            document.getElementById('userChoice').value = "";
            document.getElementById('playAgain').value = "";
        });