// varible globle
let vieMax = 100;
let chakraMax = 500;
let tour = true;
let useAttaqueSpeJ = 1;
let useAttaqueSpeA = 1;
let useAttaqueSupA = 4;
let useAttaqueSupJ = 4;
let nbObservationJ = 0;
let nbObservationA = 0;


// tableau action

let tabAction = [];


function addAcction2(action_desc, img_path) {
  let newAction = {
    image_path: img_path,
    desc: action_desc
  };

  tabAction.push(newAction);

};


function actionJ() {
  /*let actionp = document.createElement("div");
  let action2p = document.createElement("p");
  let action3p = document.createElement("p");
  let action4p = document.createElement("p");

  let imgElmnt = document.createElement("img");


  interaction.appendChild(actionp);
  interaction.appendChild(action2p);
  interaction.appendChild(action3p);
  interaction.appendChild(action4p);

  interaction.innerHTML = "";

  let currentElement;

  for (var i = 0; i < tabAction.length ; i++) {
    currentElement = tabAction[i]

    if ( i === tabAction.length - 1) {
      imgElmnt.src = currentElement.img_path ;
      actionp.appendChild(imgElmnt)
      actionp.textContent = currentElement.action
      interaction.appendChild(actionp);
      console.log(tabAction);
    }
    if ( i === tabAction.length - 2) {
      imgElmnt.src = currentElement.img_path ;
      actionp.appendChild(imgElmnt)
      action2p.textContent = currentElement.action
      interaction.appendChild(action2p);
      console.log(tabAction);
    }

    if ( i === tabAction.length - 3) {
      imgElmnt.src = currentElement.img_path ;
      actionp.appendChild(imgElmnt)
      action3p.textContent =  currentElement.action
      interaction.appendChild(action3p);
      console.log(tabAction);
    }

    if ( i === tabAction.length - 4) {
      imgElmnt.src = currentElement.img_path ;
      actionp.appendChild(imgElmnt)
      action4p.textContent =  currentElement.action
      interaction.appendChild(action4p);
      console.log(tabAction);
    }
    }
    console.log(interaction); */



  let actionp = document.createElement("p");
  actionp.style.color = "green"
  let action2p = document.createElement("p");
  let action3p = document.createElement("p");



  interaction.innerHTML = "";

  actionp.textContent = tabAction[tabAction.length - 1]
  action2p.textContent = tabAction[tabAction.length - 2]
  action3p.textContent = tabAction[tabAction.length - 3]


  interaction.appendChild(actionp);
  interaction.appendChild(action2p);
  interaction.appendChild(action3p);

}


// tableau map

let map = [1, 2, 3, 4];

function randomMap() {
  let mapRamdom = map[Math.floor(Math.random() * map.length)];
  if (mapRamdom === map[0]) {
    document.body.style.backgroundImage = "url('image/eau.gif')"; // eau
  } else if (mapRamdom === map[1]) {
    document.body.style.backgroundImage = "url('image/feu.gif')"; // feu
  } else if (mapRamdom === map[2]) {
    document.body.style.backgroundImage = "url('image/air.gif')"; // vent
  } else if (mapRamdom === map[3]) {
    document.body.style.backgroundImage = "url('image/terre.gif')"; // terre
  }
  console.log(mapRamdom);
  return mapRamdom
}


let mapReturn = randomMap();


// tableau element
let element = [1, 2, 3, 4];
let element_joueur = document.getElementById("element_joueur")
let element_joueurTxt = document.getElementById("element_joueurTxt")

function randomElementJ() {
  let elementRamdom = element[Math.floor(Math.random() * element.length)];
  if (elementRamdom === element[0]) {
    element_joueur.src = "image/eau.png" // EAU
    element_joueurTxt.textContent = "Votre élément est l'eau"
  } else if (elementRamdom === element[1]) {
    element_joueur.src = "image/feu.png" // feux
    element_joueurTxt.textContent = "Votre élément est le feux"
  } else if (elementRamdom === element[2]) {
    element_joueur.src = "image/air.png" // air
    element_joueurTxt.textContent = "Votre élément est l'air"
  } else if (elementRamdom === element[3]) {
    element_joueur.src = "image/terre.png" // terre
    element_joueurTxt.textContent = " Votre élément est la terre"
  }
  return elementRamdom
}

let elementReturnJ = randomElementJ()


function randomElementA() {
  let elementRamdom = element[Math.floor(Math.random() * element.length)];
  return elementRamdom
}

let elementReturnA = randomElementA()


/* function fin de combat */

let containerFin = document.getElementById("containerFin");
let container = document.getElementById("container");

function functionFin() {

  tour = true

  let message = document.createElement("h2");
  containerFin.appendChild(message);
  message.id = "messageFin"

  let rejouer = document.createElement("a");
  rejouer.href = "jeux.html"
  rejouer.textContent = "Rejouer"
  containerFin.appendChild(rejouer);
  rejouer.id = "rejouerFin"


  if (adversaire.sante <= 0) {
    message.textContent = "Vous avez gagné";
    containerFin.style.display = "inherit";
    container.style.display = "none";
  } else if (joueur.sante <= 0) {
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
  };

  attaquer(adversaire) {
    if (this.sante > 0) {
      let degat = this.attaque;
      let chakra_epuise = 50;
      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;
    }

    if (this.sante <= 0 || adversaire.sante <= 0) {
      functionFin();
    };
  };

  attaque_Intermediair(adversaire) {
    if (this.sante > 0) {
      let degat = this.attaqueSup;
      let chakra_epuise = 100;

      console.log(
        `${this.nom} attaque ${
         adversaire.nom
       } et lui inflige ${degat} points de dégâts`
      );
      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;

    };
    if (this.chakra < 100) {
      console.log("vous n'avez pas assez de chakra pour faire cette attaque");
    };

    if (this.sante <= 0 || adversaire.sante <= 0) {
      functionFin();
    };
  };

  attaque_Special(adversaire) {
    if (this.sante > 0) {

      let degat = this.attaqueSpe;
      let chakra_epuise = 200;

      adversaire.sante -= degat;
      this.chakra -= chakra_epuise;
    };

    if (this.chakra < 200) {
      console.log("vous n'avez pas assez de chakra pour faire cette attaque");
    };

    if (this.sante <= 0 || adversaire.sante <= 0) {
      functionFin()
    };
  };

  charger_chakra() {
    this.chakra += 75;
    if (this.chakra > chakraMax) {
      this.chakra = chakraMax
    };
  };

  soigner() {
    this.sante += 50;
    this.chakra -= 200;
    if (this.sante > vieMax) {
      this.sante = vieMax;
    }
  };

  observer() {
    this.chakra -= 30
  }
};

let joueur = new Personnage("Jiraya", 100, 500, 10, 20, 40);
let adversaire = new Personnage("Ninja désèrteur", 100, 500, 10, 20, 40);



// element html

let vie_joueur = document.getElementById("vie_joueur");
vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
let barlifeJ = document.getElementById("barlifeJ")
barlifeJ.value = joueur.sante

let chakra_joueur = document.getElementById("chakra_joueur");
chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
let barChakraJ = document.getElementById('barChakraJ')
barChakraJ.value = joueur.chakra

let chakra_adversaire = document.getElementById("chakra_adversaire");
let barChakraA = document.getElementById("barChakraA");
barChakraA.value = adversaire.chakra

let pseudo_adversaire = document.getElementById("pseudo_adversaire");

let vie_adversaire = document.getElementById("vie_adversaire");
let barlifeA = document.getElementById("barlifeA");
barlifeA.value = adversaire.sante

let nbAttsup = document.getElementById("nbAttsup")
nbAttsup.textContent = useAttaqueSupJ + " fois"

let nbAttspe = document.getElementById("nbAttspe")
nbAttspe.textContent = useAttaqueSpeJ

let textVie = document.getElementById("textVie")
textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;

let textChakra = document.getElementById("textChakra")
textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;

let imgAttSpe = document.getElementById("imgAttSpe")

let imgAttSup = document.getElementById("imgAttSup")

let image_adversaire = document.getElementById("img_adversaire");

let imageJoueur = document.getElementById("imageJoueur")

let element_adversaire = document.getElementById("element_adversaire");

let attaqueNormal = document.getElementById("attaque");
let attaqueIntermediaire = document.getElementById("attaqueIntermediaire");

let attaqueSpecial = document.getElementById("attaqueSpecial");

let charger_chakra = document.getElementById("charger_chakra");
let observation = document.getElementById("observer");

let element_adversaireTxt = document.getElementById("element_adversaireTxt")


// logo action


// fonction choix du tour

function choixTour() {
  if (tour === true) {
  //  tourElm.textContent = "C'est votre tour"
    image_adversaire.style.opacity = "0.5"
    imageJoueur.style.opacity = "1"
  } else {
  //  tourElm.textContent = "ce n'est pas votre tour"

    image_adversaire.style.opacity = "1"
    imageJoueur.style.opacity = "0.5"
  }
}


// ecouteur d'evenment

attaqueNormal.addEventListener("click", functionAttaque, false);
attaqueIntermediaire.addEventListener("click", functionAttaqueIntermediaire, false);
attaqueSpecial.addEventListener("click", functionAttaqueSpeciale, false);
charger_chakra.addEventListener("click", functionCharger, false);
soigner.addEventListener("click", functionSoigner, false);
observation.addEventListener("click", functionObserver, false);



// fonction ia:


function actionIa() {

  let action = document.createElement("p");
  interaction.appendChild(action);
  console.log(adversaire.chakra);

  if (tour === false) {
    if (nbObservationA <= 2) {
      if (nbObservationA === 0) {
        adversaire.observer()
        action = "Votre adversaire vous a observé"
        tabAction.push(action)

        nbObservationA = nbObservationA + 1
        tour = true;
      } else if (nbObservationA === 1) {
        adversaire.observer()

        if (nbObservationJ === 0) {
          action = " Votre adversaire vous a observé"
          tabAction.push(action)

          nbObservationA = nbObservationA + 1
          tour = true;
        } else {

          //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
          textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
          barChakraA.value = adversaire.chakra
          action = "Votre adversaire vous a observé"
          tabAction.push(action)

          nbObservationA = nbObservationA + 1
          tour = true;
        }

      } else if (nbObservationA === 2) {
        adversaire.observer()
        //  chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        action =  "Votre adversaire vous a observé"
        tabAction.push(action)
        nbObservationA = nbObservationA + 1
        tour = true;
      }

    } else if (adversaire.sante <= 40 && adversaire.chakra >= 230) {
      adversaire.soigner();
      if (nbObservationJ < 1) {
        action = "Votre adversaire s'est soigné"
        tabAction.push(action)
        tour = true;
      } else {
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        barlifeA.value = adversaire.sante
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        action =  "Votre adversaire s'est soigné"
        tabAction.push(action)
        tour = true;
      }

    } else if (adversaire.chakra < 150 && adversaire.chakra < 300) {
      adversaire.charger_chakra()
      if (nbObservationJ === 0) {
        action = "Votre adversaire a repris du chakra"
        tabAction.push(action)
        tour = true;
      } else {
        action = "Votre adversaire a repris du chakra"
        tabAction.push(action)
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        tour = true;
      }

    } else if ((adversaire.chakra > 200) && (joueur.sante <= 60) && (useAttaqueSpeA === 1)) {
      adversaire.attaque_Special(joueur)
      animationAttaqueSpeA()
      if (nbObservationJ === 0) {
        vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
        barlifeJ.value = joueur.sante
        action = " Votre adversaire vous a infligé " + adversaire.attaqueSpe + " de dégats"
        tabAction.push(action)
        tour = true;
        useAttaqueSpeA = useAttaqueSpeA - 1
      } else {
        vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
        barlifeJ.value = joueur.sante
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        action =  "Votre adversaire vous a infligé " + adversaire.attaqueSpe + " de dégats"
        tabAction.push(action)
        tour = true;
        useAttaqueSpeA = useAttaqueSpeA - 1
      }

    } else if ((adversaire.chakra > 150) && (joueur.sante < 80) && (useAttaqueSupA > 0)) {
      adversaire.attaque_Intermediair(joueur);
      vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
      barlifeJ.value = joueur.sante
      useAttaqueSupA = useAttaqueSupA - 1
      let numRandom = Math.floor(Math.random() * 3);
      if (elementReturnJ === mapReturn) {

        if (numRandom === 1 || numRandom === 2) {
          action = "Votre adversaire vous a infligé " + adversaire.attaqueSup + " de dégats.Votre adversaire vous a sonné, vous ne pouvez plus attaquer"
          tabAction.push(action)
          tour = false
          setTimeout(function() {
            actionIa()
          }, 3000);
        } else {
          tour = true;
          action = "Votre adversaire vous a infligé " + adversaire.attaqueSup + " de dégats"
          tabAction.push(action)
        }
      } else if (elementReturnJ != mapReturn) {
        if (numRandom === 3) {
          action = "Votre adversaire vous a infligé " + adversaire.attaqueSup + " de dégats.Votre adversaire vous a sonné, vous ne pouvez plus attaquer"
          tabAction.push(action)
          setTimeout(function() {
            actionIa()
          }, 3000);
        } else {
          tour = true;
          action = "Votre adversaire vous a infligé " + adversaire.attaqueSup + " de dégats"
          tabAction.push(action)
        }
      } else {
        tour = true;
        action = "Votre adversaire vous a infligé " + adversaire.attaqueSup + " de dégats"
        tabAction.push(action)

      }

      if (nbObservationJ > 0) {
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
      }
    } else {

      if (nbObservationJ === 0) {
        adversaire.attaquer(joueur);
        animationAttaqueA()
        action = "Votre adversaire vous a infligé " + adversaire.attaque + " de dégats"
        tabAction.push(action)
        tour = true
      } else {
        adversaire.attaquer(joueur);
        animationAttaqueA()
        action =  "Votre adversaire vous a infligé " + adversaire.attaque + " de dégats"
        tabAction.push(action)
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        textChakra.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        tour = true
      }
    }
    vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
    barlifeJ.value = joueur.sante
  };
  choixTour();
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)

};


// fonction joueur

function functionAttaque() {
  let action = document.createElement("p");
  interaction.appendChild(action);

  if (tour === true) {
    if (joueur.chakra < 50) {
      action = " Vous n'avez pas assez de chakra pour attaquer";
      tabAction.push(action)
    } else {

      chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
      barChakraJ.value = joueur.chakra
      tour = false;
      setTimeout(function() {
        actionIa()
      }, 3000);
      if (nbObservationJ <= 2) {
        joueur.attaque = 5
        joueur.attaquer(adversaire);
        let sonAttaque = new Audio("son/SF-coupoing.mp3")
        sonAttaque.play()
        animationAttaqueJ()

        nbObservationA = nbObservationA + 1
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra
        action = "Vous avez infligé " + joueur.attaque + " de dégats et perdu 50 de chakra, et donné des informations à votre adversaire, observé pour être plus efficace"
        tabAction.push(action)

        if (nbObservationJ > 1) {
          //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          barlifeA.value = adversaire.sante

        }
      } else {
        joueur.attaquer(adversaire);
        let sonAttaque = new Audio("son/SF-coupoing.mp3")
        sonAttaque.play()
        animationAttaqueJ()

        barlifeA.value = adversaire.sante
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra

        action = "Vous avez infligé " + joueur.attaque + " de dégats et perdu 50 de chakra";

        tabAction.push(action)

      }
    }

  } else {
    action = " Ce n'est pas votre tour"
    tabAction.push(action)
  }
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)

};

function functionAttaqueIntermediaire() {
  let action = document.createElement("p");
  interaction.appendChild(action);

  if (tour === true) {
    if (joueur.chakra < 100) {
      action = " Vous n'avez pas assez de chakra pour attaquer";
      tabAction.push(action)
    } else if (useAttaqueSupJ <= 0) {
      action = " Vous ne pouvez plus utiliser cette attaque";
      imgAttSup.style.cursor = " not-allowed"
      imgAttSup.style.opacity = "0.6";
      tabAction.push(action)
    } else {
      if (nbObservationJ <= 2) {
        joueur.attaqueSup = 10
        joueur.attaque_Intermediair(adversaire);
        let sonAttaque = new Audio("son/sf_decapitation.mp3")
        sonAttaque.play()
        animationAttaqueSupA()
        nbObservationA = nbObservationA + 1
        useAttaqueSupJ = useAttaqueSupJ - 1
        action = "Vous avez infligé " + joueur.attaqueSup + " de dégats et perdu 100 de chakra, et donné des informations à votre adversaire, observé pour être plus efficace"
        tabAction.push(action)
        nbAttsup.textContent = useAttaqueSupJ + " fois"
        if (nbObservationJ > 1) {
          //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          barlifeA.value = adversaire.sante
        }
        tour = false;
        setTimeout(function() {
          actionIa()
        }, 3000);

      } else {
        joueur.attaque_Intermediair(adversaire);
        let sonAttaque = new Audio("son/sf_decapitation.mp3")
        sonAttaque.play()
        animationAttaqueSupA()
        useAttaqueSupJ = useAttaqueSupJ - 1
        nbAttsup.textContent = useAttaqueSupJ + " fois"
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        barlifeA.value = adversaire.sante

        let numRandom = Math.floor(Math.random() * 5);
        if (elementReturnJ === mapReturn) {
          if (numRandom === 1 || numRandom === 3) {
            action = "Vous avez infligé " + joueur.attaqueSup + " de dégats et perdu 100 de chakra. Votre adversaire est sonné et ne peut pas attaquer"
            tabAction.push(action)

          } else {
            action = "vous avez infligé " + joueur.attaqueSup + " de dégats et perdu 100 de chakra."
            tabAction.push(action)
            tour = false;
            setTimeout(function() {
              actionIa()
            }, 3000);
          }
        } else if (elementReturnJ != mapReturn) {
          if (numRandom === 2) {
            action = "vous avez infligé " + joueur.attaqueSup + " de dégats et perdu 100 de chakra. Votre adversaire est sonné et ne peut pas attaquer"
            tabAction.push(action)
          } else {
            action = "vous avez infligé " + joueur.attaqueSup + " de dégats et perdu 100 de chakra."
            tabAction.push(action)
            tour = false;
            setTimeout(function() {
              actionIa()
            }, 3000);
          }
        } else {
          tour = false;
          setTimeout(function() {
            actionIa()
          }, 3000);

        }

      }

      chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
      barChakraJ.value = joueur.chakra
      //  attaqueIntermediaire.textContent = "attaque Intermediaire " + "(" + useAttaqueSupJ + ")"
      textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
      if (useAttaqueSupJ === 0) {
        imgAttSup.style.cursor = " not-allowed"
        imgAttSup.style.opacity = "0.6";
      }

    }

  } else {
    action = " Ce n'est pas votre tour";
    tabAction.push(action)

  };
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)
};

function functionAttaqueSpeciale() {
  let action = document.createElement("p");
  interaction.appendChild(action);
  if (tour === true) {
    if (joueur.chakra < 200) {
      action = " Vous n'avez pas assez de chakra pour attaquer";
      tabAction.push(action)
    } else if (useAttaqueSpeJ === 0) {
      action = " Vous ne pouvez plus utuliser cette attaque";

      tabAction.push(action)
    } else {

      useAttaqueSpeJ = useAttaqueSpeJ - 1

      if (nbObservationJ <= 2) {

        joueur.attaqueSpe = 25
        joueur.attaque_Special(adversaire)
        nbAttspe.textContent = useAttaqueSpeJ
        attaqueSpecial.style.cursor = " not-allowed"
        imgAttSpe.style.opacity = "0.6";
        let sonAttaque = new Audio("son/boom.wav")
        sonAttaque.play()
        animationAttaqueSpeJ()
        nbObservationA = nbObservationA + 1
        action = "Vous avez infligé " + joueur.attaqueSpe + " de dégats et perdu 200 de chakra, et donné des informations à votre adversaire, observé pour être plus efficace"
        tabAction.push(action)
        if (nbObservationJ > 1) {
          //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
          barlifeA.value = adversaire.sante

        }
      } else {
        joueur.attaque_Special(adversaire)
        nbAttspe.textContent = useAttaqueSpeJ
        attaqueSpecial.style.cursor = " not-allowed"
        imgAttSpe.style.opacity = "0.6";
        let sonAttaque = new Audio("son/boom.wav")
        sonAttaque.play()
        animationAttaqueSpeJ()
        action = "Vous avez infligé " + joueur.attaqueSpe + " de dégats et perdu 200 de chakra"
        tabAction.push(action)
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        barlifeA.value = adversaire.sante
      }
      chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
      barChakraJ.value = joueur.chakra
      tour = false;

      setTimeout(function() {
        actionIa()
      }, 3000);
    }
    // attaqueSpecial.textContent = useAttaqueSpeJ

  } else {
    action = " Ce n'est pas votre tour";
    tabAction.push(action)
  };
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)
};

function functionCharger() {
  let action = document.createElement("p");
  interaction.appendChild(action);
  if (tour === true && joueur.chakra == chakraMax) {
    action = "Vous avez déja le maximum de chakra"
    tabAction.push(action)
  } else if (tour === true) {
    joueur.charger_chakra();
    chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
    barChakraJ.value = joueur.chakra
    tour = false;
    action = "Vous avez récupéré 75 de chakra"
    tabAction.push(action)

    setTimeout(function() {
      actionIa()
    }, 3000);
  } else {
    action = " Ce n'est pas votre tour";
    tabAction.push(action)
  }
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)
};

function functionSoigner() {
  let action = document.createElement("p");
  interaction.appendChild(action);
  if (tour === true) {
    if ((joueur.chakra >= 200) && (joueur.sante > 0)) {
      if (joueur.sante >= vieMax) {
        action = "Votre vie est déja au maximum"
        tabAction.push(action)
      } else {
        joueur.soigner();
        let sonAttaque = new Audio("son/heal.wav")
        sonAttaque.play()
        console.log(joueur.sante);
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra
        vie_joueur.textContent = "vie: " + joueur.sante + "/" + vieMax;
        barlifeJ.value = joueur.sante
        tour = false;
        action = "Vous avez récupéré 50 de vie et perdu 150 de chakra"
        tabAction.push(action)
        setTimeout(function() {
          actionIa()
        }, 3000);
      }
    } else {
      action = "Vous n'avez pas assez de chakra pour vous soignez"
      tabAction.push(action)
    }

  } else {
    action = " Ce n'est pas votre tour";
    tabAction.push(action)
  };
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)
};

function functionObserver() {
  let action = document.createElement("p");
  interaction.appendChild(action);

  if (tour === true) {
    if (joueur.chakra >= 30) {
      if (nbObservationJ === 0) {
        joueur.observer();
        image_adversaire.src = "image/kakashi-mask2.png";
        pseudo_adversaire.textContent = adversaire.nom;
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra
        barChakraA.style.display = "none"
        barlifeA.style.display = "none"
        tour = false;
        nbObservationJ = nbObservationJ + 1
        action = "Vous avez observé votre adversaire, vous avez perdu 30 de chakra"
        tabAction.push(action)
        setTimeout(function() {
          actionIa()
        }, 3000);
      } else if (nbObservationJ === 1) {
        joueur.observer();
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        barChakraA.style.display = "inherit" ;
        textVie.style.display= "inherit"
        textChakra.style.display= "inherit"
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        barlifeA.value = adversaire.sante
        barlifeA.style.display = "inherit"
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra
        tour = false;
        nbObservationJ = nbObservationJ + 1
        action = "Vous avez observez votre adversaire, vous avez perdu 30 de chakra"
        tabAction.push(action)
        setTimeout(function() {
          actionIa()
        }, 3000);
        console.log(tour);
      } else if (nbObservationJ === 2) {
        joueur.observer();
        barChakraA.value = adversaire.chakra
        barChakraA.style.display = "inherit"
        //chakra_adversaire.textContent = "chakra: " + adversaire.chakra + "/" + chakraMax;
        barChakraA.value = adversaire.chakra
        //vie_adversaire.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        textVie.textContent = "vie: " + adversaire.sante + "/" + vieMax;
        barlifeA.value = adversaire.sante
        chakra_joueur.textContent = "chakra: " + joueur.chakra + "/" + chakraMax;
        barChakraJ.value = joueur.chakra
        tour = false;

        action = "Vous avez observez votre adversaire, vous avez perdu 30 de chakra"
        tabAction.push(action)

        setTimeout(function() {
          actionIa()
        }, 3000);
        if (elementReturnA === element[0]) {
          element_adversaire.src = "image/eau.png"
          element_adversaireTxt.textContent = " ELément eau"
        } else if (elementReturnA === element[1]) {
          element_adversaire.src = "image/eau.png"
          element_adversaireTxt.textContent = " ELément feu"
        } else if (elementReturnA === element[2]) {
          element_adversaire.src = "image/air.png"
          element_adversaireTxt.textContent = " ELément air"
        } else if (elementReturnA === element[3]) {
          element_adversaire.src = "image/terre.png"
          element_adversaireTxt.textContent = " ELément terre"
        }
        nbObservationJ = nbObservationJ + 1
      } else if (nbObservationJ > 2) {
        action = "Vous avez toutes les informations sur votre adversaire ";
        tabAction.push(action)

      } else {
        action = "Vous n'avez pas assez de chakra pour observez votre adversaire"
        tabAction.push(action)
      }
    }
  } else {
    action = " ce n'est pas votre tour";
    tabAction.push(action)

  };
  choixTour()
  actionJ(tabAction)
  changeImageJoueur(joueur)
  changeImageAdversaire(adversaire)
}

// fonction qui change l'image de la vie en fonction de la vie



function changeImageJoueur(joueur) {
  if (joueur.sante <= 50) {
    imageJoueur.src = "image/personnage2.png"
  } else {
    imageJoueur.src = "image/personnage1.png"
  }
}


function changeImageAdversaire(adversaire) {
  if (adversaire.sante <= 50 && nbObservationJ >= 1) {
    image_adversaire.src = "image/ennemi.png";

  } else if (nbObservationJ === 0) {
    image_adversaire.src = "image/kakashi-mask.png";

  } else {
    image_adversaire.src = "image/kakashi-mask2.png";
  }
}

let img_adversaire = document.getElementById("img_adversaire")

function animationAttaqueSupA() {
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      img_adversaire.style.opacity = 1;
      setTimeout(function() {
        img_adversaire.style.opacity = 0
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      img_adversaire.style.opacity = 1;
    }


  }

}

function animationAttaqueSupJ() {
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      imageJoueur.style.opacity = 1;
      setTimeout(function() {
        imageJoueur.style.opacity = 0
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      imageJoueur.style.opacity = 1;
    }
  }

}


function animationAttaqueJ(){
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      img_adversaire.style.animationIterationCount = "infinite";
      setTimeout(function() {
      img_adversaire.style.animationIterationCount = "0";
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      img_adversaire.style.animationIterationCount = "0";
    }
  }
}

function animationAttaqueA(){
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      imageJoueur.style.animationIterationCount = "infinite";
      setTimeout(function() {
      imageJoueur.style.animationIterationCount = "0";
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      imageJoueur.style.animationIterationCount = "0";
    }
  }
}

function animationAttaqueSpeJ(){
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      img_adversaire.style.opacity = 1;
      document.body.style.animationIterationCount = "infinite";
      setTimeout(function() {
      document.body.style.animationIterationCount = "0";
      img_adversaire.style.opacity = 0;
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      document.body.style.animationIterationCount = "0";
      img_adversaire.style.opacity = 1;
    }
  }
}

function animationAttaqueSpeA(){
  let t = 1.5;
  let intervalID = setInterval(opacity, 500);

  function opacity() {
    if (t > 0) {
      imageJoueur.style.opacity = 1;
      document.body.style.animationIterationCount = "infinite";
      setTimeout(function() {
      document.body.style.animationIterationCount = "0";
      imageJoueur.style.opacity = 0;
      }, 200);
      t = t - 0.5
    } else {
      clearInterval(intervalID);
      document.body.style.animationIterationCount = "0";
      imageJoueur.style.opacity = 1;
    }
  }
}


// proble ia soigé
