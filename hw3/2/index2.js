//exercise 2 Write a function that will reverse a string as output (any string), using recursion e.g. Hello -> olleH
let wordInput = document.getElementById('wordInput');

let buttonCheck = document.getElementById('buttonCheckTwo');
let resultParagraph = document.getElementById('resultTwo');

let reverse = (string) => {
    debugger;
    if (string === ""){
      return ""
    } else {
        return reverse(string.substr(1)) + string.charAt(0);
        
    }
      
}

buttonCheck.addEventListener('click', () => {
    wordValue = wordInput.value;

    let result = reverse(wordValue);
    resultParagraph.innerText += ` ${result}
    ` 
    wordInput.value = " ";
});





//exercise 3 Write a function that will take two arguments. First argument should be a sentence, second one should be one word. Return how many times the word had appeared in that sentence. e.g appearance('This was a hot summer, and a very dry one', 'a') -> should return that 'a' was present 2 times.


let firstInput = document.getElementById('sentence');

let secondInput = document.getElementById('word');

let buttonCheckThree = document.getElementById('buttonCheckThree');

let resultParagraphThree = document.getElementById('three').lastElementChild;

let checkWord = (sentence, word, result) => {
    let resultNumber = sentence.split(word).length - 1 ;
    result.innerText += ` The "${sentence}" contains "${word}" ${resultNumber} times
    `
}

buttonCheckThree.addEventListener('click', () => {
    sentenceValue = firstInput.value;
    wordValue = secondInput.value;

    checkWord(firstInput.value, secondInput.value, resultParagraphThree);
})

//exercise 4 Using recursive function do the function that will calculate Fibonacci sequence for any number. fibonacciSequence(n) (where n is positve real number) and print the result. e.g fibonacciSequence(8) -> should return array of following numbers 0, 1, 1, 2, 3, 5, 8, 13, 21


function fibonacci(num) {
    debugger
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}


const takeInput = prompt('Enter the number of terms: ');

if(takeInput <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < takeInput; i++) {
        console.log(fibonacci(i));
    }
}


//bonus table

let inputColumns = document.getElementById('columnNumber');

let inputRows = document.getElementById('rowNumber');

let createTable = document.getElementById('createTableButton');

let tableElement = document.getElementById('tbody')
console.log(tableElement)



let row = document.createElement('row')
let column = document.createElement('td')


createTable.addEventListener('click', () => {
    console.log('im in')
    console.log(inputRows.value)

    debugger;
    for (let i=0; i < inputRows.value; i++) {
        
        tableElement.innerHTML += `<tr> ${i} </tr>` 
        
        for (let j=0; j < inputColumns.value; j++){
            tableElement.innerHTML += `<td> ${j} </td>`
        }
    }


})



//calculator exercise

// let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
// let button3 = document.getElementById('button3');
// let button4 = document.getElementById('button4');
// let button5 = document.getElementById('button5');
// let button6 = document.getElementById('button6');
// let button7 = document.getElementById('button7');
// let button8 = document.getElementById('button8');
// let button9 = document.getElementById('button9');
// let button0 = document.getElementById('button0');

// let buttonSubtract = document.getElementById('buttonSubtract');

// let buttonMultiply = document.getElementById('buttonMultiply');

// let buttonDivide = document.getElementById('buttonDivide');

// let buttonSum = document.getElementById('buttonSum');

// let buttonDot = document.getElementById('buttonDot');

// let buttonEqualsTo = document.getElementById('buttonEqualsTo');


// let deleteButton = document.getElementById('deleteOneNumber');
// let deleteInput = document.getElementById('deleteInput');


// let showOperation = document.getElementById('operation');
// let calculateTheInput = document.getElementById('calculate');

// button1.addEventListener('click', () => {
     
//     showOperation.innerText += parseInt(1)  
// })

// buttonSum.addEventListener('click', () => {
    
//     showOperation.innerText += '+'
// })

// buttonEqualsTo.addEventListener('click', () => {
//     let result = showOperation
//     calculateTheInput.innerText =result;
//     console.log(showOperation)
    
// })

// deleteInput.addEventListener('click', () => {
//     showOperation.innerText = "";
// })







