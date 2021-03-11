

let usernameInput = document.getElementById('userName')

let userPasswordInput = document.getElementById('passInput')

let isAdminInput = document.getElementById('checkboxInput')

let buttonRegister = document.querySelector('div').lastElementChild

let resultParagraphReg = document.getElementById('resultNewReg')



function newUser (username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;

}


let newUsers = []

// function printNewReg(listNewReg, element){
//     for (const newReg of listNewReg){
//         element.innerText += ` ${newReg.username}
//         `
//     }
// }

buttonRegister.addEventListener('click', () => {
    //debugger
    let usernameValue = usernameInput.value;
    let userPasswordValue = userPasswordInput.value;
    let isAdminValue = isAdminInput.value



    if(usernameValue.length > 3 && userPasswordValue.length > 6) {
        let newRegister = new newUser(usernameValue, userPasswordValue, isAdminValue)
        newUsers.push(newRegister)
        console.log(newUsers)

    } else {
        alert('Username should be longer than 3 characters and Password should be longer than 6!');
    }

    
    
    usernameInput.value = "";
    userPasswordInput.value = "";
    
    
})

let usernameLogIn = document.getElementById('userLogin')
let passwordLogIn = document.getElementById('passLogin')
let buttonLogIn = document.getElementById('buttonLogin')
let currentUserDiv = document.getElementById('logOutSection')

let currentUser = {}

buttonLogIn.addEventListener('click', () => {
    let usernameLogInValue = usernameLogIn.value
    let passwordLogInValue = passwordLogIn.value


    for ( const user of newUsers){
        if ( usernameLogInValue === user.username && passwordLogInValue === user.password) {
            console.log(user.username)
            alert(`Welcome to Your Page ${user.username}!`)
            currentUser = user
            console.log(currentUser)
            currentUserDiv.innerHTML = ` <p>Current user: ${user.username} </p>
             `
           

        } else 
            continue


       
    }
    
    usernameLogIn.value = ""
    passwordLogIn.value = ""

})

let logOutButton = document.getElementById('logOut')


logOutButton.addEventListener('click', () => {
    
    if ( Object.keys(currentUser).length !== 0) {
        currentUser = {};
        console.log(currentUser)
        currentUserDiv.innerHTML = 'No current user'
    }
})