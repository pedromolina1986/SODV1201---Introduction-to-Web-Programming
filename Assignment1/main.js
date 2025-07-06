
function navigationBar() {
    return (
        `<li class="navigation-bar">
            <ul class="nav-list">
                <li><a href="javascript:void(0)" onclick="goHome()">Home</a></li>
                <li><a href="javascript:void(0)" onclick="MarkToGrade()">Mark To Grade</a></li>
                <li><a href="javascript:void(0)" onclick="showStaff()">Staff</a></li>
                <li><a href="javascript:void(0)" onclick="showTemperatureConverter()">Temperature Converter</a></li>
            </ul>
        </li>`
    );
}
function footer() {
    return (
        `<footer>
            <p>&copy; 2025 My Website</p>
        </footer>`
    );
}
function mainContent() {
    return (
        `<main id="main-content">
            <h1>Welcome to My Website</h1>
            <p>This is the main content area.</p>
        </main>`
    );
}

function App() {
    return (
        "<div> " + 
            navigationBar() + 
            mainContent() + 
            footer() + 
        "</div>"        
    );
}
// Render the App component to the DOM
const rootElement = document.getElementById("root");                
rootElement.innerHTML = ""; // Clear any existing content
rootElement.innerHTML = App(); // Render the App component