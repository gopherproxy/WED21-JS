console.log('Loaded')

class Missile {
    // The constructor method is a special method for creating and initializing an object created from the class
    
    // a static class property
    static speed = 9920 //kmh
    
    constructor(description, fuel, distance){
        // class properties inside the constructor
        this.description = description
        this.fuel = fuel
        this.distance = distance
    }

    //class methods

    describeYourself(){
        console.log(this.description)
    }

    calculateMission(){
        // calculating the mission timeframe depending on velocity and distance
        let time = Math.ceil(this.distance / Missile.speed)
        return time
    }

    // a getter
    get fueltank(){
        return this.fuel
    }

    // a setter
    set fueltank(f){
        this.fuel = this.fuel + f
    }

    // a static method, implementing a function ONLY belonging to the class (cannot be called through an object instance)

    static distressSignal(){
        console.error('==========================')
        console.error('Houston, we got a problem!')
        console.error('==========================')
    }

    // end of class
}

//INHERITANCE//

class AmazonRocket extends Missile {   
    constructor(){
        super()
        this.enginetype = 'B4'
    }

    addLoad(load){
        console.log(load + ' loaded...')
    }
}