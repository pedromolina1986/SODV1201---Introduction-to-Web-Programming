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
      const data = await response.json();      
      
      if (response.status >= 200 && response.status <= 399) {
        const html = `
            <div class="p-4 border rounded bg-green-50">
                <p><strong>1 ${from}</strong> ➡️ <strong>${to}</strong> = ${data[to]}</p>
            </div>
        `;
        currencyResult.innerHTML = html;
      } else {
        throw new Error(`Houston! We have a problem: ${data.Error}`);
      }            
    } catch (err) {
      currencyResult.innerHTML = `<p class="text-red-500">Error: ${err.message}</p>`;
    }
  });
});