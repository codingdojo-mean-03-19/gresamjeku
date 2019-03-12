//1. GIVEN
console.log(hello);                                   
var hello = 'world'; 
// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);
hello = 'world'; //logs: undefined

//2. GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test() //logs: magnet

//3. GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
var brendan = 'super cool';
function print(){
    var brendan;
    console.log(brendan);
    brendan = 'only okay';
}
console.log(brendan); //logs: super cool

//4. GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
var food = 'chicken';
console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
// logs: chicken half-chicken

//5. GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
var mean;
mean();
console.log(food);
mean = function(){
    var food;
    food = "chicken";
    console.log(food);
    var food;
    food = "fish";
    console.log(food);  
} //logs: mean is not a function

//6. GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre); 
genre='disco';
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    var genre;
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre); //logs: undefined rock r&b disco

//7. GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
var dojo;
dojo = 'san jose';
console.log(dojo);
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo;
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo); //logs: san jose seattle burbank san jose

//8. GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0)); 
//name='Chicago' students=65, hiring=true
//error because the second if condition tries to override the const variable dojo