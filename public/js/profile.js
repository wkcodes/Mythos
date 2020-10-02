$(document).ready(function(){
    let mythTitle = $("#title");
    let mythBody = $("#body");
    let myth = $("#myth")
    let userID = 1; //populate this with actual user id. Maybe get from local storage. 
  
    $(myth).on("submit", handleFormSubmit);

    $.ajax({
      url: `/api/myths/:${userID}`, //this will be the api route for the user. /api/myths/:userID (this will be route in the server)
      method: "GET"
    }).then(res => {
  // Once that is complete and a response returns then append to card container the most recent post
      // api should respond with newly entered post. 
      // create for loop to go through responses.

      for(let i = 0; i < res.length; i++){

        let card = $("<div class='card' style='width: 100%;'></div")
        let cardBody = $("<div class='card-body'></div")
        let cardTitle = $(`<h5 class='card-title'>${res[i].title}</h5>`)
        let cardText = $(`<p class='card-text'>${res[i].body}</p>`)
      
        card.append(cardBody)
        cardBody.append(cardTitle + cardText)

      $("#myMyths ul").prepend(`<li>${card}</li>`)
    }
    })

    

    function handleFormSubmit(event) {
        event.preventDefault();
        // take myth info (user ID, Title, and body) and POST to db
        if (!mythTitle.val().trim() || !mythBody.val().trim()) {
            return;
          }
          var newPost = {
            userID: userID, 
            title: mythTitle.val().trim(),
            body: mythBody.val().trim(),
          };  

          $.ajax({
            url: "/api/myths", //this will be the api route for myths.
            method: "POST",
            data: newPost
          }).then(res => {
        // Once that is complete and a response returns then append to card container the most recent post
            // api should respond with newly entered post. 
            
            let card = $("<div class='card' style='width: 100%;'></div")
            let cardBody = $("<div class='card-body'></div")
            let cardTitle = $(`<h5 class='card-title'>${res.title}</h5>`)
            let cardText = $(`<p class='card-text'>${res.body}</p>`)
          
            card.append(cardBody)
            cardBody.append(cardTitle + cardText)
    
          $("#myMyths ul").prepend(`<li>${card}</li>`)
          })


    } 
})