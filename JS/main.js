let posts = [];
function submitFunction(){
    let form = document.getElementById("my-form"); 
    //const date = new Date().toTimeString().split(" ")[0];
    const date = Date().slice(0,21);


    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];

        if(e.value != ""){
            posts.push(e.value);
            var btn = document.createElement("p");   
             btn.innerHTML = e.value + "\n" + date;                 
            document.getElementById("root").appendChild(btn); 
        }
    }
}




