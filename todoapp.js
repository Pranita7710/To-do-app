let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document .querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("delete");
    item.appendChild(deletebtn);

    console.log(inp.value);
    inp.value="";
})


//event delegation
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    
   }
})
// let deletebtns=document.querySelectorAll(".delete");
// let item=document.querySelector("li");
// for(deletebtn of deletebtns){
//     deletebtn.addEventListener("click",function(){
//          console.log("element deleted");
//          let par=this.parentElement;
//          console.log(par);
//          par.remove();
//     })
// }
