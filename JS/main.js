const form = document.getElementById("my-form"); 
const allPosts = document.getElementsByClassName("all-posts");
// const date = Date().slice(0,21);

function add(){
  const date = Date().slice(0,21);
    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];
       
        if(e.value != ""){
            let div = document.createElement("div");
            let paragraph = document.createElement("p");
            let time = document.createElement("small");
            let remove = document.createElement("INPUT");
            let edit = document.createElement("INPUT");

            paragraph.innerHTML = e.value; 
            time.innerHTML = date + "\n";               
            div.appendChild(paragraph);
            div.appendChild(time); 

            remove.setAttribute("type", "button");
            remove.setAttribute("value","DELETE");
            remove.setAttribute("onclick","removeElement(this)");
            div.appendChild(remove); 

            edit.setAttribute("type", "button");
            edit.setAttribute("value","EDIT");
            edit.setAttribute("onclick","editElement(this)");
            div.appendChild(edit); 

            allPosts[i].appendChild(div);
        }
    }
}

function moveLastArrayElementToFirstIndex() {
  }


function removeElement(element){
    element.parentElement.parentElement
    .removeChild(element.parentElement);
}

function editElement(element){
    element.value = "DONE" ;
    element.setAttribute("onclick","doneEdit(this)");
    element.parentElement.firstChild.contentEditable = true;
}

function doneEdit(element){
    element.parentElement.firstChild.contentEditable = false;
    element.value = "EDIT" ;
    element.setAttribute("onclick","editElement(this)");
}

// function showPreviewOne(event){
//     if(event.target.files.length > 0){
//       let src = URL.createObjectURL(event.target.files[0]);
//       let preview = document.getElementById("file-ip-1-preview");
//       preview.src = src;
//       preview.style.display = "block";
//     } 
//   }
//   function myImgRemoveFunctionOne() {
//     document.getElementById("file-ip-1-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
//   }