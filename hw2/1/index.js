
function printAlbum23(album, storeResult) {
      
  storeResult.innerText += `Id: ${album.id}, Title: ${album.title}`;
      
  }


document.getElementById('button').addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/albums/23")
      .then(response => response.json())
      .then(result => {
        let resultParagraph = document.getElementById('list');

        printAlbum23(result, resultParagraph)
      })
      .catch(error => console.error(error))
  })


function printUser10(user, storeResultsOfUser10){


  storeResultsOfUser10.innerText += `User ID: ${user.id},
  Name: ${user.name}

  Username: ${user.username}

  E-mail: ${user.email}

  Address(street): ${user.address.street}, suite: ${user.address.suite}, ${user.address.city}, ZIP-CODE: ${user.address.zipcode}

  Geo: ${user.address.geo.lat}, ${user.address.geo.lng}

  Phone Number:${user.phone}

  Website: ${user.website}

  Company: ${user.company.name}, catch-phrase: ${user.company.catchPhrase}, bs: ${user.company.bs}
  `
}

document.getElementById('displayBtn').addEventListener('click', function(){
  fetch("https://jsonplaceholder.typicode.com/users/10")
  .then(response => response.json())
  .then(result => {
    let resultParagraphOfUser10 =document.getElementById('user10')

    printUser10(result, resultParagraphOfUser10)
  })
  .catch(error => console.error(error))
})