/*
SODV1201 - INTRODUTCION TO WEB DEVELOPMENT
Assignment 2
Student: Pedro Molina - 467777
Date: 2025-07-30

Instructions: 
    To Execute: Go to the root path of the project and then execute on terminal node server.js
    Packages: npm, express and axios.
        Installation following this order:
        node: Install node 22.17.0 or higher
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
    4 - I decided to create a server-side cache because I had never done it before, and it makes sense for this kind of application, 
    in my opinion, since the requests will always be the same regardless of who is making them.
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
let cachedCurrencies = { currencies: [], dateTime: null };
let cachedQuotation = [];
let cachedWeather = [];
//5 minutes cache
const cacheTime = 5 * 60 * 1000; 

app.get('/', async (req, res) => {
    try {
        const now = Date.now();
        //check cache
        if (!cachedCurrencies || cachedCurrencies.currencies.length == 0 || now - cachedCurrencies.timestamp > cacheTime) {
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

            cachedCurrencies.currencies = listOfCurrencies;
            cachedCurrencies.dateTime = now;
        }

        //build currency options for the select elements
        const buildOptions = () => {
            let options = "";
            for (const currency of cachedCurrencies.currencies) {
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

    try {
        //get all the important data from the request
        const city = req.query.city || 'Calgary';
        const apiKey = process.env.WEATHER_API_KEY;

        //check cache
        //look for the recor on cache
        let indexCache = cachedWeather?.findIndex(f => f.city === city && Date.now() - f.dateTime <= cacheTime);
        
        if (cachedWeather.length === 0 || indexCache < 0) {
            const url = `${process.env.WEATHER_API_BASEURL}/current.json?q=${encodeURIComponent(city)}&aqi=no&key=${apiKey}`;
            const response = await axios.get(url);
            data = response.data;

            //store in cache
            indexCache = cachedWeather?.findIndex(f => f.city === city);
            if (indexCache < 0) {
                cachedWeather.push({ city: city, data: data, dateTime: Date.now() });
            } else {
                cachedWeather[indexCache].dateTime = Date.now();
                cachedWeather[indexCache].data = data;
            }

            res.json(data);
        } else {
            //get from cache
            res.json(cachedWeather[indexCache].data);
        }

    } catch (err) {
        res.status(401).json({ Error: err.response?.data?.message || err.message });
    }
});

// Handle currency API call
app.get('/currency', async (req, res) => {
    try {
        const currency_from = req.query.currency_from || 'CAD';
        const currency_to = req.query.currency_to || 'USD';
        const apiKey = process.env.CURRENCY_API_KEY;

        //check cache
        //look for the recor on cache
        let indexCache = cachedQuotation?.findIndex(f => f.currency_from === currency_from && f.currency_to === currency_to && Date.now() - f.dateTime <= cacheTime);
        
        if (cachedQuotation.length === 0 || indexCache < 0) {
            const url = `${process.env.CURRENCY_API_BASEURL}/latest?apikey=${apiKey}&base_currency=${currency_from}&currencies=${currency_to}`;
            const response = await axios.get(url);
            const data = response.data.data;

            //store in cache
            indexCache = cachedQuotation?.findIndex(f => f.currency_from === currency_from && f.currency_to === currency_to);
            if (indexCache < 0) {
                cachedQuotation.push({currency_from: currency_from, currency_to: currency_to, data: data, dateTime: Date.now()})
            } else {
                cachedQuotation[indexCache].data = data;
                cachedQuotation[indexCache].dateTime = Date.now();
            }

            res.json(data);
        } else {
            //get from cache
            res.json(cachedQuotation[indexCache].data);
        }

    } catch (err) {
        res.status(401).json({ Error: err.response?.data?.message || err.message });
    }
});

app.use(express.static('public'));

//http server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
