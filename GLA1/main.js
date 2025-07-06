/*
* @Author: Pedro Molina
* @StudentID: 467777
* @Date: 2025-07-05
* @Description: 
        Download the starter code and work on the JavaScript file only. Do not edit the HTML or CSS.
        In your JavaScript file, add your name and student ID as a comment in the first lines.
        Every step is to be completed using JavaScript code only:
        1. Display your full name inside of an H1 element. Use a variable to store your name.
        2. Make your name center-aligned and change its color to #AA0061.
        3. Append two input elements and one button. When the button is clicked, display the
        sum of the two input elements on the page. Do not use alert or console. Your result
        must be displayed on the page.
        4. Validate the values in the input fields. The input should only accept numbers. If the
        input is not a number, set the input box’s borders to color #D40404.
        5. Add style to at least two other elements in your page.
*/

/* Write your code below this line */
//get the maind tag of the html
const mainElement = document.getElementsByTagName("main")[0];

//1. Display your full name inside of an H1 element. Use a variable to store your name.
const newH1 = document.createElement("h1");
newH1.textContent = "Pedro Molina";

//2. Make your name center-aligned and change its color to #AA0061.
newH1.style.textAlign = "center";
newH1.style.color = "#AA0061";

//apending in the main element
mainElement.appendChild(newH1);

/*3. Append two input elements and one button. When the button is clicked, display the
sum of the two input elements on the page. Do not use alert or console. Your result
must be displayed on the page.*/

//create first input as a number input
    const input1 = document.createElement("input");
    input1.id = "I1";
    input1.type = "number";
    input1.value = 0;

//create a plus sign for UX
    const plusSign = document.createElement("span");
    plusSign.textContent = "+";

//create second input as a number input
    const input2 = document.createElement("input");
    input2.id = "I2";
    input2.type = "number";
    input2.value = 0;


//create the result h2 to display the result
    const resultH2 = document.createElement("h2");
    resultH2.textContent = "Press the button for the result";
    resultH2.id = "RESULT";

//create the button and add the click listener
    const button = document.createElement("button");
    button.innerText = "Display SUM"
    button.addEventListener("click", sumInputs);

    function sumInputs(){    
        const resultElement = document.getElementById("RESULT");
        const number1 = document.getElementById("I1");
        const number2 = document.getElementById("I2");

        /*4. Validate the values in the input fields. The input should only accept numbers. If the
        input is not a number, set the input box’s borders to color #D40404.*/        
        //validation function line 90
        if (validInputs(number1, number2, resultH2)){
            let sum = parseFloat(number1.value) + parseFloat(number2.value);
            resultElement.textContent = "RESULT IS " + sum;
        }        
    }


//Append all elements in the main TAG
    mainElement.appendChild(input1);
    mainElement.appendChild(plusSign);
    mainElement.appendChild(input2);
    mainElement.appendChild(button);
    mainElement.appendChild(resultH2);


/*4. Validate the values in the input fields. The input should only accept numbers. If the
input is not a number, set the input box’s borders to color #D40404.*/
    function validInputs(N1, N2, result){
        //N1 - INPUT1 - ElementID I1
        //N1 - INPUT2 - ElementID I2
        let valid = true;
        if (isNaN(parseFloat(N1.value))){
            N1.style.borderColor = "#D40404";
            result.textContent = "Number 1 is invalid!";
            valid = false;
        } 

        if (isNaN(parseFloat(N2.value))){
            N2.style.borderColor = "#D40404";
            result.textContent = "Number 2 is invalid!";
            valid = false;
        } 

        if (valid) {
            N1.style.borderColor = "black";
            N2.style.borderColor = "black";
            result.style.color = "#2694C3";
        } else {
            result.style.color = "#D40404";
        }

        return valid;
    }

//5. Add style to at least two other elements in your page.
    button.style.borderRadius = "5px";
    button.style.padding = "10px";
    button.style.marginLeft = "5px";
    //reference - https://www.rapidtables.com/web/color/RGB_Color.html
    button.style.backgroundColor = "#2694C3"

    input1.style.borderRadius = "5px";
    input1.style.padding = "10px";
    input1.style.textAlign = "right";        

    input2.style.borderRadius = "5px";
    input2.style.padding = "10px";
    input2.style.textAlign = "right";

    resultH2.style.color = "#2694C3";


