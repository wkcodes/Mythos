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

    console.log(imgArray)

    $(".avatarBtn").click(function () {
        switch ($(this).attr("id")) {
            case "human":
                console.log("Human")
                $("#elf").addClass("hidden")
                $("#dwarf").addClass("hidden")
                imgArray.push(human)
                break;
            case "elf":
                console.log("Elf")
                $("#human").addClass("hidden")
                $("#dwarf").addClass("hidden")
                imgArray.push(elf)
                break;
            case "dwarf":
                console.log("Dwarf")
                $("#human").addClass("hidden")
                $("#elf").addClass("hidden")
                imgArray.push(dwarf)
                break;
            case "sword":
                console.log("Sword")
                $("#axe").addClass("hidden")
                $("#bow").addClass("hidden")
                swordChoice();
                break;
            case "axe":
                console.log("axe")
                $("#sword").addClass("hidden")
                $("#bow").addClass("hidden")
                axeChoice();
                break;
            case "bow":
                console.log("bow")
                $("#axe").addClass("hidden")
                $("#sword").addClass("hidden")
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
        $("#createAvatar").addClass("hide")
        $('#avatarModal').modal('hide');
        displayAvatar()
        return false;
        
    });

    

    // When user selects 'submit' the choices for race and weapon are sent to sql database as an array for the current user
    // The race and weapon array is then returned and rendered using mergeImages
    
   

    function displayAvatar(){
    mergeImages(imgArray)
        .then(b64 => $(avatarImg).attr('src', b64))
    $("#avatar").removeClass("hidden")
    console.log(imgArray)
    }

})