// destructure_function_argument.js
let person = {
    name: 'Harry Potter',
    location: 'London'
};
const printLocation = ({ location }) => {
    console.log(`Location: ${location}`);
};

printLocation(person);
