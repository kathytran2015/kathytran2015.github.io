// function show_image(src, width, height) {
//     screamingzenitsu = document.createElement("screamingzenitsu.jpeg");
//     screamingzenitsu.src = screamingzenitsu.jpeg;
//     screamingzenitsu.width = 300;
//     screamingzenitsu.height = 158;
//     document.body.appendChild(screamingzenitsu);
// }

function howMuchPainDoYouFeel(emotional, physical){
    emotional = parseInt(emotional)
    physical = parseInt(physical)

    if (physical + emotional > 9000) {
        document.getElementById("determine").innerHTML = "Its over NINE-THOUSAND";
        document.getElementById("image1").src = 'zeni_images/cryingzenitsu.jpg'
    }
    else if (physical > emotional){
        document.getElementById("determine").innerHTML = "Go to sleep.";
        document.getElementById("image1").src = 'zeni_images/screamingzenitsu.jpeg'
    }
    else{
        document.getElementById("determine").innerHTML = "I want to sleep forever.";
        document.getElementById("image1").src = 'zeni_images/sufferingzenitsu.jpg'
    }
}
