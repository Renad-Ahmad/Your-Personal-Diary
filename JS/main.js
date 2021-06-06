let posts = [];

function add(){
    let form = document.getElementById("my-form"); 
    //const date = new Date().toTimeString().split(" ")[0];
    const date = Date().slice(0,21);

    
    for(let i = 0; i < form.elements.length; i++){
       let e = form.elements[i];

        if(e.value != ""){
            posts.push(e.value);

            let paragraph = document.createElement("p");
            paragraph.innerHTML = e.value + "\n" + date ;                 
            document.getElementById("root").appendChild(paragraph);

            let remove = document.createElement("INPUT");
            remove.setAttribute("type", "button");
            remove.setAttribute("value","DELETE")
            remove.setAttribute("onclick","remove()")
            document.getElementById("root").appendChild(remove); 
        }
    }
    console.log(posts); 
}

function remove(){
    posts.map((item, index) => {
        console.log( item +" " + index )  
        return posts.splice(index, 1);
      })
}


