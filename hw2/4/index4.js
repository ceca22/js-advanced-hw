



function checkAll (item, index){
    deletedTODO.innerText += `${item} : ${index}`
}

document.getElementById('deleteBtn').addEventListener('click', function(){
    let randomNumber = (Math.floor(Math.random() * 201))
    console.log(randomNumber)

    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`, {
        method: "DELETE",
    })
    .then(response => response.json())
    .then ( result => {
        let deletedTODO = document.getElementById('deletedPost')
        console.log(result)
        deletedTODO.innerText +=`Random number is : ${randomNumber} `

       
        })
        .catch(error => console.error(error))
        
    })
 
    

    
