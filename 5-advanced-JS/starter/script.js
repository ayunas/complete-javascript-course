const john = {
    name: 'john',
    age: 25,
    job: 'teacher',
    present : function(style,time) {
        if (style === 'formal') {
            console.log(`good ${time}, ladies and gentlemen.  I am ${this.name}.  I am a ${this.job}, and I am ${this.age} years old.`);
        } else if (style === 'friendly') {
            console.log(`Hey!  how are you this ${time}?  I'm ${this.name}.  I'm ${this.age} and my gig is ${this.job}.`);
        }
    }   
}

console.log(john);
const emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

console.log(emily);

john.present('friendly','morning');

john.present.call(emily,'friendly','morning');

const johnFriendly = john.present.bind(john,'friendly');

johnFriendly('night');

const emilyFormal = john.present.bind(emily, 'formal');

emilyFormal('evening');

