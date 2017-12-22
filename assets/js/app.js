console.log('connect')

alert("Welcome!");

var bouton = document.getElementById("bouton"); //je capture mon bouton
var ulToDo = document.getElementById("list"); //je capture mon élément ul dans le html
var i = 0; //pr incrémenter chaque id

bouton.addEventListener("click", addTask); //quand je clique sur le bouton, j'exécute la fonction ci-dessous

function addTask() {
    var input = document.getElementById("search").value; //je récupère dans une variable la valeur de mon input
    console.log(input);

    var liste = document.createElement('li'); //je créé des éléments de liste 'li' pr chq fction lancée
    var check = document.createElement('input'); //idem pour les inputs
    var label = document.createElement('label'); //idem pr les labels

    check.setAttribute("class", "filled-in"); //j'attribue une classe à mon élément check soit "input"
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "filled-in-box" + i); // +i permet d'incrémenter mon id

    label.setAttribute("for", "filled-in-box" + i);
    label.setAttribute("id", input); //ajout d'un id variable à chaque label pr sélection rayer

    label.innerHTML = input; //place la valeur de l'input (ajout tâche) dans le label
    i++; //va permettre d'incrémenter de 1 mes 2 i placés au-dessus

    liste.appendChild(check); //attribution du check à mon li
    liste.appendChild(label); 
    ulToDo.appendChild(liste); //attribution des li à mon élément ul
 

    var okTask = check.addEventListener("click", doTask); //quand check est cliqué, il exécute la fonction suivante
    
    function doTask() {
        document.getElementById(input).style.textDecoration="line-through"; //sélection du label et lui attribuer un css pour rayer
    };
    
    var restDo = document.getElementById('test1'); //sélection du bouton reste à faire
    var tachesOk = document.getElementById('test2');
    var allTask = document.getElementById('test3');

    suppNoTask = restDo.addEventListener("click", filtre); //qd reste à faire est cliqué exécution fction
    supptachesOk = tachesOk.addEventListener("click", filtre2);
    completeList = allTask.addEventListener('click', filtre3);
    

    function filtre() {
        if (check.checked) { //si bouton coché
            document.getElementById(input).style.display = "none"; //exécute le cache des éléments cochés
        }else{
            document.getElementById(input).style.display = ""; //sinon fait apparaître les éléments
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
};










