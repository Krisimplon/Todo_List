console.log('connect')

//alert("Welcome!");

var bouton = document.getElementById("bouton"); //je capture mon bouton
var ulToDo = document.getElementById("list"); //je capture mon élément ul dans le html
var i = 0; //pr incrémenter chaque id
var stockage = localStorage;

bouton.addEventListener("click", addTask); //quand je clique sur le bouton, j'exécute la fonction ci-dessous

var input = document.getElementById("search").value; //je récupère dans une variable la valeur de mon input

function addTask() {
    var input = document.getElementById("search").value; //je récupère dans une variable la valeur de mon input

    if (input==0) { //si l'input est nul (non renseigné) 
alert("Tâche non valide");
return false; //alors n'exécutera pas la fonction
};

for ( var i = 0, len = stockage.length; i < len; i++ ) { //pour chaque clé du localstorage
if (input==stockage.key(i)) { //si l'input rentré est identique à une clé existante
    alert("Tâche présente");
    return false; //alors la fonction ne s'exécutera pas
    }
}


var dateDeb = new Date(); //création d'une date/horaire de début(création de task)
var liste = document.createElement('li'); //je créé des éléments de liste 'li' pr chq fction lancée
var check = document.createElement('input'); //idem pour les inputs
var label = document.createElement('label'); //idem pr les labels
var heure = document.createElement('p'); //idem pr le span contenant l'heure
var supp = document.createElement('a');

    liste.setAttribute("id", "elmtLi" + i);

    check.setAttribute("class", "filled-in"); //j'attribue une classe à mon élément check soit "input"
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "filled-in-box" + i); // +i permet d'incrémenter mon id

    label.setAttribute("for", "filled-in-box" + i);
    label.setAttribute("id", input); //ajout d'un id variable à chaque label pr sélection rayer

    heure.setAttribute("class", "affichageHeure");//attribution d'une classe à mon élément span

    supp.setAttribute("class", "waves-effect waves-light btn"); //attribution d'une classe à mon bouton

    label.innerHTML = input; //place la valeur de l'input (ajout tâche) dans le label
    i++; //va permettre d'incrémenter de 1 mes 2 i placés au-dessus
    heure.innerHTML = dateDeb.toLocaleDateString("fr-FR") + " - " + dateDeb.toLocaleTimeString("fr-FR") + "   ";//place l'heure dans le html avec une simplification permettant de la rendre lisible
    supp.innerHTML = "Supprimer";

    liste.appendChild(check); //attribution du check à mon li
    liste.appendChild(label);  //attribution du label à mon li
    liste.appendChild(heure); // attribution du span à mon li
    liste.appendChild(supp); //attribution du bouton à mon li
    ulToDo.appendChild(liste); //attribution des li à mon élément ul

    var okTask = check.addEventListener("click", doTask); //quand check est cliqué, il exécute la fonction suivante

    function doTask() {
        if(check.checked) { //si le bouton est coché
            document.getElementById(input).style.textDecoration="line-through"; //alors sélection du label et lui attribuer un css pour rayer
        }else { 
            document.getElementById(input).style.textDecoration="none"; //sinon il n'est pas rayé
        }
        
        var dateFin = new Date(); //création d'une date/horaire de fin(exécution de la task)

        temps = dateFin.getTime() - dateDeb.getTime(); //calcul du temps écoulé entre les 2 fonctions de création et de réalisation
        alert("Vous avez mis " + temps/1000 + " secondes."); //création d'une alerte permettant de visualiser le tps écoulé
    };

    var suppression = supp.addEventListener("click", doSupp);//lorsque le bouton supprimer est cliqué il exécute la fonction suivante

    function doSupp() {
        document.getElementById("list").removeChild(liste); //supprime les élèments li de la ul
        stockage.removeItem(input);
        alert("Tâche supprimée");
    };
    
    var restDo = document.getElementById('test1'); //sélection du bouton reste à faire
    var tachesOk = document.getElementById('test2');
    var allTask = document.getElementById('test3');

    suppNoTask = restDo.addEventListener("click", filtre); //qd reste à faire est cliqué exécution fction
    supptachesOk = tachesOk.addEventListener("click", filtre2);
    completeList = allTask.addEventListener('click', filtre3);
    

    function filtre() {
        if (check.checked) { //si bouton coché
            document.getElementById(input).parentElement.style.display = "none"; //exécute le cache des éléments cochés
        }else{
            document.getElementById(input).parentElement.style.display = ""; //sinon fait apparaître les éléments
        }
    };

    function filtre2() {
        if (!check.checked) { 
            document.getElementById(input).parentElement.style.display = "none"; 
        }else{
            document.getElementById(input).parentElement.style.display = "";
        }
    };

    function filtre3() {
            document.getElementById(input).parentElement.style.display = ""; //affiche toutes les tâches par défaut
    };
        //création du stockage des tâches dans le localstorage
        stockage.setItem(input, dateDeb);

    window.onload = function session() {
        
    };
};











