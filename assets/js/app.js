console.log('connect')

//alert("Welcome!");

var bouton = document.getElementById("bouton"); //je capture mon bouton
var ulToDo = document.getElementById("list"); //je capture mon élément ul dans le html
var a = 0; //pr incrémenter chaque id
var restDo = document.getElementById('test1'); //sélection du bouton reste à faire
var tachesOk = document.getElementById('test2');
var allTask = document.getElementById('test3');
var x = 0;

bouton.addEventListener("click", function (e) { //création d'une fonction anonyme pour le bouton
    var input = document.getElementById("search").value; //je récupère dans une variable la valeur de mon input
    addTask(input)// j'attribue un paramètre à ma fonction pour qu'elle reconnaisse quand je l'exécute
});

function addTask(input) {

    if (input == 0) { //si l'input est nul (non renseigné) 
        alert("Tâche non valide");
        return false; //alors n'exécutera pas la fonction
    };

    for (var i = 0, len = localStorage.length; i < len; i++) { //pour chaque clé du localstorage
        if (input == localStorage.key(i)) { //si l'input rentré est identique à une clé existante
            alert("Tâche présente");
            return false; //alors la fonction ne s'exécutera pas
        }
    }

    var dateDeb = new Date(); //création d'une date/horaire de début(création de task)
    var liste = document.createElement('li'); //je créé des éléments de liste 'li' pr chq fction lancée
    var check = document.createElement('input'); //idem pour les inputs
    var label = document.createElement('label'); //idem pr les labels
    var heure = document.createElement('p'); //idem pr le span contenant l'heure
    var supp = document.createElement('a'); //idem pr le bouton supprimer

    liste.setAttribute("id", "elmtLi" + a);

    check.setAttribute("class", "filled-in"); //j'attribue une classe à mon élément check soit "input"
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "filled-in-box" + a); // +i permet d'incrémenter mon id
    check.addEventListener('click', function (e) { //attribution d'un listener à mon check
        doTask(check, input, dateDeb) //j'appelle la fonction
    });

    label.setAttribute("for", "filled-in-box" + a);
    label.setAttribute("id", input); //ajout d'un id variable à chaque label pr sélection rayer

    heure.setAttribute("class", "affichageHeure");//attribution d'une classe à mon élément span

    supp.setAttribute("class", "waves-effect waves-light btn"); //attribution d'une classe à mon bouton
    supp.addEventListener('click', function (e) { //attribution d'un listener et d'une fonction à mon bouton
        doSupp(supp, liste, input) //j'appelle la fonction
    });

    label.innerHTML = input; //place la valeur de l'input (ajout tâche) dans le label
    heure.innerHTML = dateDeb.toLocaleDateString("fr-FR") + " - " + dateDeb.toLocaleTimeString("fr-FR") + "   ";//place l'heure dans le html avec une simplification permettant de la rendre lisible
    supp.innerHTML = "Supprimer";
    
    liste.appendChild(check); //attribution du check à mon li
    liste.appendChild(label);  //attribution du label à mon li
    liste.appendChild(heure); // attribution du span à mon li
    liste.appendChild(supp); //attribution du bouton à mon li
    ulToDo.appendChild(liste); //attribution des li à mon élément ul
    a++; //va permettre d'incrémenter de 1 mes 2 i placés au-dessus

    localStorage.setItem(input, dateDeb);
};


function doTask(check, input, dateDeb) { //quand check est cliqué, il exécute la fonction suivante
    if (check.checked) { //si le bouton est coché
        document.getElementById(input).style.textDecoration = "line-through"; //alors sélection du label et lui attribuer un css pour rayer
    } else {
        document.getElementById(input).style.textDecoration = "none"; //sinon il n'est pas rayé
    }

    var dateFin = new Date(); //création d'une date/horaire de fin(exécution de la task)
    temps = dateFin.getTime() - dateDeb.getTime(); //calcul du temps écoulé entre les 2 fonctions de création et de réalisation
    alert("Vous avez mis " + temps / 1000 + " secondes."); //création d'une alerte permettant de visualiser le tps écoulé
};

function doSupp(supp, liste, input) {
    //lorsque le bouton supprimer est cliqué il exécute la fonction suivante
    document.getElementById("list").removeChild(liste); //supprime les élèments li de la ul
    localStorage.removeItem(input); //supprime la valeur ds le localstorage
    alert("Tâche supprimée");
};

restDo.addEventListener("click", function filtre() { //qd reste à faire est cliqué exécution fction
    var allTasks = document.querySelectorAll(".filled-in") //crea variable qui récupère ts les elmt de cette classe
    allTasks.forEach(function (element) { //boucle pr chq element de mon tableau des elmt à la classe filled-in
        if (element.checked) { //si bouton coché
            element.parentElement.style.display = "none"; //exécute le cache de l'élément coché et de son parent
        } else {
            element.parentElement.style.display = ""; //sinon aucun css pr l'élément et son parent
        }
    });
});

tachesOk.addEventListener("click", function filtre2() { //idem au-dessus
    var allTasks = document.querySelectorAll(".filled-in")
    allTasks.forEach(function (element) {
        if (!element.checked) { // si bouton est différent de coché
            element.parentElement.style.display = "none"; 
        }else{
            element.parentElement.style.display = "";
        }
    });
});
    
allTask.addEventListener('click', function filtre3() {
    var allTasks = document.querySelectorAll(".filled-in")
    allTasks.forEach(function (element) {
        element.parentElement.style.display = ""; //affiche toutes les tâches par défaut
    });
});
















