export interface Coffee {
    getCost(): number;
    getIngredients(): string;
}

class SimpleCoffee implements Coffee {
    getCost() {
        return 1;
    }
    getIngredients(){
        return 'Simple';
    }
}
abstract class CoffeeDecorator implements Coffee {
    coffee: Coffee;
    constructor(coffee: Coffee){
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost();
    }
    getIngredients(){
        return this.coffee.getIngredients();
    }
}

class MasalaCoffee extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }
    getCost() {
        return super.getCost() + 1.4;
    }
    getIngredients(){
        return 'Masala' + super.getIngredients();
    }
}
class SprinkeCoffee extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }
    getCost() {
        return super.getCost() + 1.4;
    }
    getIngredients(){
        return 'Sprinkle' + super.getIngredients();
    }
}
let coffee = new SimpleCoffee();
let masala = new MasalaCoffee(coffee);
let c = new MasalaCoffee(new SprinkeCoffee(coffee));
console.log(c.getCost());
