// object_destructuring_function.js
let person = {
    name: 'Harry Potter',
    location: 'London'
}

const printPerson = ({ name, location }) => {
    console.log(`${name} is located in ${location}.`);
};

printPerson(person);
