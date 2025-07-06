function MarkToGrade() {
    const app = document.getElementById("main-content");
    app.innerHTML = ""; // Clear any existing content   

    const input = document.createElement("input");
    input.type = "text";
    input.id = "mark-input-box";
    input.placeholder = "Enter mark (0-100)";

    const button = document.createElement("button");
    button.textContent = "Get Grade";
    button.onclick = MarkToGradeConverter;

    const validationMessage = document.createElement("p");
    validationMessage.id = "validationmessage";

    const gradeOutput = document.createElement("p");
    gradeOutput.id = "grade-output";

    app.appendChild(input);
    app.appendChild(button);
    app.appendChild(validationMessage);
    app.appendChild(gradeOutput);
}

function MarkToGradeConverter() {    

    const inputElement = document.getElementById("mark-input-box");
    const messageElement = document.getElementById("validationmessage");
    const gradeOutput = document.getElementById("grade-output");

    let rawMark = inputElement.value.trim();
    let mark = parseInt(rawMark, 10);

    // Clear previous outputs
    messageElement.textContent = '';
    gradeOutput.textContent = '';

    // Check for empty input
    if (rawMark === '') {
        messageElement.textContent = "Please enter a mark.";
        return;
    }

    // Check if mark is a number
    if (isNaN(mark)) {
        messageElement.textContent = "The mark must be a number (e.g., 85).";
        return;
    }

    // Check if mark is negative
    if (mark < 0) {
        messageElement.textContent = "The mark cannot be negative.";
        return;
    }

    // Check if mark is over 100
    if (mark > 100) {
        messageElement.textContent = "The mark cannot be greater than 100.";
        return;
    }

    // Check for decimal numbers
    if (rawMark.includes('.') || parseFloat(rawMark) !== mark) {
        messageElement.textContent = "The mark must be a whole number.";
        return;
    }

    // Convert mark to grade
    let grade = '';
    if (mark >= 90) {
        grade = 'A';
    } else if (mark >= 80) {
        grade = 'B';
    } else if (mark >= 70) {
        grade = 'C';
    } else if (mark >= 60) {
        grade = 'D';
    } else if (mark >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    // Display the grade
    gradeOutput.textContent = `Grade: ${grade}`;
}