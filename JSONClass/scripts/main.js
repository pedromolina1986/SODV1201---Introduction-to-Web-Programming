const jsonnContainer = document.getElementById("json-container");

$(function(){
    
    const $jsonContainer = $("#json-container");    

    const json = fetch("./data/data.json")
    .then(response => {
        console.log(response)
        if (!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }                   
        return response.json();
    })
    .then(data => {
        console.log(data);        
        //call a function to display data
        displayCards(data);
    })
    
    //lets define a function to display data on the screen
    function displayCards(data) {        
        $jsonContainer.empty(); // Clear previous content
        data.forEach(item => {
            const card = $( `
                <div id="card${item.id}">
                    <h2>${item.firstName} ${item.lastName}</h2>
                    <p>Age: ${item.id}</p>
                    <p>City: ${item.country}</p>
                </div>
            `);            
            $jsonContainer.append(card);
            card.css({
                "background-color": item.color, 
                "border": "1px solid black",
                "padding": "10px",
                "margin": "10px",
                "border-radius": "5px",
                "background-color": item.country.toUpperCase() === "CANADA" ? "red" : "lightgreen"
            });
        });

    }

})