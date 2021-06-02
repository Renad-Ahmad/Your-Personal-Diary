
// let form = document.getElementById("myForm").submit();
//  let saveForm = document.getElementById("root").innerHTML=form;
let posts =[];
function submitFunction(){
    let form = document.getElementById("my-form"); 
    
    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];
        if(e.value != ""){
            posts.push(e.value);
            console.log(e.value);
            var btn = document.createElement("p");   
            btn.innerHTML = e.value;                   
            document.getElementById("root").appendChild(btn); 
        }
    }
     console.log(posts);
    
}
 



