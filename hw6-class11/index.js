

//Animal constructor function
function Animal(name, latinName, age, numberOfLegs, lifespan) {
    this.name = name;
    this.latinName = latinName;
    this.age = age;
    this.numberOfLegs = numberOfLegs;
    this.lifespan = lifespan;

    this.printAnimalDetails = () => console.log(`
    Animal kind: ${this.name}(${this.latinName})
    Age: ${this.age} years old
    Number of Legs:${this.numberOfLegs}
    `)
}



let animal1 = new Animal('Coala Bear', 'Phascolarctos cinereus', 10, 4, '13-18 years' )
console.log('Animal1: ', animal1)
animal1.printAnimalDetails();





// AquaticAnimal constructor function
function AquaticAnimal(name, latinName, age, numberOfLegs, lifespan, type){

    Object.setPrototypeOf(this, new Animal(name, latinName, age, numberOfLegs, lifespan))

    this.type = type;
    this.liveInSaltWater = false;
    this.liveInFreshWater = false;
    this.changeLifeEnvironment = (type) => {
        type = type.toLowerCase();

        if(type === "salt"){
            this.liveInSaltWater = true;
            this.liveInFreshWater = false;
        }
        if(type === "fresh"){
            this.liveInSaltWater = false;
            this.liveInFreshWater = true;
        }
    }
}




let animal2 = new AquaticAnimal('Dolphin', 'Delphinidae', 20, 0, '40-60 years', 'aquatic mammals')
console.log('Animal2: ', animal2);

animal2.printAnimalDetails();

animal2.changeLifeEnvironment('SALT');
console.log('Animal2:(function environment) ', animal2);

let animal3 = new AquaticAnimal('Amazon river dolphin', 'Inia geoffrensis', 25, 0, '30 years', ' toothed whale ' );
console.log('Animal3: ', animal3);

animal3.printAnimalDetails();
animal3.changeLifeEnvironment('FRESH');
console.log('Animal3:(function environment) ', animal3);




//FlyingAnimal constructor function
function FlyingAnimal(name, latinName, age, numberOfLegs, lifespan, type, favoriteFood, currentPlace){


    Object.setPrototypeOf(this, new Animal(name, latinName, age, numberOfLegs, lifespan))

    this.type = type;
    this.favoriteFood = favoriteFood;
    this.currentPlace = currentPlace;
    this.flyOut = (changePlace) => {
        this.currentPlace = changePlace;
        console.log(`The animal:${this.name} changed its location to ${this.currentPlace}`)
        
    }

}



let animal4 = new FlyingAnimal('Bats', 'Chiroptera', 15, 0, 'less than 20 years', 'mammals', 'figs, mangoes, dates, and bananas', 'USA' )

console.log('Animal4:', animal4);
animal4.printAnimalDetails();
animal4.flyOut('Canada');




//TerrestrialAnimal constructor function
function TerrestrialAnimal(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur){

    Object.setPrototypeOf(this, new Animal(name, latinName, age, numberOfLegs, lifespan))
    this.hasFur = hasFur;
    this.typeOfFur = typeOfFur;

    this.sound = (sounds) => {
        console.log(`The Animal:${this.name} makes sounds known as ${sounds}`)
    }
}


let animal5 = new TerrestrialAnimal('Kangaroo', 'Macropodidae', 6, 4, '6-20 years', true, 'short hair(fur)')
console.log('Animal5: ', animal5 )
animal5.printAnimalDetails();
animal5.sound('chortle');




//WildAnimal constructor function 
function WildAnimal (name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur, typeOfFood, favoriteFood) {

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur))

    this.typeOfFood = typeOfFood;
    this.favoriteFood = favoriteFood;


}

let animal6 = new WildAnimal('Panda bear', 'Ailuropoda melanoleuca', 12, 4, '20 years', true, ' coarse, dense and somewhat oily', 'mostly bamboo','bamboo')

console.log('Animal6:', animal6);
animal6.printAnimalDetails();
animal6.sound('squeak, growl, bark and huff')



// DomesticAnimal constructor function 
function DomesticAnimal(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur, ownerName, favoriteToy) {

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur))

    this.ownerName = ownerName;
    this.favoriteToy = favoriteToy;

}


let animal7 = new DomesticAnimal('Horse', 'Equus ferus caballus', 12, 4, '15-20 years', false, 'coat', 'John', 'Jolly Tug 14" Horse Ball' )
console.log('Animal7:', animal7)

animal7.printAnimalDetails();
animal7.sound('neigh')

