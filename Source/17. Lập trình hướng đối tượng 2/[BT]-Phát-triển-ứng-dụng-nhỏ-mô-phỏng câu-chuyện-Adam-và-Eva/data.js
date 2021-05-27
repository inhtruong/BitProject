class Apple {
    
    setWeight(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    decreaseApple() {
        if (this.weight > 0) {
            this.weight--;
        }
    }
    isEmpty() {
        if (this.weight > 0) {
            return true;
        } else false;
    }
}

class Human {
    
    Human(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight
    }
    
    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        return Apple.isEmpty();
    }
    
    eat(Apple) {
        this.Apple = Apple.decreaseApple();
        this.weight++;
    }
    
    say(speak) {
        console.log ("Hello World!!");
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.Weight; 
    }
    
    
}