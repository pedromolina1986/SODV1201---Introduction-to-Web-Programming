//lets require use the file system
const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync("./data.json", "UTF-8", (err) => {
    if (err)throw err;
}));

const newList = [];
const newData = "Hello from node.js";
console.log(data);

//lets create new objects from our data.json
for (let user of data) {    
    newList.push({name: user.name, email: user.email})
};


fs.writeFile("message.json", JSON.stringify(newList, null, 2), (err) => {
    if (err) throw err;
});

const fileName = "example.txt";
const textPath = path.join(__dirname, fileName);

const newText = "This is my me, comining fs and path! Yahoo";

//lets declare a function to save files
function writeText(text, filePath) {
    
}