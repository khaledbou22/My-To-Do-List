let body=document.body;

let par=document.getElementsByClassName("parent")[0];
let add=document.getElementsByClassName("add")[0];
let remove=document.getElementsByClassName("remove");
let removeall=document.getElementsByClassName("removeall")[0];
let todo=document.getElementsByClassName("todo")[0];
let inp=document.getElementsByTagName("input")[0];
let box=document.getElementsByTagName("input")[1];
let icon=document.getElementsByTagName("i")[2];
let counter=document.getElementById("counter");
let countcheck=document.getElementById("counter2");
let justcompleted=document.getElementById("justcompleted");
let search=document.getElementById("search");
let listofnocompleted=[""];

let x=0;


let i=0;
let error=document.createElement("section");
    error.textContent="Please enter a valid task!";
    error.style.color="red";
    error.style.display="none";
    inp.parentElement.appendChild(error);

add.addEventListener("click", function () {
          for(let k=0;k<todo.children.length;k++){
            if(inp.value===todo.children[k].children[0].innerHTML){
              error.style.display="block";
              return;
            }
          }
          
          if(inp.value.trim()){
            
                    error.style.display="none";
                    // div الكبير 
                    let nouv = document.createElement("div");
                    
                    nouv.style.display = "flex";
                    // حقل الكتابة 
                    let text = document.createElement("span");
                    text.textContent = inp.value;
                    // checkbox
                    
                    let check = document.createElement("header");
                    check.className = "check";
                    let checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    let section = document.createElement("section");
                    section.style.display = "none";
                    section.textContent = "completed";
                    section.style.fontSize="10px";
                    check.appendChild(checkbox);
                    check.appendChild(section);
                    
                    checkbox.addEventListener("change",function(){
                     
                      section.classList.toggle("box");
                      if(section.classList.contains("box")){
                        x=x+1;
                        countcheck.value=`you have ${x} completed tasks`;
                        nouv.classList.add("yes")
                      }
                      else{
                        x=x-1;
                        if(x>=0){

                          countcheck.value=`you have ${x} completed tasks`;
                        }
                        else{
                          x=0
                          countcheck.value=`you have ${x} completed tasks`;
                        }
                      }
                    })
                    // appear just no completed 
                    
                  //  la suppression
                    let del = document.createElement("span");
                    del.textContent = "remove";
                    del.className = "remove";
                    
                  
                    del.addEventListener("click", function () {
                      nouv.remove();
                      counter.value=`You have ${--i} tasks`
                       if(checkbox.checked==true){
                         x=x-1;
                        if(x>=0){

                          countcheck.value=`you have ${x} completed tasks`;
                        }
                        else{
                          x=0
                          countcheck.value=`you have ${x} completed tasks`;
                        }
                       }
                    });
                  //  modifications
                  let mod=document.createElement("nav");
                  mod.textContent="modify";
                  mod.className="mod";
                  mod.style.cssText=`
                          min-width: 50px;
                          min-height: 29px;
                          border-radius: 50px;
                          background: linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%);
                          box-sizing: border-box;
                          padding: 11px 7px;
                          cursor: pointer;
                  `
                  mod.addEventListener("click",function(){
                    inp.focus();
                      inp.value=text.textContent;
                      icon.classList.add("modcheck")
                  });
                  icon.addEventListener("click",function(){
                      text.textContent=inp.value;
                      inp.value="";
                      icon.classList.remove("modcheck");
                  })
                    nouv.appendChild(text);
                    nouv.appendChild(mod);
                    nouv.appendChild(check);
                    nouv.appendChild(del);
                    todo.appendChild(nouv);
                  
                    inp.value = "";
                    i++
                    counter.value=`You have ${i} tasks`;
                    //search
                  }
                  else{
                    error.style.display="block";
          }
        });
  
        removeall.addEventListener("click",function(){
          while (todo.firstChild) {
  todo.removeChild(todo.firstChild);
  counter.value=`You have 0 tasks`;
    countcheck.value=`you have 0 completed tasks`;
  }
})
let yes=document.getElementsByClassName("yes");
justcompleted.addEventListener("change",function(){
  let m=yes.length
  let p=i;
  let w=x;
  p=p-m
  w=w-m
  for(let y=0 ; y<m ; y++){
    yes[y].classList.toggle("no");
    if(yes[y].classList.contains("no")){
      counter.value=`You have ${p} tasks`
         countcheck.value=`you have 0 completed tasks`
        }
      else{
        counter.value=`You have ${i} tasks`
        countcheck.value=`you have ${x} completed tasks`
      }
    }
})
search.addEventListener("keyup",function(){
  for(let n=0 ; n<todo.children.length ; n++){
    j=0
    d=true
    if(search.value.length<=todo.children[n].firstChild.textContent.length){

      
      while(j<todo.children[n].firstChild.textContent.length && j<search.value.length && d){
        
        if(todo.children[n].firstChild.textContent[j]!=search.value[j]){
          d=false;
        }
        j++
      }
      if(d && search.value.length){
        todo.children[n].classList.add("sea")
      }
       else{
       todo.children[n].classList.remove("sea")
      }
      }
    
    else{
       todo.children[n].classList.remove("sea")
    }
  }
})
