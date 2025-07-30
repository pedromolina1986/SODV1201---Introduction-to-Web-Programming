//CURRENCY HANDLER
document.addEventListener('DOMContentLoaded', () => {
  //get elements to handle
  const currencyForm = document.getElementById('currencyForm');
  const currencyResult = document.getElementById('currencyResult');

  //add event listener to change the container which contains the currency information
  currencyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    //set loading
    const from = document.getElementById('currency_from').value;
    const to = document.getElementById('currency_to').value;
    currencyResult.innerHTML = `<p class="text-gray-500">Loading...</p>`;

    //call server service from weather and return the injected HTML as a result
    try {
      const response = await fetch(`/currency?currency_from=${from}&currency_to=${to}`);
      const html = await response.text();
      currencyResult.innerHTML = html;
    } catch (err) {
      currencyResult.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
    }
  });
});