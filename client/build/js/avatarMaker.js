$(document).ready(function(){
    // in that card create a button to create avatar

    const createAvatar = $("#createAvatar")
    const avatarImg = $("#avatar")
    const avatarModal = $("#avatarModal")
    const human = "../images/templates/Races/human/Base-human.png"
    const elf = "../images/templates/Races/elf/Base-elf.png"
    const dwarf = "../images/templates/Races/dwarf/Base-dwarf.png"
    const humanBow = "../images/templates/Races/human/human-bow-and-quiver.png"
    const humanSword = "../images/templates/Races/human/human-sword.png"
    const humanAxe = "../images/templates/Races/human/human-axe.png"
    const elfBow = "../images/templates/Races/elf/elf-bow-and-quiver.png"
    const elfAxe = "../images/templates/Races/elf/elf-axe.png"
    const elfSword = "../images/templates/Races/elf/elf-sword.png"
    const dwarfBow = "../images/templates/Races/dwarf/dwarf-bow-and-quiver.png"
    const dwarfAxe = "../images/templates/Races/dwarf/dwarf-axe.png"
    const dwarfSword = "../images/templates/Races/dwarf/dwarf-sword.png"

    createAvatar.on("click", function(){
        avatarModal.removeClass("hidden")
    })

    avatarImg.on("click", function() {
        avatarImg.addClass("hidden")
        createAvatar.removeClass("hidden")
    })

    let imgArray = []

    $(".avatarBtn").click(function () {
        switch ($(this).attr("id")) {
            case "human":
                $("#human").addClass("btnSelected")
                $("#modalPage1").addClass("hidden")
                $("#modalPage2").removeClass("hidden")
                $("#elf").removeClass("btnSelected")
                $("#dwarf").removeClass("btnSelected")
                imgArray.push(human)
                break;
            case "elf":
                $("#elf").addClass("btnSelected")
                $("#modalPage1").addClass("hidden")
                $("#modalPage2").removeClass("hidden")
                $("#human").removeClass("btnSelected")
                $("#dwarf").removeClass("btnSelected")
                imgArray.push(elf)
                break;
            case "dwarf":
                $("#dwarf").addClass("btnSelected")
                $("#modalPage1").addClass("hidden")
                $("#modalPage2").removeClass("hidden")
                $("#elf").removeClass("btnSelected")
                $("#human").removeClass("btnSelected")
                imgArray.push(dwarf)
                break;
            case "sword":
                $("#sword").addClass("btnSelected")
                $("#axe").removeClass("btnSelected")
                $("#bow").removeClass("btnSelected")
                swordChoice();
                break;
            case "axe":
                $("#axe").addClass("btnSelected")
                $("#bow").removeClass("btnSelected")
                $("#sword").removeClass("btnSelected")
                axeChoice();
                break;
            case "bow":
                $("#bow").addClass("btnSelected")
                $("#sword").removeClass("btnSelected")
                $("#axe").removeClass("btnSelected")
                bowChoice();
                break;
            
        }
    })

    function swordChoice(){
        switch(imgArray[0]){
            case human:
            imgArray.push(humanSword)
                break;

            case elf:
                imgArray.push(elfSword)
                break;
            case dwarf:
                imgArray.push(dwarfSword)
        }
    }
    function axeChoice(){
        switch(imgArray[0]){
            case human:
            imgArray.push(humanAxe)
                break;

            case elf:
                imgArray.push(elfAxe)
                break;
            case dwarf:
                imgArray.push(dwarfAxe)
        }
    }
    function bowChoice(){
        switch(imgArray[0]){
            case human:
            imgArray.push(humanBow)
                break;

            case elf:
                imgArray.push(elfBow)
                break;
            case dwarf:
                imgArray.push(dwarfBow)
        }
    }

    $('#submit').click(function(e) {
        e.preventDefault();
        $('#avatarModal').modal('hide');
        $("#modalPage1").removeClass("hidden")
        $("#modalPage2").addClass("hidden")

        // displayAvatar()
        

        let avatar = {
        img1: imgArray[0],
        img2: imgArray[1]
    }
        let userID = window.localStorage.getItem("id")
    // When user selects 'submit' the choices for race and weapon are sent to sql database for the current user
    $.ajax({
        url: `/api/users/${userID}`,
        method: "PUT",
        data: avatar
    // The race and weapon fields are then returned and rendered using mergeImages
        }).then(res => {
            console.log(res)
            mergeImages([res.img1, res.img2])
            .then(b64 => $(avatarImg).attr('src', b64))
            $("#avatar").removeClass("hidden")
            $("#createAvatar").text("Edit Avatar")
        })
        
        
        return false;

        
        
    });

    

    
   

    // function displayAvatar(){
    // mergeImages(imgArray)
    //     .then(b64 => $(avatarImg).attr('src', b64))
    // $("#avatar").removeClass("hidden")
    // console.log(imgArray)
    // }

})