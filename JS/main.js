
//returns the form with the id my-form and the div with class all-posts
const form = document.getElementById("my-form"); 
const allPosts = document.getElementsByClassName("all-posts");

//function to add a new post 
function add(){
 //to creates current Date
  const date = Date().slice(0,21);
  
  //to loop over the input elements in the form
    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];
       
       //if the input not empty 
        if(e.value != ""){
    
            //creat new div where we will add the 
            //new paragraph and new time and new buttons
            let div = document.createElement("div");
            let paragraph = document.createElement("p");
            let time = document.createElement("small");
            let remove = document.createElement("INPUT");
            let edit = document.createElement("INPUT");

            //add the input from the form to the new paragraph 
            //+ add the time
            paragraph.innerHTML = e.value; 
            time.innerHTML = date + "\n";               
            div.appendChild(paragraph);
            div.appendChild(time); 

            //add delete button
            remove.setAttribute("type", "button");
            remove.setAttribute("value","DELETE");
            remove.setAttribute("onclick","removeElement(this)");
            div.appendChild(remove); 

            //add edit button
            edit.setAttribute("type", "button");
            edit.setAttribute("value","EDIT");
            edit.setAttribute("onclick","editElement(this)");
            div.appendChild(edit); 
            
            //add the new div we just created to all-posts div
            allPosts[i].appendChild(div);
        }
    }
}


function removeElement(element){
    //the button.the new div.all-posts div
    //child  .parent     .parent
    element.parentElement.parentElement
               //button.new div
    .removeChild(element.parentElement);
}

function editElement(element){
    //change the value of the button
    element.value = "DONE" ;
    //call done edit function
    element.setAttribute("onclick","doneEdit(this)");
    //Specifies that the element is editable
    element.parentElement.firstChild.contentEditable = true;
}

function doneEdit(element){
    //Specifies that the element is not editable
    element.parentElement.firstChild.contentEditable = false;
    //change back the value of the button
    element.value = "EDIT" ;
    //call the edit function
    element.setAttribute("onclick","editElement(this)");
}