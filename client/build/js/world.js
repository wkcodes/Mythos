$(document).ready(function(){

  $.ajax({
    url: "/api/myths",
    method: "GET"
  }).then(res =>{
    console.log(res)
    for(let i = 0; i < res.length; i++){
      let cardDeck = $("<div class='col mb-4'></div>")
      let card = $("<div class='card text-center' style='width: 18rem'></div>")
      let cardBody = $("<div class='card-body'></div>")
      let userName = $(`<h5>${res[i].user.characterName}:</h5>`)
      let cardTitle = $(`<p class='card-text'>${res[i].title}</p>`)
      let cardText = $(`<p class='card-text'>${res[i].body}</p>`)

      cardBody.append(userName)
      cardBody.append(cardTitle)
      cardBody.append(cardText)
      card.append(cardBody)
      cardDeck.append(card)
      
      $("#allMyths").append(cardDeck)
    }
    
  })

})