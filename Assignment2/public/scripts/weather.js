// WEATHER HANDLER
document.addEventListener('DOMContentLoaded', () => {
  //get elements to handle
  const weatherForm = document.getElementById('weatherForm');
  const weatherResult = document.getElementById('weatherResult');

  //add event listener to change the container which contains the weather information
  weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    //set loading
    const city = document.getElementById('cityInput').value;
    weatherResult.innerHTML = `<p class="text-gray-500">Loading...</p>`;

    //call server service from weather and return the injected HTML
    try {
      const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
      const html = await response.text();
      weatherResult.innerHTML = html;
    } catch (err) {
      weatherResult.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
    }
  });
});