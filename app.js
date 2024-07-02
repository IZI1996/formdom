const lorg= document.getElementById("lorganisme");
const diplom=document.getElementById("diplome");
const date=document.getElementById("date") 
const item1=document.querySelectorAll(".item1") 





const btndeletes=document.querySelectorAll(".delete")


function Validate(){
   if(lorg.value === "" || diplom.value ==="" || date.value ===""){
       alert('est obligatoire de remplir la zone de texte.')
   }
}

function Ajouter(){
let  li = document.createElement("li");
let p=document.createElement("p") 
let btn = document.createElement("button");
let i = document.createElement('i');


i.className = "fas fa-trash-alt";
btn.className = "delete";
li.className= "item1";
p.innerHTML = todo.value;
li.appendChild(p)
li.appendChild(btn)
btn.appendChild(i)

document.getElementById("todos-list").appendChild(li);
}


btndeletes.forEach(function(btn){
  btn.addEventListener("click",function(){
    let myobj = btn.parentNode;
    let nextjs= myobj.nextElementSibling;
     myobj.remove()
     nextjs.remove()
  

})
})
