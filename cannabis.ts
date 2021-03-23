// This is an TypeScript example for ED Companys course  by shemuelx

abstract class Cannabis{
    public description: string;

    public getDescription() : string{
        return this.description;
    };

    public abstract cost(): number;
}

abstract class CannabisDecorator extends Cannabis{
    decoratedCannabis: Cannabis;
    public abstract getDescription(): string;
}

// ------------------------------ Products ------------------------------
class Smoke extends Cannabis{
    public description = "Smoke";

    public cost(): number {
        return 10.99;
    }
}

class Oil extends Cannabis {
    public description = "Oil";

    public cost(): number {
        return 25.99
    }
}

class Drop extends Cannabis{
    public description = "Drop";

    public cost(): number {
        return 9.99;
    }
}

class Brownie extends Cannabis{
    public description = "Brownie";

    public cost(): number {
        return 36.99;
    }
}

// ------------------------------ Types ------------------------------
class Sativah extends CannabisDecorator {
    constructor(product: Cannabis) {
        super();
        this.decoratedCannabis = product;
    }

    public getDescription(): string {
        return this.decoratedCannabis.getDescription() + ' plus Sativah Power';
    }

    public cost(): number {
        return this.decoratedCannabis.cost() + 8.50;
    }
}

class Indica extends CannabisDecorator {
    constructor(product: Cannabis) {
        super();
        this.decoratedCannabis = product;
    }

    public getDescription(): string {
        return this.decoratedCannabis.getDescription() + ' with Indica peace';
    }

    public cost(): number {
        return this.decoratedCannabis.cost() + 12.20;
    }
}

// ------------------------------  Cannabis! ------------------------------
let joint = new Smoke();
joint = new Sativah(joint);
joint = new Indica(joint);

let brownie = new Brownie();
brownie = new Sativah(brownie);

let forGranny = new Oil();
forGranny = new Indica(forGranny);
forGranny = new Sativah(forGranny);


console.log(brownie.getDescription());
console.log('just for', brownie.cost());
console.log(forGranny.getDescription());
console.log('just for', forGranny.cost());
console.log(joint.getDescription());
console.log('just for', joint.cost());