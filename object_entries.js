// object_entries.js
let person = {
    name: 'Harry Potter',
    location: 'London'
};
for(let [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`);
}