let name = 'Dheeraj';
let age = 23;

// Enhanced object literal
let person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

console.log(person.name); 
console.log(person.age);  
person.greet();          
