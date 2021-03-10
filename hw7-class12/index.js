class Animal {
    constructor(name, latinName, age, numberOfLegs, lifespan){

        this.name = name;
        this.latinName = latinName;
        this.age = age;
        this.numberOfLegs = numberOfLegs;
        this.lifespan = lifespan;

    }
    printAnimalDetails(){
        console.log(`
        Animal kind: ${this.name}(${this.latinName})
        Age: ${this.age} years old
        Number of Legs:${this.numberOfLegs}
        `)
    } 
}

let animal1 = new Animal('Coala Bear', 'Phascolarctos cinereus', 10, 4, '13-18 years' )
console.log('Animal1: ', animal1)
animal1.printAnimalDetails();







class AquaticAnimal extends Animal{
    constructor(name, latinName, age, numberOfLegs, lifespan, type, liveInSaltWater, liveInFreshWater ){
        super(name, latinName, age, numberOfLegs, lifespan)

        this.type = type;
        this.liveInSaltWater = liveInSaltWater;
        this.liveInFreshWater = liveInFreshWater;
    }
    
    set liveInSaltWater(saltWater) {
        //debugger;
        if(saltWater === true) {
            this._liveInSaltWater = saltWater
            
        }
        else {
            console.log(`The ${this.name} doesn't live in salty waters`)
            
            
        }
    }

    get liveInSaltWater() {
        //debugger;
        return this._liveInSaltWater
    }


}

console.log('----------Aquatic Animal-----------')
let animal2 = new AquaticAnimal('Dolphin', 'Delphinidae', 20, 0, '40-60 years', 'carnivores', true, false)
console.log('Animal2: ', animal2);
animal2.printAnimalDetails();
let animal3 = new AquaticAnimal('Amazon river dolphin', 'Inia geoffrensis', 25, 0, '30 years', 'carnivores', false, true);
console.log('Animal3: ', animal3);
animal3.printAnimalDetails();




class FlyingAnimal extends Animal {
    constructor(name, latinName, age, numberOfLegs, lifespan, type, favoriteFood, currentPlace){
        super(name, latinName, age, numberOfLegs, lifespan)

        this.type = type;
        this.favoriteFood = favoriteFood;
        this.currentPlace = currentPlace;
    }

    flyOut(changePlace) {
        this.currentPlace = changePlace;
        console.log(`The animal:${this.name} changed its location to ${this.currentPlace}`)
        
    }
}


console.log('----------Flying Animal-----------')

let animal4 = new FlyingAnimal('Bats', 'Chiroptera', 15, 0, 'less than 20 years', 'omnivores', 'figs, mangoes, dates, and bananas', 'USA' )

console.log('Animal4:', animal4);
animal4.printAnimalDetails();
animal4.flyOut('Canada');




class TerrestrialAnimal extends Animal {
    constructor(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur){
        super(name, latinName, age, numberOfLegs, lifespan)

        this.hasFur = hasFur;
        this.typeOfFur = typeOfFur;
    }

    set typeOfFur(furType) {
        //debugger
        if(furType.length < 3){
            console.log('Enter type of fur!')
        } else
        this._typeOfFur = furType
        console.log(`The ${this.name} has ${furType}`)

    }


    get typeOfFur(){
        //debugger
        return this._typeOfFur 
    }

    sound(sounds){
        console.log(`The Animal:${this.name} makes sounds known as ${sounds}`)
    }

}

console.log('----------Terrestrial Animal-----------')


let animal5 = new TerrestrialAnimal('Kangaroo', 'Macropodidae', 6, 4, '6-20 years', true, 'short hair(fur)')
console.log('Animal5: ', animal5 )
animal5.printAnimalDetails();
animal5.sound('chortle');





class WildAnimal extends TerrestrialAnimal{
    constructor(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur, typeOfFood, favoriteFood){
        super(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur)

        this.typeOfFood = typeOfFood;
        this.favoriteFood = favoriteFood;
    }

    set typeOfFood(foodType){
        //debugger

        foodType = foodType.toLowerCase();

        if(foodType === "carnivore")
            console.log(`The ${this.name} possess the digestive system of a ${foodType}`)
        
        if(foodType === "omnivore")
            console.log(`The ${this.name} possess the digestive system of a ${foodType}`)

        if(foodType === "herbivore")  
            console.log(`The ${this.name} possess the digestive system of a ${foodType}`)


    }

    get typeOfFood(){
        return this._typeOfFood
    }
}

console.log('----------Wild Animal-----------')


let animal6 = new WildAnimal('Panda bear', 'Ailuropoda melanoleuca', 12, 4, '20 years', true, ' coarse, dense and somewhat oily fur', 'CARnivore', 'bamboo')

console.log('Animal6:', animal6);
animal6.printAnimalDetails();
animal6.sound('squeak, growl, bark and huff')

let animal61 = new WildAnimal('Siberian chipmunks', 'Eutamias sibiricus', 4, 4, '6-10', true, ' short, dense fur ', 'omnivore', 'seeds and fungi' )

console.log(animal61)
animal61.printAnimalDetails();
animal61.sound('cheep');



class DomesticAnimal extends TerrestrialAnimal{
    constructor(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur, ownerName, favoriteToy, hasOwner, price){
        super(name, latinName, age, numberOfLegs, lifespan, hasFur, typeOfFur)

        this.ownerName = ownerName;
        this.favoriteToy = favoriteToy;
        this.hasOwner = hasOwner;
        this.price = price;
    
    }

    static ownerPrice(obj){
        debugger
        if(!obj.hasOwner){
            console.log(`The ${obj.name} costs ${obj.price} dollars`)
           
        } else {
            
            obj.price += 1000
            console.log(`The ${obj.name} costs ${obj.price} dollars`)

        }
    }


}

console.log('----------Domestic Animal-----------')


let animal7 = new DomesticAnimal('Horse', 'Equus ferus caballus', 12, 4, '15-20 years', true, 'short hair', 'John', 'Jolly Tug 14" Horse Ball', true, 1600)
console.log('Animal7:', animal7)

animal7.printAnimalDetails();
animal7.sound('neigh')
DomesticAnimal.ownerPrice(animal7)

let animal8 = new DomesticAnimal('Samoyed', '', 3, 4, "10-13", true, 'long white fur', 'Stefan', 'plastic bottles', true, 200 )
console.log(animal8);

DomesticAnimal.ownerPrice(animal8)





