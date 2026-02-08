/////// Variables Section ///////
const myName = "Hannah Chu"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pinapples'];
const car = [{make:"Mazda", model:"CX3", color:"White"},
             {make:"Toyota", model:"Prius", color:"Silver"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// The difference between var and let is the variable scope. Var is function scoped which means it can be redeclared or reassigned.
// This means that in the example, it will keep the 50 both in and outside of the code block. On the other hand, let is block scoped, which means it can be
// reassigned but not redeclared. In the example, this means that the code in the if statement will respect the a = 50 variable declaration
// while the statement outside of the if statement will respect the variable declaration outside of the if statement block.

// console.log(a);
// console.log(b);
// console.log("Example using var");
// testVar();
// console.log("Example using LET");
// testLet();
// When you are done with this section you can comment out the console.logs above




//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[2].color} ${car[2].make} ${car[2].model}.`;

//Footer Section
const footerElement = document.getElementById("footer");
//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${today.getFullYear()}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
// if (loggedIn) {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Welcome back!";
// } else {
//     const result3Element = document.getElementById('result3');
//     result3Element.innerHTML = "Please log in";
// }

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
// loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element
document.getElementById('result3').innerHTML = loggedIn ? 'Welcome back!' : 'Please log in';





//////// PART 4 - Arrow Functions////////
function Greetings(name = 'Default') {
    return `Hello ${name}!`;
};

console.log(Greetings("Hannah"));
console.log(Greetings());

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
const GreetingsArrow = (name) => `Hello ${name}!`;

console.log(GreetingsArrow("Hannah"));



//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

    // Loop through the fruits array
    fruits.filter(fruit => fruit.startsWith('b'))
    .map(fruit => {
      const p = document.createElement("p");
      p.textContent = fruit;
      resultElement.appendChild(p);
    });
}
 
 function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
 }





 //////// PART6 - Destructuring////////
//  myCar(car[0]);

//  function myCar(car) {
//      var make = car.make;
//      var model = car.model;
//      var color = car.color;
 
//      var message = `I drive a ${color} ${make} ${model}`;
   
//      document.getElementById("result6").textContent = message;
//  }

//convert the myCar function to use destructuring
myCar(car[1]);

function myCar(car) {
    var { make, model, color } = car;

    var message = `I drive a ${color} ${make} ${model}`;
  
    document.getElementById("result6").textContent = message;
}





//////// PART 7 - Spread Operator////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
  };
  
  // Seasonal promotion overrides
  const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
  };
  
  // Merge basePrduct and Seasonal using spread operator and add lastUpdated property with a value of '2023-12-31'
  ///UPDATE THIS CODE
  const currentProduct = {...baseProduct, ...holidayPromo, lastUpdated: '2023-12-31'};
  
  //Check the result object in the console:
  console.log(currentProduct);
  //UPDATE THIS OUTPUT
  document.getElementById("result7").textContent = `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`; 





 //////// PART 8 - Try Catch////////
 function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = "";
    
    let x = document.getElementById("part8-input").value;

    try {
      if (x.trim() === "") throw "Input is EMPTY";
      if (isNaN(x)) throw "Input is NOT A NUMBER";
      x = Number(x);
      if (x > 15) throw "Input is TOO HIGH";
      if (x < 10) throw "Input is TOO LOW";
      message.innerHTML = "Success";
    }
    catch (err) {
      message.innerHTML = err;
    }
    finally {
      document.getElementById("part8-input").value = "";
    }
  }
