var infoContenu = getComputedStyle(document.getElementById("contenu"));


var ulElt = document.createElement("ul");
var hauteurElt = document.createElement("li");


hauteurElt.textContent = "Hauteur : " + infoContenu.height; // D�finition de son contenu textuel
ulElt.appendChild(hauteurElt); // Insertion du nouvel �l�ment

var longueurElt = document.createElement("li");

longueurElt.textContent = "Longueur : " + infoContenu.width;
ulElt.appendChild(longueurElt);

document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'�l�ment"));
document.getElementById("infos").appendChild(ulElt)