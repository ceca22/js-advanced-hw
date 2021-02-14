let body = document.querySelector('body');
console.log(body)

//log form
let userNameInput = document.querySelector('form').children[3];
let userPassInput = document.querySelector('form').children[7];
let adminInputLog =document.getElementById('adminYes');

console.log(adminInputLog)

let buttonLog = document.querySelector('form').lastElementChild;

//register 
let buttonReg = document.querySelectorAll('form')[1].lastElementChild;
let userName = document.getElementById('user-name-reg');
let userPass = document.getElementById('pass-reg');

let adminInput = document.getElementById('admin');


//current user paragraph
let currentUserParagraph = document.getElementById('currentUser');

//list of all the users

let listOfUsers = document.querySelector('div').firstElementChild;
console.log(listOfUsers);



function newUsers (userName, userPass, isAdmin) {

    this.userNameInput = userName;
    this.userPassInput = userPass;
    this.isAdmin = isAdmin;

}


let usersArray = [];

let currentUser = [];
console.log(currentUser)


// buttonLog.addEventListener('click', function(){
//     let userNameValue = userNameInput.value;
//     let userPassValue = userPassInput.value;
//     let userAdminValue 

    
//     if (adminInputLog.checked===true){
//         console.log(adminInputLog.value)
//         userAdminValue = adminInputLog.value;  
//     }


//     if (userNameValue.length > 3 && userPassValue > 6 && userAdminValue === true ) {
//         for (const user of usersArray){
//             listOfUsers.innerText += `
//         list of users ${userNameValue}, ${userPassValue}, ${userAdminValue}`
//         }
//         alert(`Welcome super admin ${userNameValue}`);
//     } else if (userNameValue.length > 3 && userPassValue > 6 && userAdminValue === "undefined"){
//         let currentUserLog = new newUsers(userNameValue, userPassValue, userAdminValue)
//         console.log(currentUserLog)
//             alert(`Hello ${userNameValue}! Welcome to MyPage!`);
//     } else {
//         alert('Username should be longer than 3 characters and Password should be longer than 6!')
//     }
//     userNameInput.value = ''
//     userPassInput.value = ''

// })
           


buttonReg.addEventListener('click', function(){
    console.log('im working')
    let userValue = userName.value;
    let passValue = userPass.value;
    let adminValue

    if (adminInput.checked===true){
        console.log(adminInput.checked)
        adminValue = adminInput.checked;
       
       console.log(adminValue);
    } else {
        adminValue = adminInput.checked
        console.log(adminInput.checked)
        
    }
    
    if (userValue.length > 3 && passValue.length > 6 ) {
        
            let newRegUser = new newUsers(userValue, passValue, adminValue)
            usersArray.push(newRegUser);
            currentUser.push(newRegUser);
            for (const user of list){     
                element.innerText = `Current User: ${user.userNameInput} Admin: ${user.isAdmin} `}
                
            console.log(currentUser);
            console.log(usersArray);

            alert(`Congratulations ${userValue}! You have successfully registered to MyPage!`);  

            // 
            
    }  else {
        alert ('Username should be longer than 3 characters and Password should be longer than 6!');

    }

    
   
})




