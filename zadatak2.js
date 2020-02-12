//Написати функцију која израчунава цену пице по квадратном центиметру 
//(параметри функције су полупречник у цм, и цена пице)

function pizzaPrice(r,price) {

    let pizzasize = r ** 2 * Math.PI;

    let pricecm = price / pizzasize;
    
    return pricecm;
}

let pricePizza = pizzaPrice(20,800)
console.log(pricePizza);