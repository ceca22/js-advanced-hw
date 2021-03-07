
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



//calculator exercise

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let button0 = document.getElementById('button0');

let buttonSubtract = document.getElementById('buttonSubtract');

let buttonMultiply = document.getElementById('buttonMultiply');

let buttonDivide = document.getElementById('buttonDivide');

let buttonSum = document.getElementById('buttonSum');

let buttonDot = document.getElementById('buttonDot');

let buttonEqualsTo = document.getElementById('buttonEqualsTo');


let deleteButton = document.getElementById('deleteOneNumber');
let deleteInput = document.getElementById('deleteInput');


let showOperation = document.getElementById('operation');
let calculateTheInput = document.getElementById('calculate');

button1.addEventListener('click', () => {
     
    showOperation.innerText += parseInt(1)  
})

buttonSum.addEventListener('click', () => {
    
    showOperation.innerText += '+'
})

buttonEqualsTo.addEventListener('click', () => {
    let result = showOperation
    calculateTheInput.innerText =result;
    console.log(showOperation)
    
})

deleteInput.addEventListener('click', () => {
    showOperation.innerText = "";
})

