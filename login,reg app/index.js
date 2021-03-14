

let usernameInput = document.getElementById('userName')

let userPasswordInput = document.getElementById('passInput')

let isAdminInput = document.getElementById('checkboxInput')

let buttonRegister = document.querySelector('div').lastElementChild

let listReg = document.getElementById('resultNewReg')



function newUser (username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;

}


let newUsers = []

function printNewReg(listNewReg, element){
    element.innerHTML += ` <h1>List of registered users!</h1>
        `
    for (const newReg of listNewReg){
        
        element.innerHTML += ` <li> ${newReg.username}  </li>
        `
    }
}

buttonRegister.addEventListener('click', () => {
    //debugger
    let usernameValue = usernameInput.value;
    let userPasswordValue = userPasswordInput.value;
    let isAdminValue = isAdminInput.checked



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
        if (usernameLogInValue === user.username && passwordLogInValue === user.password && user.isAdmin === true) {
            currentUser = user
            alert(`Welcome to Your Page Admin ${user.username}!`)
            console.log(newUsers)
            printNewReg(newUsers, listReg)
            
        } else if ( usernameLogInValue === user.username && passwordLogInValue === user.password) {
            console.log(user.username)
            alert(`Welcome to Your Page ${user.username}!`)
            currentUser = user
            console.log(currentUser)
            currentUserDiv.innerHTML = ` <p>Current user: ${user.username} </p>
             `

        }  
            continue

       
    }

    if(Object.keys(currentUser).length === 0){
        alert('There is no such user')
    }
    
    usernameLogIn.value = ""
    passwordLogIn.value = ""

})

let logOutButton = document.getElementById('logOut')


logOutButton.addEventListener('click', () => {
    
    if ( Object.keys(currentUser).length !== 0) {
        currentUser = {};
        console.log('Current user:', currentUser)
        currentUserDiv.innerHTML = '<h1>No current user</h1>'
    }
})