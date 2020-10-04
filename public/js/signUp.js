$(document).ready(function(){
    let email = $("#email");
    let charName = $("#charName")    
    let checkBox = $("#defaultCheck")
    let signUp = $("#signUp")
    
    $(signUp).on("submit", submitUser)
    
    function submitUser(event) {
        event.preventDefault();

        if(!email.val().trim() && !charName.val().trim() && checkBox.checked === false){
            return;
        }

        let newUser = {
            characterName: charName.val().trim(),
            email: email.val().trim(),
        }

        $.ajax({
            method: "POST",
            url: "/api/users",
            data: newUser
        }).then(res => {
            console.log(res.id)
            let userId = res.id
            let character = res.characterName

            window.localStorage.setItem("id", userId)
            JSON.stringify(window.localStorage.setItem("characterName", character))
        })

        location.replace("/profile")
    }




})