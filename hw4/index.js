
let buttonOne = document.getElementById('firstButton')
let resultListOne = document.querySelector('div').lastElementChild
let newList


function makeCall(url){
    
    fetch(url)
        .then(response => response.json())
        .then(response => {
            newList = response.filter (res => res.averageGrade > 3)
            console.log('All students with an average grade higher than 3', newList)
            newList.map(student => resultListOne.innerHTML += `<li> Student: ${student.firstName} ${student.lastName} with average grade: ${student.averageGrade} </li>
            `)
            
        })
        
        .catch(error => {
                console.log('The request failed!');
                
        })
}



buttonOne.addEventListener('click', () => {

makeCall("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json");

})

//exercise 2


let resultListTwo =document.querySelectorAll('div')[1].lastElementChild
let buttonCheckTwo = document.getElementById('secondButton')
let newListTwo

function makeCallTwo(url) {
    fetch(url)
    .then(res => res.json())
    .then ( response => {
        newListTwo = response.filter (res => res.averageGrade >= 2 && res.averageGrade <= 5)
        console.log('All students with an average grade between 2 and 5', newListTwo);
        newListTwo.map(student => resultListTwo.innerHTML += `<li> Student: ${student.firstName} ${student.lastName} with GRADE: ${student.averageGrade} </li>`)
        
    })
    
    .catch(error => console.error(error))
}


buttonCheckTwo.addEventListener('click', () => {
    makeCallTwo("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json");
})

// exercise 3

let thirdDiv = document.getElementById('three')
let resultListThree = thirdDiv.lastElementChild
let buttonCheckThree = document.getElementById('thirdButton')
let newListThree

function makeCallThree(url) {
    fetch(url)
        .then(response => response.json())
        .then( response => {
            newListThree = response.filter (res => res.gender === "Female" && res.averageGrade === 5 )
                console.log('All female student names with an average grade of 5', newListThree);

                newListThree.map(student => { resultListThree.innerHTML += `<li> FEMALE Student: ${student.firstName} ${student.lastName} with grade of ${student.averageGrade} </li>
                `})
            }
                
        )
        .catch(error => console.error(error))
    
}

buttonCheckThree.addEventListener('click', () => {
    makeCallThree('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json')
})


// exercise 4


let resultListFour = thirdDiv.nextElementSibling.lastElementChild
console.log(resultListFour);
let buttonCheckFour = document.getElementById('forthButton');
let newListFour 


function makeCallFour(url) {
    fetch(url)
    .then(response => response.json())
    .then (response => {
        newListFour = response.filter(res => res.gender === "Male" && res.city === "Skopje" && res.age > 18)
        console.log('All male student full names who live in Skopje and are over 18 years old',newListFour)
        newListFour.map(student => { resultListFour.innerHTML += `<li>Male Student: ${student.firstName} ${student.lastName} age of ${student.age} </li>
        `})
    })
    
    .catch(error => console.error(error))
}


buttonCheckFour.addEventListener('click', () => {
    makeCallFour('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json');
})


// exercise 5


let resultListFifth = document.getElementById('fifth').lastElementChild
let buttonCheckFive = document.getElementById('fifthButton')
let newListFive

function makeCallFive(url){
    fetch(url)
    .then(response => response.json())
    .then(response => {
        newListFive = response.filter (res => res.age > 24 && res.gender === "Female")
        console.log('The average grades of all female students over the age of 24', newListFive)
        newListFive.map(student => resultListFifth.innerHTML += `<li> Student:${student.firstName} ${student.lastName} average grade: ${student.averageGrade} </li>`)


    })
    .catch(error => console.error(error))
}

buttonCheckFive.addEventListener('click', () => {
    makeCallFive('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json')
});



//  exercise 6

let resultListSix = document.getElementById('six').lastElementChild;
let buttonCheckSix = document.getElementById('sixButton');

let startWithB = [];

function makeCallSix(url){
    fetch(url)
    .then(response => response.json())
    .then(response => {
        
        response.map(res => {
            if(res.firstName.startsWith('B') && res.averageGrade > 2 && res.gender === "Male")
                startWithB.push(res)

                return startWithB
            })
            startWithB.map(student => resultListSix.innerHTML += `Male student: ${student.firstName} ${student.lastName} with grade: ${student.averageGrade}
            `)
            console.log('Males whose name starts with B', startWithB)
            
            
        }
    )
    .catch(error => console.error(error))
}

function hasLInTheNameFunction (student) {
    
    resultListSix.innerHTML += 'YAY'
    resultListSix.innerHTML += `<li> ${student.firstName} </li>`
}

buttonCheckSix.addEventListener('click', () => {
    
    makeCallSix('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json')
    
});

//exercise 7

let buttonCheckSeven = document.getElementById('sevenButton');
let hasLInTheName = [];
let resultSevenList = document.getElementById('resultListSeven');

function makeCallSeven (url) {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        
        response.map(res => {
            if(res.gender === "Female" && res.age > 16 && res.city === "Skopje" && res.lastName.includes("L") && res.lastName.includes("l")){
                hasLInTheName.push(res)
                return hasLInTheName
            }
        })
        if ( hasLInTheName.length < 1){
            resultSevenList.innerText += `No such students`
        } else {
            resultSevenList.innerText += hasLInTheName
        }
        
        console.log(hasLInTheName)
    })
        
    
}

buttonCheckSeven.addEventListener('click', () => {
    
    makeCallSeven('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G4/Class%2007%20-%20Under%20the%20hood/Homework/students.json')
    

})

// exercise 8!!!!!!!!!!! promise

let num1 = document.getElementsByTagName('input')[0]
let num2 = document.getElementsByTagName('input')[1]

let buttonCheckEight = document.getElementById('buttonEight');



function multiply(num1,num2) {
    return new Promise((resolved, rejected) => {
        
        if( isNaN(num1) || isNaN(num2) ){
            rejected("Please try again!")
        } else {
            resolved( num1 * num2)
        }
 
    })
}


buttonCheckEight.addEventListener('click', () => {
    
    let number1 = parseInt(num1.value)
    let number2 = parseInt(num2.value)
    

    multiply(number1, number2)

        .then(success => {
        console.log("Exercise 8(promise) Result is:", success);
        
        })
        .catch(error => console.error('Exercise 8(promise) Result is:',error))
        .finally(() => console.log('Finally wants to let you know that at least some of the code is working. Good job!'))

    })

//exercise9 !!!!! promise

console.log('---Exercise9----promise with ajax')


function getUsersData() {
    // debugger;
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: (response) => {
                // debugger;
                resolved(response);
            },
            error: (error) => {
                // debugger;
                rejected(error);
            }
        })
    })
}

function checkData(documents) {
    //debugger;
   if (!documents || typeof(documents) !== "object"){
       throw new Error("Problem with the data!");
   }
   if (documents.length === 0) {
       throw new Error("Problem no USERS found");
   }
}


function getUserNameData(data) {
    // debugger;
    let getUserName = data.filter(user => user.name);

    return new Promise((resolved, rejected) => {
        if (getUserName.length === 0) {
            // debugger;
            rejected("There are no users");
        }
        else {
            // debugger;
            setTimeout(() => { resolved(getUserName) });
        }
    })
}

function printUsers(data) {
    data.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name}`);
    })
}

getUsersData()
    .then(data => {
        // debugger;
        console.log("Successful promise", data);
        checkData(data);
        return getUserNameData(data)
    })
    .then(userName => printUsers(userName))
    .catch(error => console.error(error))
    .finally(() => console.log(`finally says HI`))


