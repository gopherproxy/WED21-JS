console.log('Loaded')

class Missile {
    // The constructor method is a special method for creating and initializing an object created from the class
    
    constructor(){
        // class properties inside the constructor
        this.description = 'I am a rocket!'
        this.fuel = 657
    }

    //class methods

    describeYourself(){
        console.log(this.description)
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