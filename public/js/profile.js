$(document).ready(function(){
    let mythTitle = $("#title");
    let mythBody = $("#body");
    let myth = $("#myth")
    let userID = 1; //populate this with actual user id. Maybe get from local storage. 
  
    $(myth).on("submit", handleFormSubmit);

    $.ajax({
      url: `/api/myth/${userID}`, //this will be the api route for the user. /api/myth/:userID (this will be route in the server)
      method: "GET"
    }).then(res => {
  // Once that is complete and a response returns then append to card container the most recent post
      // api should respond with newly entered post. 
      // create for loop to go through responses.
      
      $("#myMyths ul").append("<li>" + res.title + res.body + "</li>")
    })

    

    function handleFormSubmit(event) {
        event.preventDefault();
        // take myth info (user ID, Title, and body) and POST to db
        if (!mythTitle.val().trim() || !mythBody.val().trim()) {
            return;
          }
          var newPost = {
            userID: userID, 
            title: mythTitle
              .val()
              .trim(),
            body: mythBody
              .val()
              .trim(),
          };  

          $.ajax({
            url: "/api/myth", //this will be the api route for myths.
            method: "POST",
            data: newPost
          }).then(res => {
        // Once that is complete and a response returns then append to card container the most recent post
            // api should respond with newly entered post. 
            $("#myMyths ul").append("<li>" + res.title + res.body + "</li>")
          })

         

    } 
})