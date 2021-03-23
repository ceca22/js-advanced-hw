
//arrays with animals
let cattleArray = [];
let horseArray = [];
let chickenArray = [];

//images za release animals function
let cattleImage = '<img src="images/cow 1.jpg" alt="cow" width="100"  class="cattleFarm"   />'
let horseImage = '<img src="images/horse.jpg" alt="horse1" width="100"  class="horseFarm"   />'
let chickenImage = ' <img src="images/chicken.jpg" alt="chicken" width="100"   class="imageFarm"   />'

//notification panel and release the animal panel
let dutiesOfTheFarmer = document.getElementById('duties')
let farmAnimal = document.getElementById('typeOfAnimal')

let submitButton = document.getElementsByTagName('button')[1]

let divAnimal =document.getElementById('animal');
let infoAboutAnimals = document.getElementById('infoAboutAnimals')
let clearButton = document.getElementById('clearButton')

//product panel
let productList = document.getElementById('productList')
let bucketMilkCattle = document.getElementById('bucketMilk')
let buyerBtn = document.getElementById('buyersBtn')
let eggCount = document.getElementById('eggCount')

//potential buyers panel
let buyersUrl = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json'
let potentialBuyers = document.getElementById('potentialBuyer');
let potentialBuyer2 = document.getElementById('potentialBuyer2');
let sellBtn = document.getElementById('sellBtn')
let moneyCount = document.getElementById('moneyCount')



class FarmAnimal  {
    constructor (name, type, quantity, product, weight, insideTheFarm) {
        this.name = name;
        this.typeOfAnimal = type;
        this.quantity = quantity;
        this.product = product;
        this.weight = weight;
        this.insideTheFarm = insideTheFarm;
    }    

    static feedTheAnimals(obj) {
        debugger
        if(obj.name === 'Horse' || obj.name === 'Cattle')
        obj.weight += 100
        if(obj.name === 'Chicken')
        obj.weight += 0.2
    
    }
}


function infoAboutTheStock(animalArray, result) {
    result.innerHTML += `Our farm owns:`
    animalArray.map(animal => {
        result.innerHTML += `<p>${animal.typeOfAnimal}-QUANTITY:total of ${animal.quantity} and WEIGHT:${animal.weight} kg</p>`
        
        return
    })
    result.innerHTML += `<hr color='green' />`
}



class CattleAnimal extends FarmAnimal {
    constructor( name, type, quantity, product, weight, insideTheFarm, favoriteFood, color, productCount ) {
        super(name, type, quantity, product, weight,insideTheFarm )

        this.favoriteFood = favoriteFood;
        this.color = color;
        
        this.productCount = productCount;
        
    }
    static milkTheCows(obj) {
        //debugger;
        
            for(let i=0; i < obj.quantity; i++){
                if(obj.weight >= 900){
                    productList.innerHTML += `<li> <img src="images/milk bucket.jpg" alt="bucket of milk" width="100"> </li>
                    <li><img src="images/milk bucket.jpg" alt="bucket of milk" width="100"></li>
                    <hr color='pink' />`
            }}
                    

            if(obj.weight >= 900) {
                obj.productCount +=(obj.quantity)* 2;
                obj.weight -= 50;
                infoAboutAnimals.innerHTML += `
                        <li> The ${obj.typeOfAnimal} now weights ${obj.weight} kg  </li>`
            }     else {
                infoAboutAnimals.innerHTML += `<li>Your cattle (${obj.typeOfAnimal}) has not been fed enough and is too week to be milked! </li>`
            }

            infoAboutAnimals.innerHTML += `<hr color='pink' />`
    }

}



//deklariranje na kravi i nivno zacuvuvanje vo niza
let angusCattle = new CattleAnimal('Cattle', 'Angus Cattle', 3, 'meat and milk products', 900, true, 'grass', 'black',0 )

let beltedGalloway = new CattleAnimal('Cattle', 'Oreo Cattle', 2, 'beef', 1000, true, 'hay and grass', 'black and white belt',0 )

let charolais = new CattleAnimal('Cattle', 'Charolais Cattle', 4, 'milk and meat', 850, true, 'grass', 'white or red',0 )

let hereford = new CattleAnimal('Cattle', 'Hereford Cattle',5, 'milk and leaner meat', 800, true, 'grass', 'brown and white',0)
cattleArray.push(angusCattle)
cattleArray.push(beltedGalloway)
cattleArray.push(charolais)
cattleArray.push(hereford)




class HorseAnimal extends FarmAnimal {
    constructor( name, type, quantity, product, weight, insideTheFarm, price){
        super( name, type, quantity, product, weight, insideTheFarm)

        this.price = price;
    }
}


//deklariranje na konji i nivno zacuvuvanje vo niza
let AmericanCreamDraft = new HorseAnimal('Horse','American Cream Draft', 3, 'none', 700, true, 3500)
let RussianHeavyDraft = new HorseAnimal('Horse','Russian Heavy Draft', 4, 'none', 800, true, 3100)
let ShireHorse = new HorseAnimal ('Horse','Shire Horse', 5, 'none', 900, true, 3700)

horseArray.push(AmericanCreamDraft)
horseArray.push(RussianHeavyDraft)
horseArray.push(ShireHorse)




class ChickenAnimal extends FarmAnimal {
    constructor( name, type, quantity, product, weight, insideTheFarm, productCount){
        super(name, type, quantity, product, weight, insideTheFarm)

        this.productCount = productCount;
    }

    static collectTheEggs (obj) {
        debugger
        for(let i=0; i < obj.quantity; i++){
                productList.innerHTML += `<li> <img src="images/egg.jpg" alt="sheep" width="75"   class="imageFarm"   /> </li>`
        }
        return obj.productCount += obj.quantity * 1
    }
}

//definiranje na kokoshki i nivno zacuvuvanje vo niza
let RhodeIslandRed = new ChickenAnimal('Chicken', 'Rhode Island Red', 20, 'eggs', 3.5 , true, 0)
let SebrightChicken = new ChickenAnimal('Chicken','Sebright Chicken', 22, 'eggs', 0.65, true, 0 )
chickenArray.push(RhodeIslandRed);
chickenArray.push(SebrightChicken);





function releaseTheAnimal (animalArray, result, image, result2) {
    
    animalArray.map(animal => {
        if(animal.insideTheFarm === true)
        if(animal.name === 'Cattle' || animal.name === 'Horse') {
            for(let i=0; i < animal.quantity; i++){
                
                result.innerHTML += ` ${image} ${animal.typeOfAnimal}`
                result.innerHTML += `<hr color="red" />`
                animal.insideTheFarm = false;
                // animal.weight += 50;
                // result2.innerHTML += `<li>The ${animal.typeOfAnimal} now weights ${animal.weight}</li>`
                console.log(animalArray)
                }  
        } else  if(animal.insideTheFarm === true) {
            for(let i=0; i < animal.quantity; i++){
                
                result.innerHTML += ` ${image} ${animal.typeOfAnimal}`
                result.innerHTML += `<hr color="red" />`
                animal.insideTheFarm = false; }  
        } else {
            result2.innerHTML += `<li style="color:red">The ${animal.typeOfAnimal} is already outside! </li>`
            result2.innerHTML += `<hr color="red" />`
        }
    })
   
}


    
function feedTheAnimals(animalArray, result) {
    
    animalArray.map(animal => {
        if(animal.insideTheFarm){
            FarmAnimal.feedTheAnimals(animal)
            result.innerHTML += `
            <li> After feeding the ${animal.typeOfAnimal} it weights ${animal.weight} kg </li>`
            result.innerHTML += `<hr color='green'/>`
            
        } else {
            result.innerHTML += `<li style=color:red>  You can't feed the ${animal.typeOfAnimal} when it's outside of the farm!</li>`
            result.innerHTML += `<hr color='red' />`
            return
        }
    })

    
}

function productCountdown(animalArray,result){
    debugger
    let countdown = 0;
        animalArray.map(animal => {
        return countdown += animal.productCount
    })
    result.innerText = ''
    result.innerText += countdown
    return countdown
}




let totalMilkCountdown
let totalEggCountdown

submitButton.addEventListener('click', () => {

    let dutyValue = dutiesOfTheFarmer.value;
    let farmAnimalValue = farmAnimal.value;

    console.log(dutyValue)
    console.log(farmAnimalValue)



if(dutyValue === 'info'){
    //debugger
    if(farmAnimalValue === 'Cattle')
        return infoAboutTheStock(cattleArray, infoAboutAnimals)
        
    else if(farmAnimalValue === 'Horse')
        return infoAboutTheStock(horseArray, infoAboutAnimals)
        
    else if(farmAnimalValue === 'Chicken')
        return infoAboutTheStock(chickenArray, infoAboutAnimals)
}
 else if(dutyValue === "release") {
    //debugger
    if(farmAnimalValue === 'Cattle')
    return releaseTheAnimal(cattleArray, divAnimal, cattleImage, infoAboutAnimals)
    else if(farmAnimalValue === 'Horse')
    return releaseTheAnimal(horseArray, divAnimal, horseImage, infoAboutAnimals)
    else if (farmAnimalValue=== 'Chicken')
    return releaseTheAnimal(chickenArray, divAnimal, chickenImage, infoAboutAnimals)

} else if(dutyValue === "milk") {
    if(farmAnimalValue === 'Cattle'){
        cattleArray.map(cattle => {
            if(!cattle.insideTheFarm){
                return infoAboutAnimals.innerHTML += `<li style=color:red>You can't milk the cattle when it's outside! </li>`
            }
        })
    
        if(angusCattle.insideTheFarm && beltedGalloway.insideTheFarm && hereford.insideTheFarm && charolais.insideTheFarm){
            CattleAnimal.milkTheCows(angusCattle)
            CattleAnimal.milkTheCows(beltedGalloway)
            CattleAnimal.milkTheCows(charolais)
            CattleAnimal.milkTheCows(hereford)
            totalMilkCountdown = `${productCountdown(cattleArray, bucketMilkCattle)}`
        }
    }
    
    return
}  else if(dutyValue === 'feed'){
    if(farmAnimalValue === 'Cattle')
    return feedTheAnimals(cattleArray, infoAboutAnimals)
    else if(farmAnimalValue === 'Horse')
    return feedTheAnimals(horseArray, infoAboutAnimals)
    else if(farmAnimalValue === 'Chicken')
    return feedTheAnimals(chickenArray, infoAboutAnimals)
} else if(dutyValue === 'bringBack'){
    divAnimal.innerHTML = '';
    bringBackInTheFarm(cattleArray)
    bringBackInTheFarm(horseArray)
    bringBackInTheFarm(chickenArray)
    return
} else if(dutyValue === 'collect')
    if(farmAnimalValue === 'Chicken'){
        //debugger
    ChickenAnimal.collectTheEggs(SebrightChicken);
    ChickenAnimal.collectTheEggs(RhodeIslandRed);
    totalEggCountdown = productCountdown(chickenArray,eggCount)
    return
    }
    
})




//clear button 
clearButton.addEventListener('click', () => {
    infoAboutAnimals.innerHTML = ''
})



function bringBackInTheFarm(animalArray){
    for(const animal of animalArray){
        animal.insideTheFarm = true;
    }
}



//check buyer button
let i
let randomNumberEggs

buyerBtn.addEventListener('click', () => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(response => {
        debugger
        randomNumber = Math.floor(Math.random() * 10);
        i = randomNumber
    
        randomNumberEggs = Math.floor(Math.random() * 50)
        potentialBuyer.innerHTML = `<li> ${response[i].name} wants to buy ${randomNumberEggs} eggs.</li>`
        potentialBuyer2.innerHTML = `<li> ${response[i+1].name} wants to buy ${randomNumber} buckets of milk.</li>`
    })
    }     
    )




//sell the products

let eggMoney
let milkMoney
let totalEarned
let money = 0;

// one egg costs 2 dollars
//one bucket of milk contains around 10 liters of milk, 1 liter costs 4 dollars meaning one bucket costs 40 dollars

sellBtn.addEventListener('click', () => {

    if(randomNumberEggs > totalEggCountdown || randomNumberEggs === undefined || totalEggCountdown === undefined){
        alert("You don't have enough eggs")
        
    } else if (randomNumber > totalMilkCountdown || randomNumber === undefined || totalMilkCountdown === undefined){
        return alert("You don't have enough milk")
    } else {
        //debugger
        totalEggCountdown -= randomNumberEggs
        totalMilkCountdown -= randomNumber 
        bucketMilkCattle.innerText = totalMilkCountdown
        eggCount.innerText = totalEggCountdown
        potentialBuyer.innerHTML += `<li style=color:red> SOLD </li> `
        potentialBuyer2.innerHTML += `<li style=color:red> SOLD </li> `

        productList.innerHTML = '';

        for(let j=0; j < totalMilkCountdown; j++){
            debugger
                productList.innerHTML += `<li> <img src="images/milk bucket.jpg" alt="bucket of milk" width="100"> </li>
                <hr color='pink' />`
        }

        for(let i=0; i < totalEggCountdown; i++){
            productList.innerHTML += `<li> <img src="images/egg.jpg" alt="sheep" width="75"   class="imageFarm"   /> </li>`
        }
        //debugger;
        eggMoney = randomNumberEggs * 2
        milkMoney = randomNumber * 40
        totalEarned = eggMoney + milkMoney
        money += totalEarned
        moneyCount.innerText = `${money} dollars` ;
        // dali e podobro da napravam funkcija kako totalEarnedMoney(podolu)
        // ili ova linija e sosema dovolna i nema potreba da komplicirame so funkcija
        // kako shto razbrav do sega-> celta sekogash treba da ni bide 
        // da pishuvame pokratok kod ama pa funkcijata e ponapredno nivo na pishuvanje kod 
        // zatoa me interesira koj pristap e podobar

        // function totalEarnedMoney(total, header) {
        //     header.innerText = `${total} dollars`
        // }
        // totalEarnedMoney(money, moneyCount)


    }           
    }
)

let startButton = document.getElementById('start')
let newPlayerName = prompt(`Hi there! Please enter your name and click start to start the game!
You will have 1 minute to earn as much money as you can! Good luck!`)
let currentPlayer

class Players {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
}

let player1 = new Players('Martin', 2000)
let player2 = new Players('Nicole', 3570)
let player3 = new Players('Albert', 1230)
players = [player1, player2, player3]

function newPlayer (name, score){
    currentPlayer = new Players(name, score)
    players.push(currentPlayer)
}


function time () {
    setTimeout(() => {

        newPlayer(newPlayerName, money)
        players.sort((player1, player2) => player2.score - player1.score)
        console.log(players)
        body.innerHTML = '';

        for(let i = 0; i< players.length; i++){
            alert( `${players[i].name} scored ${[i+1]} place with ${players[i].score}`)
        }
    },60000);
}


startButton.addEventListener('click', () => {
    alert('Start!')
    time()
})




