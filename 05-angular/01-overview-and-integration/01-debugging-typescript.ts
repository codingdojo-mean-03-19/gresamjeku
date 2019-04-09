//1.
var myString: string;
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// We initially defined it as a type 'string', value should be string as well
// Put 9 in "" to convert it to a string
myString = "9";

//2.
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // Parameter type is string, pass the number like a string by using ''
 console.log(sayHello('9'));
 
//3.
function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 // Make middle name optional, by appending ? after its declaration
 console.log(fullName("Jimbo", "Jones"));
 
//4.
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 // The object passed should have exactly the same properties as the interface, change belt into belts
 console.log(graduate(jay));
 
//5.
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
     }
 }
 // This is not making an instance of Ninja, for some reason:
 // Use keyword new to create an instance of class Ninja
 // Pass the parameters needed for the constructor
 // From Ninja() to new Ninja('Alan','Turing')
 const shane = new Ninja('Alan','Turing');
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
/* const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 Delete turing object because we created the instance of Ninja */
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 // Change argument into the newly created instance of Ninja 
 console.log(study(shane));
 
//6.
var increment = x => x + 1;
console.log(increment(3));
//delete the square brackets 
var square = x => x * x;
console.log(square(4));
// Put x and y into brackets
var multiply = (x,y) => x * y;
// Separate the function parameters and the function body by using {}
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//7.
class Elephant {
    constructor(public age: number){}
    birthday = age => this.age++;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)