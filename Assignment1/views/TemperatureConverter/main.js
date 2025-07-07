function showTemperatureConverter(){
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = ""; // Clear any existing content
    rootElement.innerHTML = TemperatureConverter(); // Render the Temperature Converter component
}

function TemperatureConverter() {}