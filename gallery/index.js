// TODO: create cards for every image or slideshow idk smth

const DIR_NAME = "./img/display";
const PICTURE_HOLDER = "picture-holder";


const pictures = [
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF1.jpg",
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF2.jpg",
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF3.jpg",
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF4.jpg",
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF5.jpg",
    "SICK_PLACEHOLDER_WITH_EXPLOSIONS_AND_STUFF6.jpg"
];



function loadPictures(divName){
    const elementBeingAddedTo = document.getElementById(divName);
    for (const pic of pictures){
        const divElement = document.createElement("div");
        divElement.className = "gallery-image";


        const htmlImageElement = document.createElement("img");
        htmlImageElement.src = DIR_NAME + "/" + pic;
        htmlImageElement.alt = pic;

        const textBelow = document.createElement("p");
        textBelow.className = "gallery-image-title";

        const contentOfTextBelow = document.createTextNode(pic + "Test");
        textBelow.appendChild(contentOfTextBelow);

        divElement.appendChild(htmlImageElement);
        divElement.appendChild(textBelow);

        elementBeingAddedTo.appendChild(divElement);
    }
}

loadPictures(PICTURE_HOLDER)
