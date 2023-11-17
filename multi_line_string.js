// multi_line_string.js
const multiLineString = `This is
a multi-line
string.`;

const lines = multiLineString.split('\n');
lines.forEach(line => console.log(line));
