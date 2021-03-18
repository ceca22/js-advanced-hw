//click the farm house to release the animals
//click on the cow to milk it
//the farmer will have duties-release the animals, give food to the animals
//ke ima input za animals quantity zacuvani vo varijabla
//so fetch ke zemame luge koi sakat da kupat mleko, kojn, jajca
//imam prashanje za return vo if statements
let divAnimal =document.getElementById('animal');

let cattleArray = [];
let horseArray = [];


let cattleImage = '<img src="images/cow 1.jpg" alt="cow" width="100"  class="cattleFarm"   />'
let horseImage = '<img src="images/horse.jpg" alt="horse1" width="100"  class="horseFarm"   />'



let submitButton = document.getElementsByTagName('button')[0]

let dutiesOfTheFarmer = document.getElementById('duties')
let farmAnimal = document.getElementById('typeOfAnimal')
let infoAboutAnimals = document.getElementById('infoAboutAnimals')
let productList = document.getElementById('productList')

let bucketMilkCattle = document.getElementById('bucketMilk')

let clearButton = document.getElementById('clearButton')

class FarmAnimal  {
    constructor (type, quantity, product, weight, insideTheFarm) {
        
        this.typeOfAnimal = type;
        this.quantity = quantity;
        this.product = product;
        this.weight = weight;
        this.insideTheFarm = insideTheFarm;
    }    

    static feedTheAnimals(obj) {
        obj.weight += 100
    
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
    constructor( type, quantity, product, weight, insideTheFarm, favoriteFood, color, bucketMilk ) {
        super( type, quantity, product, weight,insideTheFarm )

        this.favoriteFood = favoriteFood;
        this.color = color;
        
        this.bucketMilk = bucketMilk;
        
    }
    static milkTheCows(obj) {
        //debugger;
        if(obj.weight >= 900){
            
            productList.innerHTML += `<li> <img src="images/milk bucket.jpg" alt="bucket of milk" width="100"> </li>
            <li><img src="images/milk bucket.jpg" alt="bucket of milk" width="100"></li>
            <hr color='pink' />`
            obj.bucketMilk += 2;
            obj.weight -= 50;
            infoAboutAnimals.innerHTML += `
            <li> The ${obj.typeOfAnimal} now weights ${obj.weight} kg </li>`
            

        } else {
            infoAboutAnimals.innerHTML += `<p>Your cattle (${obj.typeOfAnimal}) has not been fed enough and is too week to be milked! </p>`
        }
        
        infoAboutAnimals.innerHTML += '<hr color="pink" />'
        
        
    }

}



    




let angusCattle = new CattleAnimal('Angus Cattle', 3, 'meat and milk products', 900, true, 'grass', 'black',0 )

let beltedGalloway = new CattleAnimal('Oreo Cattle', 2, 'beef', 1000, true, 'hay and grass', 'black and white belt',0 )

let charolais = new CattleAnimal('Charolais Cattle', 4, 'milk and meat', 850, true, 'grass', 'white or red',0 )

let hereford = new CattleAnimal('Hereford Cattle',5, 'milk and leaner meat', 800, true, 'grass', 'brown and white',0)
cattleArray.push(angusCattle)
cattleArray.push(beltedGalloway)
cattleArray.push(charolais)
cattleArray.push(hereford)




class HorseAnimal extends FarmAnimal {
    constructor( type, quantity, product, weight, insideTheFarm, price){
        super( type, quantity, product, weight, insideTheFarm)

        this.price = price;
    }
}



let AmericanCreamDraft = new HorseAnimal('American Cream Draft', 3, 'none', 700, true, 3500)
let RussianHeavyDraft = new HorseAnimal('Russian Heavy Draft', 4, 'none', 800, true, 3100)
let ShireHorse = new HorseAnimal ('Shire Horse', 5, 'none', 900, true, 3700)

horseArray.push(AmericanCreamDraft)
horseArray.push(RussianHeavyDraft)
horseArray.push(ShireHorse)



function releaseTheAnimal (animalArray, result, image, result2) {
    
    animalArray.map(animal => {
        if(animal.insideTheFarm === true) {
            for(let i=0; i < animal.quantity; i++){
                result.innerHTML += ` ${image} ${animal.typeOfAnimal}`
                result.innerHTML += `<hr color="red" />`
                animal.insideTheFarm = false;
                }  
        } else {
            result2.innerHTML += `<li style="color:red">The ${animal.typeOfAnimal} is already outside! </li>`
            result2.innerHTML += `<hr color="red" />`
        }
    })
   
}


// function milkTheCattle(cattleArray, result) {
//     cattleArray.map(cattle => {
//         //debugger
//         CattleAnimal.milkTheCows(cattle)
//         console.log('After milking:',cattle.weight)
//     })
//     result.innerHTML += `<h3>After milking the cows: </h3>`

//     for (const cattle of cattleArray){
//         //debugger
//     result.innerHTML += `
//     <p> The ${cattle.typeOfAnimal} now weights ${cattle.weight} kg </p>`
// }

// }

    
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

function productCountdown(cattleArray,result){
    let countdown = 0;
    cattleArray.map(cattle => {
        countdown += cattle.bucketMilk
        return console.log(countdown)
    })
    result.innerText = ''
    result.innerText += countdown
        
}


submitButton.addEventListener('click', () => {

    let dutyValue = dutiesOfTheFarmer.value;
    let farmAnimalValue = farmAnimal.value;

    console.log(dutyValue)
    console.log(farmAnimalValue)



if(dutyValue === 'info'){
    //debugger
    if(farmAnimalValue === 'Cattle'){
        infoAboutTheStock(cattleArray, infoAboutAnimals)
        return
    } else if(farmAnimalValue === 'Horse'){
        infoAboutTheStock(horseArray, infoAboutAnimals)
        return
    }
    return
} else if(dutyValue === "release") {
        //debugger
        if(farmAnimalValue === 'Cattle')
        return releaseTheAnimal(cattleArray, divAnimal, cattleImage, infoAboutAnimals)
        else if(farmAnimalValue === 'Horse')
        return releaseTheAnimal(horseArray, divAnimal, horseImage, infoAboutAnimals)

    } else if(dutyValue === "milk") {
        cattleArray.map(cattle => {
            if(cattle.insideTheFarm) {
                CattleAnimal.milkTheCows(angusCattle)
                CattleAnimal.milkTheCows(beltedGalloway)
                CattleAnimal.milkTheCows(charolais)
                CattleAnimal.milkTheCows(hereford)
                productCountdown(cattleArray, bucketMilkCattle)
            } else {    
                infoAboutAnimals.innerHTML += `<li style=color:red>You can't milk the cattle when it is outside!</li>`
                infoAboutAnimals.innerHTML += `<hr color='red' />`

            }
        })
        
        return
    } else if(dutyValue === 'feed'){
        if(farmAnimalValue === 'Cattle')
        return feedTheAnimals(cattleArray, infoAboutAnimals)
        else if(farmAnimalValue === 'Horse')
        return feedTheAnimals(horseArray, infoAboutAnimals)
    } else if(dutyValue === 'bringBack'){
        //debugger
        if(farmAnimalValue === 'Cattle') {
            divAnimal.parentNode.removeChild(cattleImage);
        } else if(farmAnimalValue === 'Horse')
            delete horseImage
        }
    






})


    

clearButton.addEventListener('click', () => {
    infoAboutAnimals.innerHTML = ''
})



// let deleteButton = document.getElementsByClassName('deleteBtn');

// for(let i=0; i < deleteButton.length; i++){
//     debugger
//     deleteButton[i].addEventListener('click', function(event){
//         event.target.parentNode.parentNode.remove(event.parentNode);
//     }, false);
// }
 


