$(document).ready(function(){
    let email = $("#email");
    let charName = $("#charName")    
    let checkBox = $("#defaultCheck")
    let signUp = $("#signUp")
    let login = $("#login")

    // trying to route to logIn page
    $(login).on("submit", goToLogin)
    
    function goToLogin(){
        return location.replace("/login")
    }
    // -----------------------------------

    $(signUp).on("submit", submitUser)
   
    let userId;
    let character;

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
            userId = res.id
            character = res.characterName

           setStorage();
            
        })
        
        function setStorage() {
        window.localStorage.setItem("id", userId)
        window.localStorage.setItem("characterName", JSON.stringify(character))
        location.replace("/profile")
        }
    }




})