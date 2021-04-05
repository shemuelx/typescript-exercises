interface Subject{
  registerObserver(o: Observer): number | string | void;
  removeObserver(o: Observer): number | string | void;
  notifyObservers();
}

interface Observer{
  update(temperature: number);
}



class CannabisPriceObserver implements Subject{
  
  private observers: Observer[] = [];
  private price: number;

  registerObserver(o: Observer) {

    this.observers.push(o);

  }
  
  removeObserver(o: Observer) {
    
    let index = this.observers.indexOf(o);

    this.observers.splice(index, 1);

  }

  notifyObservers() {
  
    this.observers.forEach(observer => observer.update(this.price))

  }
  

  setPrice(price: number) {

    console.log(`Cannabis new local price ${price}`);
  
    this.price = price;

    this.notifyObservers();

  }

}

class CannabisPriceDisplay implements Observer {

  private subject: Subject;

  constructor(cannabisPriceObserver: Subject) {

    this.subject = cannabisPriceObserver;

    cannabisPriceObserver.registerObserver(this)

  }
  
  update(price: number) {
  
    console.log(`Updating prices...`)

  }

}

class Dealer implements Observer {
  
  private subject: Subject;

  constructor(cannabisPriceObserver: Subject) {

    this.subject = cannabisPriceObserver;
    
    cannabisPriceObserver.registerObserver(this);

  }
  
  update(price: number) {

    if (price < 40000000) { console.log(`Pay me more now! A carga caiu...`)}

    else {console.log(`Come back soon bro!`)}

  }

}

let cannabis = new CannabisPriceObserver();

let weedprice = new CannabisPriceDisplay(cannabis);
let parmeiras = new Dealer(cannabis);

cannabis.setPrice(552559);
cannabis.setPrice(10000);
cannabis.setPrice(48500000);