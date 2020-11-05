$(document).ready(function () {

    let login = $("#login")
    $(login).on("submit", goToProfile)

})



function goToProfile(event) {
    event.preventDefault();
    let email = $("#email").val().trim()
    let charName = $("#charName").val().trim()

    $.ajax({
        url: '/api/login',
        method: "POST",
        data: {
            "email": email,
            "characterName": charName
        }
    }).then(res => {
        console.log(res)
        location.replace("/profile")
       
    }).catch((err) => {
        $("#error").text(err.responseJSON.message)
       console.log(err.responseJSON.message)
    })


}