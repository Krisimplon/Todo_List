console.log('connect')

alert("Welcome!");

var bouton = document.getElementById("bouton"); //je capture mon bouton
var ulToDo = document.getElementById("list"); //je capture mon élément ul dans le html
var i = 0; //pr incrémenter chaque id

bouton.addEventListener("click", addTask); //quand je clique sur le bouton, j'exécute la fonction ci-dessous

function addTask() {
    var input = document.getElementById("search").value; //je récupère dans une variable la valeur de mon input
    var dateDeb = new Date(); //création d'une date/horaire de début(création de task)

    var liste = document.createElement('li'); //je créé des éléments de liste 'li' pr chq fction lancée
    var check = document.createElement('input'); //idem pour les inputs
    var label = document.createElement('label'); //idem pr les labels
    var heure = document.createElement('span'); //idem pr le span contenant l'heure
    var supp = document.createElement('a');

    liste.setAttribute("id", "elmtLi" + i);

    check.setAttribute("class", "filled-in"); //j'attribue une classe à mon élément check soit "input"
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "filled-in-box" + i); // +i permet d'incrémenter mon id

    label.setAttribute("for", "filled-in-box" + i);
    label.setAttribute("id", input); //ajout d'un id variable à chaque label pr sélection rayer

    heure.setAttribute("class", "affichageHeure");//attribution d'une classe à mon élément span

    supp.setAttribute("class", "waves-effect waves-light btn");

    label.innerHTML = input; //place la valeur de l'input (ajout tâche) dans le label
    i++; //va permettre d'incrémenter de 1 mes 2 i placés au-dessus
    heure.innerHTML = " " + dateDeb.toLocaleDateString("fr-FR") + " " + dateDeb.toLocaleTimeString("fr-FR") + " ";//place l'heure dans le html avec une simplification permettant de la rendre lisible
    supp.innerHTML = "Supprimer";

    liste.appendChild(check); //attribution du check à mon li
    liste.appendChild(label);  //attribution du label à mon li
    liste.appendChild(heure); // attribution du span à mon li
    liste.appendChild(supp);
    ulToDo.appendChild(liste); //attribution des li à mon élément ul
 

    var okTask = check.addEventListener("click", doTask); //quand check est cliqué, il exécute la fonction suivante
    
    function doTask() {
        document.getElementById(input).style.textDecoration="line-through"; //sélection du label et lui attribuer un css pour rayer
        var dateFin = new Date(); //création d'une date/horaire de fin(exécution de la task)
        var heureFin = dateFin.toLocaleDateString("fr-FR") + " " + dateFin.toLocaleTimeString("fr-FR"); //lisibilité de l'horaire
        console.log(heureFin);

        temps = dateFin.getTime() - dateDeb.getTime(); //calcul du temps écoulé entre les 2 fonctions de création et de réalisation
        console.log(temps/1000);

        alert("Vous avez mis " + temps/1000 + " secondes."); //création d'une alerte permettant de visualiser le tps écoulé
    };

    var suppression = supp.addEventListener("click", doSupp);//lorsque le bouton supprimer est cliqué il exécute la fonction suivante

    function doSupp() {
        document.getElementById("list").removeChild(liste); //supprime les élèments li de la ul
    };
    
    var restDo = document.getElementById('test1'); //sélection du bouton reste à faire
    var tachesOk = document.getElementById('test2');
    var allTask = document.getElementById('test3');

    suppNoTask = restDo.addEventListener("click", filtre); //qd reste à faire est cliqué exécution fction
    supptachesOk = tachesOk.addEventListener("click", filtre2);
    completeList = allTask.addEventListener('click', filtre3);
    

    function filtre() {
        if (check.checked) { //si bouton coché
            document.getElementById("elmtLi").style.display = "none"; //exécute le cache des éléments cochés
        }else{
            document.getElementById("elmtLi").style.display = ""; //sinon fait apparaître les éléments
        }
    };

    function filtre2() {
        if (!check.checked) { 
            document.getElementById(input).style.display = "none"; 
        }else{
            document.getElementById(input).style.display = "";
        }
    };

    function filtre3() {
            document.getElementById(input).style.display = ""; //affiche toutes les tâches par défaut
    }

      //création du stockage des tâches dans le localstorage
      var stockage = localStorage;
      stockage.setItem(input, JSON.stringify(i)); //JSON va remplacer l'objet par un string
};










