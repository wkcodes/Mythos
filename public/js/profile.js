$(document).ready(function(){

  

        

  
    let mythTitle = $("#title");
    let mythBody = $("#body");
    let myth = $("#myth")
    

    $(myth).on("submit", handleFormSubmit);

    

    function handleFormSubmit(event) {
        event.preventDefault();
        // take myth info (user ID, Title, and body) and POST to db
        if (!mythTitle.val().trim() || !mythBody.val().trim()) {
            return;
          }
          var newPost = {
            userId: userId, 
            title: mythTitle.val().trim(),
            body: mythBody.val().trim(),
          };
          $.ajax({
            method: "POST",
            url: "/api/profile", //this will be the api route for myths.
            data: newPost
          }).then(res => {
        // Once that is complete and a response returns then append to card container the most recent post
            // api should respond with newly entered post. 

            let cardSize = $("<div class='col-md-6'></div>")
            let card = $("<div class='card' style='width: 100%;'></div")
            let cardBody = $("<div class='card-body'></div")
            let cardTitle = $(`<h5 class='card-title'>${res.title}</h5>`)
            let cardText = $(`<p class='card-text'>${res.body}</p>`)
    
            cardBody.append(cardTitle)
            cardBody.append(cardText)
            card.append(cardBody)
            cardSize.append(card)
            
          $("#myMyths").prepend(cardSize)
          })


    } 
})