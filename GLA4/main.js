/*
* @Author: Pedro Molina
* @StudentID: 467777
* @Date: 2025-07-18

*/
// Tip: enable word-wrap to better visualize this document. (Alt+Z by default)

// This is your data JSON. It contains student information ("name", "grade", "likes: animal/fruit/colour"). ALL of this information must be displayed on your webpage.
const dataJson = [{ "name": "Siobhan Keesling", "grade": 6, "likes": { "animal": "Dogs", "fruit": "Pears", "color": "Red" } }, { "name": "Stevie Fonte", "grade": 1, "likes": { "animal": "Cats", "fruit": "Apples", "color": "Red" } }, { "name": "Janita Ricca", "grade": 10, "likes": { "animal": "Rabbits", "fruit": "Mangos", "color": "Red" } }, { "name": "Yadira Geno", "grade": 10, "likes": { "animal": "Dogs", "fruit": "Bananas", "color": "Red" } }, { "name": "Scotty Penland", "grade": 1, "likes": { "animal": "Horses", "fruit": "Apples", "color": "Blue" } }, { "name": "Latricia Glassford", "grade": 6, "likes": { "animal": "Horses", "fruit": "Pears", "color": "Blue" } }, { "name": "Merrilee Bettencourt", "grade": 4, "likes": { "animal": "Rabbits", "fruit": "Pears", "color": "Blue" } }, { "name": "Leigha Ezzell", "grade": 8, "likes": { "animal": "Dogs", "fruit": "Bananas", "color": "Blue" } }, { "name": "Rosana Embry", "grade": 12, "likes": { "animal": "Cats", "fruit": "Mangos", "color": "Green" } }, { "name": "Carmine Altschuler", "grade": 2, "likes": { "animal": "Cats", "fruit": "Apples", "color": "Green" } }, { "name": "Holli Mogensen", "grade": 3, "likes": { "animal": "Horses", "fruit": "Orange", "color": "Green" } }, { "name": "Reynalda Isreal", "grade": 7, "likes": { "animal": "Dogs", "fruit": "Pears", "color": "Green" } }, { "name": "Nathanael Berends", "grade": 12, "likes": { "animal": "Cats", "fruit": "Mangos", "color": "Green" } }, { "name": "Angelyn Kapoor", "grade": 8, "likes": { "animal": "Dogs", "fruit": "Bananas", "color": "Teal" } }, { "name": "Laverne Charrier", "grade": 3, "likes": { "animal": "Rabbits", "fruit": "Orange", "color": "Teal" } }, { "name": "Lizzie Cran", "grade": 10, "likes": { "animal": "Horses", "fruit": "Mangos", "color": "Teal" } }, { "name": "Latonya Burroughs", "grade": 4, "likes": { "animal": "Dogs", "fruit": "Orange", "color": "Pink" } }, { "name": "Hugh Whiteford", "grade": 8, "likes": { "animal": "Rabbits", "fruit": "Bananas", "color": "Pink" } }, { "name": "Stephaine Osei", "grade": 4, "likes": { "animal": "Horses", "fruit": "Orange", "color": "Pink" } }, { "name": "Nery Poyer", "grade": 3, "likes": { "animal": "Dogs", "fruit": "Apples", "color": "Pink" } }]

/********************* Write your code below this line *********************/
// GLA 4:
// Use the methods we learned in class to dynamically create and display HTML elements.
// You may use the starter HTML code, but do not create HTML elements manually.

//create the structure of the page
//the page will have a header, a form area, and a student display area
//after creating the structure, we will add the form and display the students
$(() => {

    //Create a header for the page
    $("body").append('<h1>GLA 4 - Dynamic jQuery</h1>');
    //create form area
    $("body").append('<div id="form-area"></div>');
    //create sutednt display area
    $("body").append('<div id="student-display"></div>');
    
    addStudentForm();
    displayStudents();
}) 

// 1. Using jQuery and loops, create a webpage that displays the students' information on the screen.
function displayStudents() {
    $(function() {
        // Loop through each student in the dataJson array
        dataJson.forEach(student => {
            // Call the function to add each student to the display
            addStudent(student.name, student.grade, student.likes.animal, student.likes.fruit, student.likes.color);
        })
            
    });      
};

function addStudent(name, grade, animal, fruit, color, prepend = false) {
    // Create a container for each student
    const studentCard = $('<div class="student-card"></div>');

    // 1a) The grade number must be bolded.
    const nameElement = $(`<h2>${name}</h2>`);
    studentCard.append(nameElement);

    // Create and append the student's grade, bolded
    const gradeElement = $(`<p><strong>Grade: ${grade}</strong></p>`);
    studentCard.append(gradeElement);

    // 1b) The animals they like must be underlined.
    const animalElement = $(`<p>Likes Animal: <span style="text-decoration: underline;">${animal}</span></p>`);
    studentCard.append(animalElement);

    // Create and append the fruit they like
    const fruitElement = $(`<p>Likes Fruit: ${fruit}</p>`);
    studentCard.append(fruitElement);

    // 1c) The colour they like must have a style matching that colour. Either the background color or text colour should match it. Only apply this style to the text of their color. Ex.: "Red" should be written in red.
    const colorStyle = `color: ${color.toLowerCase()};`;
    const colorElement = $(`<p>Likes Color: <span style="${colorStyle}">${color}</span></p>`);
    studentCard.append(colorElement);

    // The information must be organized and it should be easy to identify where each student's information begins and ends. You may add extra information to each student if you want.
    // You can create tables, paragraphs, student cards...your choice! Let's give some style to the page!
    studentCard.css({
        'border': '1px solid #ccc', 
        'border-radius': '5px',
        'padding': '10px',
        'margin': '10px 0',
        'background-color': '#f9f9f9',
        'box-shadow': `0 2px 5px ${color.toLowerCase()}`,
        'transition': 'box-shadow 0.3s ease'
    });

    // 2.a) An element, when clicked, deletes the corresponding student from the page (one for each student).        
    const deleteButton = $(`<button class="delete-button">Delete</button>`);
    deleteButton.on('click', function() {
        // Remove the student card from the DOM
        studentCard.fadeOut(400, function() {
            $(this).remove();
        });
    });

    // 2. Add one of these two functionalities:
    // 2.b) An element, when clicked, changes the corresponding student's text style, making it look faded or adding a strikethrough effect to it AND then back to normal when clicked again (one for each student).
    const toggleStyleButton = $(`<button class="toggle-style-button">Toggle Style</button>`);
    toggleStyleButton.on('click', function() {
        // Toggle a faded style on the student card
        studentCard.toggleClass('faded');
        if (studentCard.hasClass('faded')) {
            studentCard.css('opacity', '0.5');
        } else {
            studentCard.css('opacity', '1');
        }
    });
    // Append the buttons to the student card
    studentCard.append(deleteButton);
    studentCard.append(toggleStyleButton);

    // Append the student card to the student display area
    studentCard.hide(); // Start hidden

    if (prepend) {
        // Add at top of body
        $('#student-display').prepend(studentCard);
    } else {
        $('#student-display').append(studentCard);
    }

    //5. Animation: Slide down and fade in the student card
    studentCard.slideDown(400).fadeIn(500);
};

// 3. Add a form that allows the user to enter a new student into the system.
function addStudentForm() {
    // This function is called to create the form for adding a new student
    $(function() {  
        // The form must contain: "name", "grade", "likes: an animal, a fruit, and a colour"
        const form = $('<form id="student-form"></form>');
        form.append('<h3>Add New Student</h3>');
        form.append('<label for="name">Name:</label>');
        form.append('<input type="text" id="name" name="name" required>');
        form.append('<label for="grade">Grade:</label>');
        form.append('<input type="number" id="grade" name="grade" required>');
        form.append('<label for="animal">Likes Animal:</label>');
        form.append('<input type="text" id="animal" name="animal" required>');
        form.append('<label for="fruit">Likes Fruit:</label>');
        form.append('<input type="text" id="fruit" name="fruit" required>');
        form.append('<label for="color">Likes Color:</label>');
        form.append('<input type="text" id="color" name="color" required>');
        form.append('<button type="submit">Add Student</button>');
        // 4. Add a "reset" button to reset the display, effectively reverting any changes that we make to the page.
        // This function resets the display by clearing the forn and re-displaying the students
        const resetButton = $('<button type="button" id="reset-button">Reset Display</button>');
        resetButton.on('click', function() {
            // Clear the body
            $('#student-display').empty();            
            // Re-display the students
            displayStudents();            
        });
        form.append(resetButton);


        //let's add some style to the form
        form.css({
            'border': '1px solid #ccc',
            'border-radius': '5px',
            'padding': '20px',
            'margin': '20px 0',
            'background-color': '#f9f9f9',
            'box-shadow': '0 2px 5px rgba(0, 0, 0, 0.1)',
            'width': '300px',
            'font-family': 'Arial, sans-serif',
            'font-size': '14px',
            'color': '#333',
            'transition': 'box-shadow 0.3s ease',
            'display': 'flex',
            'flex-direction': 'column',
            'gap': '10px'
        });

        //add the form to the form area
        $('#form-area').append(form);

        // Handle form submission
        form.on('submit', function(event) {

            event.preventDefault(); // Prevent the default form submission

            // Get the values from the form inputs
            const name = $('#name').val();
            const grade = $('#grade').val();
            const animal = $('#animal').val();
            const fruit = $('#fruit').val();
            const color = $('#color').val();

            //5. Animation - Fade out form, then add student, then fade it back in            
            addStudent(name, grade, animal, fruit, color, true); // Pass true to indicate it's from the form
            form[0].reset();
        
        });
    });
};


// 5. Add any kind of animation to your webpage, using jQuery.
//Let's make this border shine when hovered and then come back to the orginal state when not hovered.
$(function() {
    // Animate the student card on hover by changing the margin and box-shadow
    $(document)
    .on('mouseenter', '.student-card', function() {
        $(this).stop().animate({
            marginLeft: "10px"            
        }, 200);
    })
    .on('mouseleave', '.student-card', function() {
        $(this).stop().animate({
            marginLeft: "0px"            
        }, 200);
    });
});