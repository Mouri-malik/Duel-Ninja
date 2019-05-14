console.log("hello world");
let tabAction = [];
let interaction = document.getElementById("interaction");

function actionJ(tabAction) {

  let action = document.createElement("p");
  let action2 = document.createElement("p");
  let action3 = document.createElement("p");
  let action4 = document.createElement("p");



  interaction.innerHTML= ""

  action.textContent = tabAction[tabAction.length - 1]
  interaction.appendChild(action);
  action2.textContent = tabAction[tabAction.length - 2]
  interaction.appendChild(action2);
  action3.textContent = tabAction[tabAction.length - 3]
  interaction.appendChild(action3);
  action4.textContent = tabAction[tabAction.length - 4]
  interaction.appendChild(action4);




}
actionJ(tabAction)

// varible globle
let vieMax = 100
let chakraMax = 500

/* function fin de combat */

let containerFin = document.getElementById("containerFin");
let container = document.getElementById("container");

function functionFin() {


  let message = document.createElement("h2");
  containerFin.appendChild(message);

  if (adversaire.sante === 0) {
    message.textContent = "Vous avez gagné";
    containerFin.style.display = "inherit";
    container.style.display = "none";
  } else if (joueur.sante === 0) {
    message.textContent = "Vous avez perdu";
    containerFin.style.display = "inherit";
    container.style.display = "none";
  }
};



/* creation class personnage */

class Personnage {
  constructor(nom, sante, chakra, attaque, attaqueSup, attaqueSpe) {
    this.nom = nom;
    this.sante = sante;
    this.chakra = chakra;
    this.attaque = attaque;
    this.attaqueSup = attaqueSup;
    this.attaqueSpe = attaqueSpe;
  }
  // attasue l'adversaire
  attaquer(adversaire) {
    if (this.sante > 0) {
      let degat = this.attaque;
      let chakra_epuise = this.attaque * 5;

      console.log(
        `${this.nom} attaque ${
         adversaire.nom
       } et lui inflige ${degat} points de dégâts`
      );
      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;

    }
    if (this.sante === 0 || adversaire.sante === 0) {
      functionFin();
    }

  }
  attaque_Intermediair(adversaire) {
    if (this.sante > 0) {
      let degat = this.attaqueSup;
      let chakra_epuise = this.attaque * 10;

      console.log(
        `${this.nom} attaque ${
         adversaire.nom
       } et lui inflige ${degat} points de dégâts`
      );
      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;

    };
    if (this.sante === 0 || adversaire.sante === 0) {
      functionFin();
    };
  };

  attaque_Special(adversaire) {
    if (this.sante > 0) {
      let degat = this.attaqueSpe;
      let chakra_epuise = this.attaque * 30
      console.log(
        `${this.nom} attaque spécial sur ${
        adversaire.nom
      } et lui inflige ${degat} points de dégâts`
      );
      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;

    };
    if (this.sante === 0 || adversaire.sante === 0) {
      functionFin()
    };
  };

  observation(adversaire) {

  };

  charger_chakra() {

    if (this.chakra < 500) {
      this.chakra += 50;
    } else {
      console.log("vous etes deja au maximum");
    };
  };


  soigner() {
    if (this.sante > 0) {
      if (this.chakra > 350) {
        this.sante += 250;
        this.chakra -= 350;
      };
    };

  };

};

let joueur = new Personnage("Jiraya", 100, 500, 10, 20, 40);
let adversaire = new Personnage("orochimaru", 100, 500, 10, 20, 40);

/* recuperation des éléments html */

let attaqueNormal = document.getElementById("attaque");
let attaqueIntermediaire = document.getElementById("attaqueIntermediaire");
let soigner = document.getElementById("soigner");
let charger_chakra = document.getElementById("charger_chakra");



let vie_joueur = document.getElementById("vie_joueur");
vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;

let pseudo_joueur = document.getElementById("pseudo_joueur");
pseudo_joueur.textContent = joueur.nom;

let chakra_joueur = document.getElementById("chakra_joueur");
chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;


let pseudo_adversaire = document.getElementById("pseudo_adversaire");
pseudo_adversaire.textContent = adversaire.nom;

let vie_adversaire = document.getElementById("vie_adversaire");
vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;

/* ecouteur evenment */

attaqueNormal.addEventListener("click", functionAttaque, false);
attaqueIntermediaire.addEventListener("click", functionAttaqueIntermediaire, false);
attaqueSpecial.addEventListener("click", functionAttaqueSpeciale, false);
soigner.addEventListener("click", functionSoigner, false);
charger_chakra.addEventListener("click", functionCharger, false);

/* Tableau ation */

/* fonction */

function functionAttaque() {


  let action = document.createElement("p");
  interaction.appendChild(action);

  if (joueur.chakra < 50) {
    console.log("vous n'avez pas assez de chakra pour attaquer");
    action = "vous n'avez pas assez de chakra pour attaquer";
    tabAction.push(action)


  } else {
    joueur.attaquer(adversaire)
    vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
    chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
    action = "vous avez infligé" + joueur.attaque + "degat"
    tabAction.push(action);

  };
  actionJ(tabAction)
};

function functionAttaqueIntermediaire() {
  let action = document.createElement("p");

  if (joueur.chakra < 50) {
    console.log("vous n'avez pas assez de chakra pour faire cette attaque");
  } else {
    joueur.attaque_Intermediair(adversaire);
    vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
    chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
    action = "vous avez infligé" + joueur.sup + "degat"
    tabAction.push(action);
  };
  actionJ(tabAction)
};

function functionAttaqueSpeciale() {
  if (joueur.chakra < 250) {
    console.log("vous n'avez pas assez de chakra pour faire cette attaque");
  } else {
    joueur.attaque_Special(adversaire)
    vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
    chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
  };
};


function functionSoigner() {
  if (joueur.chakra < 350) {
    console.log("vous n'avez pas assez de chakra pour vous soigner");
  } else if (joueur.sante === vieMax) {
    console.log("votre vie est au déjà au maximum");
  } else {
    joueur.soigner();
    chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
    vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
  };
};

function functionCharger() {
  joueur.charger_chakra();
  chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
};




/* fonction ia */
