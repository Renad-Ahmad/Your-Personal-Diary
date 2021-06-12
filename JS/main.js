const form = document.getElementById("my-form"); 
const allPosts = document.getElementsByClassName("all-posts");
const date = Date().slice(0,21);

function add(){
    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];
        if(e.value != ""){

            let div = document.createElement("div");
            let paragraph = document.createElement("p");
            let remove = document.createElement("INPUT");
            let edit = document.createElement("INPUT");

            paragraph.innerHTML = e.value + "\n" + date ;                 
            div.appendChild(paragraph);

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

// function moveLastArrayElementToFirstIndex(this_array) {
//     let new_array = new Array();
//     new_array[0] = this_array[this_array.length - 1];     
//     for (i = 1; i < this_array.length; i++) { 
//       new_array[i] = this_array[i - 1];
//     }
//     return new_array;
//   }

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

