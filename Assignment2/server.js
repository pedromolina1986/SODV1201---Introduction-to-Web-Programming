/*
SODV1201 - INTRODUTCION TO WEB DEVELOPMENT
Assignment 2
Student: Pedro Molina - 467777
Date: 2025-07-30

Instructions: 
    To Execute: Go to the root path of the project and then execute on terminal node server.js
    Packages: npm, express and axios.
        Installation following this order:
        npm: npm init -y
        express: rootpath/ npm install express 
        axios: rootpath/ npm install axios
    
References: 
    Chatgpt: To understand WHY axios is better than fetch and to generate H1 element with images.
    Style: https://tailwindcss.com

Observations:
    1 - Created a Tailwind-styled page to provide a polished user experience.
    2 - Built server-side services that dynamically inject HTML into index.html for smooth user flow.
    3 - Implemented local storage caching for currencies to prevent redundant API calls.
*/


const express = require('express');
const fs = require('fs');
const path = require('path');

//makes life easier for api handling :)
/*
Why Axios is often considered better than Fetch

Feature	                        Axios	Fetch API
Default JSON response parsing	✅ Automatically parses res.data         ❌ You must call res.json() manually
Request/response interceptors	✅ Built-in	                            ❌ Must implement yourself
Timeout handling	            ✅ Simple timeout: 5000	                ❌ Must use AbortController
Error handling	                ✅ Differentiates network vs HTTP        ❌ You have to check res.ok manually
Request cancellation	        ✅ Easy with CancelToken	                ⚠️ Requires AbortController
Supports older browsers	        ✅ Yes	                                ❌ No support in IE
Client/server compatibility	    ✅ Works seamlessly in Node.js	        ❌ Not native in Node, needs polyfill
Convenience features	        ✅ params, headers, JSON auto‑stringify	❌ Manual work

reference: chatGPT - Prompt: Why axios is better than fetch?
*/
const axios = require('axios');

//environment settings. In this casa basically API settings
require('dotenv').config();

const app = express();
const PORT = 3000;

// server-side cache
let cachedCurrencies = null;

app.get('/', async (req, res) => {
    try {        
        if (!cachedCurrencies) {
            //get currencies from api
            const url = `${process.env.CURRENCY_API_BASEURL}/currencies?apikey=${process.env.CURRENCY_API_KEY}`;
            const response = await axios.get(url);
            const currencies = response.data.data;

            // Turn into sortable array
            const listOfCurrencies = Object.entries(currencies).map(([code, data]) => ({
                code,
                name: data.name,
                symbol: data.symbol,
            }));

            // Sort alphabetically by name
            listOfCurrencies.sort((a, b) => a.name.localeCompare(b.name));

            cachedCurrencies = listOfCurrencies;
        }

        //build currency options for the select elements
        const buildOptions = () => {
            let options = "";
            for (const currency of cachedCurrencies) {
                options += `<option value="${currency.code}">${currency.name} (${currency.symbol})</option>`;
            }
            return options;
        };
        
        //INJECTION ON HTML WITH THE CURRENCY OPTIONS
        const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8')
            .replace('<select name="currency_from" id="currency_from" class="w-full px-4 py-2 border rounded">',
                `<select name="currency_from" id="currency_from" class="w-full px-4 py-2 border rounded">${buildOptions()}`)
            .replace('<select name="currency_to" id="currency_to" class="w-full px-4 py-2 border rounded">',
                `<select name="currency_to" id="currency_to" class="w-full px-4 py-2 border rounded">${buildOptions()}`);

        res.send(html);

    } catch (err) {
        res.send(`<p>Error loading currencies: ${err.message}</p><a href="/">Try again</a>`);
    }
});


// Handle weather API call
app.get('/weather', async (req, res) => {

    //get all the important data from the request
    const city = req.query.city || 'Calgary';
    const apiKey = process.env.WEATHER_API_KEY;

    try {
        const url = `${process.env.WEATHER_API_BASEURL}/current.json?q=${encodeURIComponent(city)}&aqi=no&key=${apiKey}`;
        const response = await axios.get(url);
        const data = response.data;
        
        res.json(data);

    } catch (err) {
        res.status(401).json({ Error: err.response?.data?.message || err.message });
    }
});

// Handle currency API call
app.get('/currency', async (req, res) => {
    const currency_from = req.query.currency_from || 'CAD';
    const currency_to = req.query.currency_to || 'USD';
    const apiKey = process.env.CURRENCY_API_KEY;

    try {
        const url = `${process.env.CURRENCY_API_BASEURL}/latest?apikey=${apiKey}&base_currency=${currency_from}&currencies=${currency_to}`;
        const response = await axios.get(url);
        const data = response.data.data;

        res.json(data);

    } catch (err) {
        res.status(401).json({ Error: err.response?.data?.message || err.message });
    }
});

app.use(express.static('public'));

//http server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
