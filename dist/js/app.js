function addTask(){var e=document.getElementById("search").value,t=new Date,n=document.createElement("li"),l=document.createElement("input"),d=document.createElement("label"),o=document.createElement("span"),c=document.createElement("a");n.setAttribute("id","elmtLi"+i),l.setAttribute("class","filled-in"),l.setAttribute("type","checkbox"),l.setAttribute("id","filled-in-box"+i),d.setAttribute("for","filled-in-box"+i),d.setAttribute("id",e),o.setAttribute("class","affichageHeure"),c.setAttribute("class","waves-effect waves-light btn"),d.innerHTML=e,i++,o.innerHTML=" "+t.toLocaleDateString("fr-FR")+" "+t.toLocaleTimeString("fr-FR")+" ",c.innerHTML="Supprimer",n.appendChild(l),n.appendChild(d),n.appendChild(o),n.appendChild(c),ulToDo.appendChild(n);l.addEventListener("click",function(){document.getElementById(e).style.textDecoration="line-through";var n=new Date,i=n.toLocaleDateString("fr-FR")+" "+n.toLocaleTimeString("fr-FR");console.log(i),temps=n.getTime()-t.getTime(),console.log(temps/1e3),alert("Vous avez mis "+temps/1e3+" secondes.")}),c.addEventListener("click",function(){document.getElementById("list").removeChild(n)});var s=document.getElementById("test1"),a=document.getElementById("test2"),m=document.getElementById("test3");suppNoTask=s.addEventListener("click",function(){l.checked?document.getElementById("elmtLi").style.display="none":document.getElementById("elmtLi").style.display=""}),supptachesOk=a.addEventListener("click",function(){l.checked?document.getElementById(e).style.display="":document.getElementById(e).style.display="none"}),completeList=m.addEventListener("click",function(){document.getElementById(e).style.display=""});localStorage.setItem(e,JSON.stringify(i))}console.log("connect"),alert("Welcome!");var bouton=document.getElementById("bouton"),ulToDo=document.getElementById("list"),i=0;bouton.addEventListener("click",addTask);