$(document).ready(function(){
    let mythTitle = $("#title");
    let mythBody = $("#body");
    let myth = $("#myth")
    let userId = JSON.parse(window.localStorage.getItem("id")); //populate this with actual user id. Maybe get from local storage. 
    let welcome = $("#welcome");
    let charName = JSON.parse(window.localStorage.getItem("characterName"))
    console.log(charName)
    welcome.append(`Welcome ${charName} tell us your story`)

    $(myth).on("submit", handleFormSubmit);

    $.ajax({
      url: `/api/myths/${userId}`,
      method: "GET"
    }).then(res => {
  // Once that is complete and a response returns then append to card container the most recent post
      // api should respond with newly entered post. 
      // create for loop to go through responses.
      console.log(res)

      
      for(let i = 0; i < res.length; i++){
        let cardSize = $("<div class='col-md-6'></div>")
        let card = $("<div class='card' style='width: 100%;'></div")
        let cardBody = $("<div class='card-body'></div")
        let cardTitle = $(`<h5 class='card-title'>${res[i].title}</h5>`)
        let cardText = $(`<p class='card-text'>${res[i].body}</p>`)

        cardBody.append(cardTitle)
        cardBody.append(cardText)
        card.append(cardBody)
        cardSize.append(card)
        
      $("#myMyths").prepend(cardSize)
    }
    })

    

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
            url: "/api/myths", //this will be the api route for myths.
            data: newPost
          }).then(res => {
        // Once that is complete and a response returns then append to card container the most recent post
            // api should respond with newly entered post. 
            console.log(res)

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