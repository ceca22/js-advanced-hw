




document.getElementById('buttonPress').addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then (response => response.json())
    .then ( albums => {
        let resultParagraph = document.getElementById('result');
        
        for ( const titleOfAlbum of albums){
            if(titleOfAlbum.title.includes("omnis")){
                
                resultParagraph.innerHTML += `<li> ${titleOfAlbum.title} </li>
            ` 
            } 
            
        }
    })
    .catch(error => console.error(error))
}) 

