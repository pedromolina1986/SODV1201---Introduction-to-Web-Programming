//import our path model
const path = require("path");

//my first node.js

//lets begin with a simple message 
let msg = "Hello world!!";
console.log(msg);

// use path module
console.log(__dirname);
console.log(__filename);

//obtain filename
console.log("this file name is", path.basename(__filename));

//difference between browser globa object and node.js global object
//"global" is the global object
for (key in global) {
    console.log(key);
};

console.log("\n\n");

//what else can we do withnode
console.log(process.argv);

//lets define a function to grab extra arguments from the terminal
function grabArgument(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return(process.argv[indexAfterFlag]);
}

let greeting = grabArgument("--greeting");
let user = grabArgument("--user");

console.log(greeting);
console.log(user);