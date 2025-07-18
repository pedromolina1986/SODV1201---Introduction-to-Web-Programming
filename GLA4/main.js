/*
* @Author:
* @StudentID:
* @Date: optional
* @Description: optional
*/
// Tip: enable word-wrap to better visualize this document. (Alt+Z by default)

// This is your data JSON. It contains student information ("name", "grade", "likes: animal/fruit/colour"). ALL of this information must be displayed on your webpage.
const dataJson = [{"name":"Siobhan Keesling","grade":6,"likes":{"animal":"Dogs","fruit":"Pears","color":"Red"}},{"name":"Stevie Fonte","grade":1,"likes":{"animal":"Cats","fruit":"Apples","color":"Red"}},{"name":"Janita Ricca","grade":10,"likes":{"animal":"Rabbits","fruit":"Mangos","color":"Red"}},{"name":"Yadira Geno","grade":10,"likes":{"animal":"Dogs","fruit":"Bananas","color":"Red"}},{"name":"Scotty Penland","grade":1,"likes":{"animal":"Horses","fruit":"Apples","color":"Blue"}},{"name":"Latricia Glassford","grade":6,"likes":{"animal":"Horses","fruit":"Pears","color":"Blue"}},{"name":"Merrilee Bettencourt","grade":4,"likes":{"animal":"Rabbits","fruit":"Pears","color":"Blue"}},{"name":"Leigha Ezzell","grade":8,"likes":{"animal":"Dogs","fruit":"Bananas","color":"Blue"}},{"name":"Rosana Embry","grade":12,"likes":{"animal":"Cats","fruit":"Mangos","color":"Green"}},{"name":"Carmine Altschuler","grade":2,"likes":{"animal":"Cats","fruit":"Apples","color":"Green"}},{"name":"Holli Mogensen","grade":3,"likes":{"animal":"Horses","fruit":"Orange","color":"Green"}},{"name":"Reynalda Isreal","grade":7,"likes":{"animal":"Dogs","fruit":"Pears","color":"Green"}},{"name":"Nathanael Berends","grade":12,"likes":{"animal":"Cats","fruit":"Mangos","color":"Green"}},{"name":"Angelyn Kapoor","grade":8,"likes":{"animal":"Dogs","fruit":"Bananas","color":"Teal"}},{"name":"Laverne Charrier","grade":3,"likes":{"animal":"Rabbits","fruit":"Orange","color":"Teal"}},{"name":"Lizzie Cran","grade":10,"likes":{"animal":"Horses","fruit":"Mangos","color":"Teal"}},{"name":"Latonya Burroughs","grade":4,"likes":{"animal":"Dogs","fruit":"Orange","color":"Pink"}},{"name":"Hugh Whiteford","grade":8,"likes":{"animal":"Rabbits","fruit":"Bananas","color":"Pink"}},{"name":"Stephaine Osei","grade":4,"likes":{"animal":"Horses","fruit":"Orange","color":"Pink"}},{"name":"Nery Poyer","grade":3,"likes":{"animal":"Dogs","fruit":"Apples","color":"Pink"}}]

/********************* Write your code below this line *********************/
// GLA 4: 
// Use the methods we learned in class to dynamically create and display HTML elements.
// You may use the starter HTML code, but do not create HTML elements manually.

// 1. Using jQuery and loops, create a webpage that displays the students' information on the screen.
    // 1a) The grade number must be bolded.
    // 1b) The animals they like must be underlined.
    // 1c) The colour they like must have a style matching that colour. Either the background color or text colour should match it. Only apply this style to the text of their color. Ex.: "Red" should be written in red.
    // The information must be organized and it should be easy to identify where each student's information begins and ends. You may add extra information to each student if you want.
    // You can create tables, paragraphs, student cards...your choice!

// 2. Add one of these two functionalities:
    // 2.a) An element, when clicked, deletes the corresponding student from the page (one for each student).
    // 2.b) An element, when clicked, changes the corresponding student's text style, making it look faded or adding a strikethrough effect to it AND then back to normal when clicked again (one for each student).

// 3. Add a form that allows the user to enter a new student into the system.
    // The form must contain: "name", "grade", "likes: an animal, a fruit, and a colour"

// 4. Add a "reset" button to reset the display, effectively reverting any changes that we make to the page.

// 5. Add any kind of animation to your webpage, using jQuery.
