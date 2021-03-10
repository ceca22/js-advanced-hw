


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
    
