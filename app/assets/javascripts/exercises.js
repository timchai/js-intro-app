// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!

// for(var i = 10; i > 0; i--) {
//   console.log(i);
// }

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// for(var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
// var sum = 0
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

for (var i = 1; i <= 100; i++) {
  if (i % 15 === 0)
    console.log("FizzBuzz");
  else if (i % 3 === 0)
    console.log("Fizz");
  else if (i % 5 === 0)
    console.log("Buzz");
  else
    console.log(i);
}

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For example:
// var guess = prompt("Guess a number");

// var number = Math.floor((Math.random() *100) + 1);
// for (var i = 0; i < 10; i++) {
// var guess = prompt("Pick a number between 1 and 100");
//   if (guess < number) {
//     console.log("Too small");
//   } else if (guess > number) {
//       console.log("Too big");
//   } else {
//       console.log("You got it!");
//       break;
//   }
// }

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// function add (x, y) {
//     return x + y
// }
// console.log(add(1, 2));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// var user_numbers = [];
// for(var i = 0; i < 5; i++) {
//     user_numbers.push(parseInt(prompt("Enter a number")));
// }
// function average(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return (sum / numbers.length);
// }
// console.log(average(user_numbers));

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {
//     title: "",
//     author: "",
//     isbn: 454,
//     pages: 5,
//     yearOfPublication: 2014,
// };

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// var book = {
//     title: "Sportscenter",
//     author: "ESPN",
//     isbn: 454,
//     pages: 5,
//     yearOfPublication: 2014,    
//     printInfo: function() {
//         console.log(this.title + ", " + this.author + ", " + this.isbn + ", " + this.pages + ", " + this.yearOfPublication)
//     }
// };

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


