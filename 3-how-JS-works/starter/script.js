///////////////////////////////////////
// Lecture: Hoisting


calcAge(1919);

function calcAge(year) {
    console.log(kill);
    var kill = 'osama'
    console.log(2019 - year);
    console.log(kill);
}


let retirement = function(year) {
    console.log(65 - (2019 - year));
}

retirement(1990);


console.log(age);
var age = 37;



const town = 'portsmouth';

console.log(town);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);





















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey! ';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();


function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}


function third() {
    var d = 'John';
    console.log(a +  d);
}


calculateAge(202);

function calculateAge(year) {
    
    console.log(2019 - year);
    console.log(this);
    
}

var john = { 
    
    name: 'john',
    year: 1990,
    calcAge: function() {
        console.log(this);
        
//        function innerFunction() {
//            console.log(this);
//        }
//        innerFunction();
    }
    
}

john.calcAge();


var mike = {
    name: 'Mike',
    year: 1984
}

mike.calcAge = john.calcAge;

mike.calcAge(34);












///////////////////////////////////////
// Lecture: The this keyword









