//let's display a dynamic line on console (update the same line instead of creating a new one)

//let me define a tiimeout interval callback that get execcuted once and and interval will fire function every time interval ticks
const INTERVAL = 500;
const WAIT_TIME = 3000;

//let's keep track ou our time
let currentTime = 0;

const timerFinsihed = () => {
    //updATE MY CONSOLE WITH FINAL MESSAGE
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Done...100%");

    clearInterval(interval); //FUNCTION TO CLEAR THE INTERVAL

    ask();//FUNCTION TO AASK THE USERS SOMER QUESTIONS
};

//my interval function
const incTIme = () => {
    currentTime += INTERVAL;

    //let's calcultate the percentage of time ellapsed and compare to our WIAT_TIME
    let percentage = Math.floor(currentTime / WAIT_TIME * 100);

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Loading...${percentage}%`);
};

//let's define our interval object
const interval = setInterval(incTIme, INTERVAL);

//this will start the timeout to run once the ellapsed time ends
setTimeout(timerFinsihed, WAIT_TIME);

//let's dfine our questions
const questions = [
    'What is your name?',
    'What is you age?',
    'What is you favorite programming language?'
];

const answers = [];

function ask(i = 0) {
    process.stdout.write(`\n${questions[i]}`);    
}

process.stdin.on("data", (data) => {
    console.log("Your answer was: ", data.toString().trim());
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

//Let's exit with a confirmation message
process.on("exit", () => {
    console.log(`${answers[0]}, when I was ${answers[1]}, I knew nothing about ${answers[2]} you are doing great. Keep it up!!!`)
})


