 
function createNewUser(name, username, email) {
    
    if (name !== "" && username !== "" && email !== ""){
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            username: username,
            email: email
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(response => response.json())
    .then(function(convertedJson){
        console.log(convertedJson)
        let resultParagraph = document.getElementById('newUser')
        resultParagraph.innerText += `Name: ${convertedJson.name} 
        Username: ${convertedJson.username}
        E-mail: ${convertedJson.email}

        `
    })
    
    .catch(function(error){console.error(error)})
    
}
}

document.getElementById('buttonCreate').addEventListener('click', function(){

    let nameValue = document.getElementsByTagName('input')[0].value;
    console.log(nameValue)
    let lastNameValue = document.getElementsByTagName('input')[1].value;
    let emailValue = document.getElementsByTagName('input')[2].value;


    createNewUser(nameValue, lastNameValue, emailValue )

    document.getElementsByTagName('input')[0].value = ""
    document.getElementsByTagName('input')[1].value = ""
    document.getElementsByTagName('input')[2].value = ""


})