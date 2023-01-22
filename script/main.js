function doMessage(){
    document.getElementById("loading").classList.add("active");

    const request = new Request("https://eoeliqvz91apv4l.m.pipedream.net", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify({
            clue : document.getElementById("clue").value,
            message : document.querySelector("textarea").value,
        }),        
    })

    const response = fetch(request);
    response
        .then(function(response){
            response.json();
        })  
        .then(function (json) {
            document.getElementById("loading").classList.remove("active");
            alert("Sending Succes");
            document.forms["form-clue"].reset();
        })
        .catch(function (e){
            alert(`${e}`);
            document.forms["form-clue"].reset();
        })
}


document.forms["form-clue"].onsubmit = function(event){
    event.preventDefault();
    doMessage();
    
}

