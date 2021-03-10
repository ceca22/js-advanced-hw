


let animal =  {

    name: "name",
    latinName: "latinName",
    age: "age",
    numberOfLegs: "numberOfLegs",
    lifespan: "lifespan",

    printAnimalDetails: () => {
        console.log(`
        Animal kind: ${animal.name}(${animal.latinName})
        Age: ${animal.age} years old
        Number of Legs:${animal.numberOfLegs}
        `)
    }
}
console.log('Animal', animal)
animal.printAnimalDetails() 



//aquaticcccccccccccccccc
let  aquaticAnimal = Object.create(animal);
aquaticAnimal.type = "type"
aquaticAnimal.liveInSaltWater = "liveInSaltWater"
aquaticAnimal.liveInFreshWater = "liveInFreshWater"


console.log('Aquatic Animal', aquaticAnimal)



//flyingggggggggggg
let  flyingAnimal = Object.create(animal);
flyingAnimal.type = "type"
flyingAnimal.favoriteFood = "favoriteFood"
flyingAnimal.currentPlace = "currentPlace"

flyingAnimal.flyOut = function (changePlace){
    flyingAnimal.currentPlace = changePlace
    console.log(`The animal:${flyingAnimal.name} changed its location to ${flyingAnimal.currentPlace}`)
    
}

console.log('Flying Animal', flyingAnimal)
flyingAnimal.flyOut('New York');
console.log('After change of current place:', flyingAnimal.currentPlace)



//terrestrialllll

let terrestrialAnimal = Object.create(animal);
terrestrialAnimal.hasFur = "hasFur"
terrestrialAnimal.typeOfFur = "typeOfFur"

console.log('Terrestrial Animal', terrestrialAnimal)



//wilddddddddd


let wildAnimal = Object.create(terrestrialAnimal)
wildAnimal.typeOfFood = "typeOfFood"
wildAnimal.favoriteFood = "favoriteFood"

console.log('Wild Animal', wildAnimal)



//domesticcccccccc
let domesticAnimal = Object.create(terrestrialAnimal)

domesticAnimal.ownerName = "ownerName"
domesticAnimal.favoriteToy = "favoriteToy"
domesticAnimal.hasOwner = "hasOwner"
domesticAnimal.price = "price"

console.log('Domestic Animal', domesticAnimal)
    
//ALTERNATIVE SOLUTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
console.log('------ALTERNATIVE SOLUTION------')


let coala = {
    name: "Coala Bear",
    latinName: "Phascolarctos cinereus",
    age: 10,
    numberOfLegs: 4,
    lifespan: '13-18 years',

    printAnimalDetails: () => {
        console.log(`
        Animal kind: ${coala.name}(${coala.latinName})
        Age: ${coala.age} years old
        Number of Legs:${coala.numberOfLegs}
        `)
    }
}

console.log(coala);
coala.printAnimalDetails()



let dolphin = {
    name: "Dolphin",
    latinName: "Delphinidae",
    age: 20,
    numberOfLegs: 0,
    lifespan: '40-60 years',

    printAnimalDetails: () => {
        console.log(`
        Animal kind: ${dolphin.name}(${dolphin.latinName})
        Age: ${dolphin.age} years old
        Number of Legs:${dolphin.numberOfLegs}
        `)
    }
}

let dolphinAnimal = Object.create(dolphin)
dolphin.printAnimalDetails()
dolphinAnimal.type = "carnivore";
dolphinAnimal.liveInSaltWater = true;
dolphinAnimal.liveInFreshWater = false;

console.log(dolphinAnimal)





let horse = {
    name: "Horse",
    latinName: "Equus ferus caballus",
    age: 12,
    numberOfLegs: 4,
    lifespan: '15-20 years',

    printAnimalDetails: () => {
        console.log(`
        Animal kind: ${horse.name}(${horse.latinName})
        Age: ${horse.age} years old
        Number of Legs:${horse.numberOfLegs}
        `)
    }
}
let horseAnimal = Object.create(horse)
horse.printAnimalDetails()

horseAnimal.ownerName = "John"
horseAnimal.favoriteToy = "Jolly Tug 14 Horse Ball"
horseAnimal.hasOwner = true
horseAnimal.price = 1600

horseAnimal.ownerPrice = function() {
    if(horseAnimal.hasOwner === true){
        horseAnimal.price += 1000
        console.log(`The ${horse.name} costs ${horseAnimal.price} dollars`)
    }
}

horseAnimal.ownerPrice();
console.log(horseAnimal)

