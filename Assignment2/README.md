# SODV1201 - INTRODUTCION TO WEB DEVELOPMENT
Assignment 2
Student: Pedro Molina - 467777
Date: 2025-07-30

# Instructions:     
    
    Packages: npm, express and axios.
        Installation following this order:
        node: install node 22.17.0 or higher
        npm: npm init -y
        express: rootpath/ npm install express 
        axios: rootpath/ npm install axios
    
    To Execute: AFTER packages installation go to the root path of the project and then execute on terminal node server.js and open the browser on http://localhost:3000
    
# References: 
    Chatgpt: To understand WHY axios is better than fetch and to generate H1 element with images.
    Style: https://tailwindcss.com

# Observations:
    1 - Created a Tailwind-styled page to provide a polished user experience.
    2 - Built server-side services that dynamically inject HTML into index.html for smooth user flow.
    3 - Implemented local storage caching for currencies to prevent redundant API calls.

# .env
Pleas insert a .env file in the roothpath called .env with the following constants

WEATHER_API_KEY= {YOUR KEY}

WEATHER_API_BASEURL=http://api.weatherapi.com/v1

CURRENCY_API_KEY= {YOUR KEY}

CURRENCY_API_BASEURL=http://api.weatherapi.com/v1

You can generate your key int following the documentation of each API

# WATHER API DOCUMENTATION
https://www.weatherapi.com/docs/
https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2
https://www.weatherapi.com/api-explorer.aspx

# CURRENCY API
https://freecurrencyapi.com/
https://freecurrencyapi.com/docs

