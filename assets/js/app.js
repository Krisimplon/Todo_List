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
    label.setAttribute("id", "labelbis" + i)
    label.innerHTML = input; //place la valeur de l'input (ajout tâche) dans le label
    i++; //va permettre d'incrémenter de 1 mes 2 i placés au-dessus

    liste.appendChild(check); //attribution du check à mon li
    liste.appendChild(label); 
    ulToDo.appendChild(liste); //attribution des li à mon élément ul
 

    check.addEventListener("click", doTask);
    
    function doTask() {
        console.log(this.id);
        document.getElementById('labelbis'+ (i-1)).style.textDecoration="line-through";
    };

    };










