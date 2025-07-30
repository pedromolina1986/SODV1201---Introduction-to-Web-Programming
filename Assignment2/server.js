const express = require('express');

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

// Serve static HTML form
app.get('/', async (req, res) => {
  try {
    let selectOption = () => '';

    if (!cachedCurrencies) {
      // Fetch from API
      const url = `${process.env.CURRENCY_API_BASEURL}/currencies?apikey=${process.env.CURRENCY_API_KEY}`;
      const response = await axios.get(url);
      const currencies = response.data.data;
      // cache for future use
      cachedCurrencies = currencies; 
    }

    // Function to generate <option> elements from currencies
    selectOption = () => {
      const currencies = cachedCurrencies;
      let options = '';

      // Turn into sortable array
      const listOfCurrencies = Object.entries(currencies).map(([code, data]) => ({
        code,
        name: data.name,
        symbol: data.symbol,
      }));

      // Sort alphabetically by name
      listOfCurrencies.sort((a, b) => a.name.localeCompare(b.name));

      // Create options
      for (const currency of listOfCurrencies) {
        options += `<option value="${currency.code}">${currency.name} (${currency.symbol})</option>`;
      }

      return options;
    };

    // Render page
    res.send(`
      <h1>Weather App</h1>
      <form action="/weather" method="get">
        <input type="text" name="city" placeholder="Enter city" required />
        <button type="submit">Get Weather</button>
      </form>

      <h1>Currency App</h1>
      <form action="/currency" method="get">
        <label for="currency_from">Currency from</label>
        <select name="currency_from">${selectOption()}</select>            
        <label for="currency_to">to</label>
        <select name="currency_to">${selectOption()}</select>            
        <button type="submit">Get Currency</button>
      </form>
    `);
  } catch (err) {
    res.send(`<p>Error fetching currencies: ${err.response?.data?.message || err.message}</p><a href="/">Try again</a>`);
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

        res.send(`
            <h2>Weather in ${data.location.name} - ${data.location.region} - ${data.location.country} - ${data.location.localtime}</h2>
            <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <a href="/">Search again</a>
        `);
    } catch (err) {
        res.send(`<p>Error fetching weather for "${city}": ${err.response?.data?.message || err.message}</p><a href="/">Try again</a>`);
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

        res.send(`
            <h2>Currency of ${currency_from} => ${currency_to} = ${data[currency_to]}</h2>      
            <a href="/">Search again</a>
        `);
    } catch (err) {
        res.send(`<p>Error fetching currency": ${err.response?.data?.message || err.message}</p><a href="/">Try again</a>`);
    }
});

//http server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
