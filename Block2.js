//1.Convert the function below into different forms of function expression.

function percentage(marks, total) {
    return (marks * 100) / total;
  }
  
  // Your code goes here

  let percentage = function (marks, total) {
    return (marks * 100) / total;
  }

//2.Write Function Declaration or Function Expression next to the function.

function percentage(marks, total) {
    return (marks * 100) / total;
  }
  // Your answer
  //function declaration

  let percentage = function percentage(marks, total) {
    return (marks * 100) / total;
  };
  // here aleady declared the function name as variable name ,function declaration

  let percentage = function (marks, total) {
    return (marks * 100) / total;
  };
  //function expression

  let percentage = (marks, total) => {
    return (marks * 100) / total;
  };
  //arrow function

  let percentage = (marks, total) => (marks * 100) / total;
  // arrow function
  
  //3.Why is a function definition an expression in JavaScript? Give one example of function expression.

 // the function keyword can be used to define a function inside an expression

 //4. Why is a function call an expression in JavaScript?

   // A function call expression is used to execute a specified function with the provided arguments

 //5.Write VALID and INVALID next to each example below with the reason.

 function add(a, b) {
    return a + b;
  }
  
  let five = add(2, 3); // Answer valid
  five = add; // invalid
  five = five(10, 11); // valid
  five = function () {
    return 'Hello';
  }; // invalid

 //6.What is the difference between function definition and function call? Explain with an example.

 // function declare and define are the same.function defination does not require a variable assignment,while a function call is an expression that invokes a function and executes the code in the function,use the function name followed by parentheses.
  //function declaration
 function geeksforGeeks(paramA, paramB) {
    // Set of statements
 }
 //function call
 const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  


  //7.What is the similarities between function definition and function call?

  //declare and define are the same, and they mean when you write all the code for your function. At that point the function just sits there doing nothing. call is when you tell the JavaScript interpreter to run the code in your function.

  //8.Is the code below valid or invalid. Explain with reason.

  function hello() {
    console.log('Hello World!');
  }
  
  hello.user = 'Sam'; // valid or invalid //invalid

  //9.What is higher order function explain with an example.

  //A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. There are several different types of higher order functions like map and reduce.

  //example:const numbers = [1, 2, 3, 4, 5];

  const newArray = numbers.map((number) => number + 1);
  console.log(numbers);

  //10.Explain what is callback function. Why you can pass a function inside a function?

  // A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.if the callback function is expecting an argument. Then we supply those arguments while executing. 

  