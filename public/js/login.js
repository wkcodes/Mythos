$(document).ready(function () {
    let email = $("#email")
    let charName = $("#charName")
    let login = $("#login")

    $.ajax({
        url: '/api/users',
        method: "GET"
    }).then(res => {
        console.log(res)

        let userId;
        let emailInput
        let charNameInput

        $(login).on("submit", goToProfile)

        function goToProfile(event) {
            event.preventDefault();
            emailInput = email.val().trim();
            charNameInput = charName.val().trim();

            console.log(emailInput);
            console.log(charNameInput)
            for (let i = 0; i < res.length; i++) {
                if (emailInput === res[i].email && charNameInput === res[i].characterName) {
                    console.log("true")
                    userId = res[i].id
                    window.localStorage.setItem("id", userId)
                    window.localStorage.setItem("characterName", JSON.stringify(charNameInput))
                }
            }


            location.replace("/profile")

        }
    })
})