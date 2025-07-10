//APP Structure

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
            <h1 id="home">HOME</h1>
            <p>This is the main content area.</p>            
            <p>This is the second paragraph.</p>            
        </main>`
    );
}

function App() {
    return (
        "<div> " + 
            navigationBar() + 
            mainContent() + 
            delayedImage()+
            footer() + 
        "</div>"        
    );
}
// Render the App component to the DOM
const rootElement = document.getElementById("root");                
rootElement.innerHTML = ""; // Clear any existing content
rootElement.innerHTML = App(); // Render the App component

//functions HOME
function goHome() {
    rootElement.innerHTML = App();
}

function delayedImage() {
    setTimeout(() => {    
        // Check if the element with id "home" exists before appending the image
        if (document.getElementById("home")) {
            const imgDelayed = "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Homer-Simpson.The-Simpsons.webp";
            const imgElement = document.createElement("img");
            imgElement.alt = "Homer Simpson";    
            const mainContent = document.getElementById("main-content");
            mainContent.appendChild(imgElement); // Append the image to the main element
            imgElement.src = imgDelayed;
        } 
    }, 10000); // 10 seconds delay
    return "";
}