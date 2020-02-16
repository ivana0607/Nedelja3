//Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
//Уноси се колико пице поједете на месечном нивоу, 
//и колико година имате (Рачуна се да је довољно достављати до стоте године)

function lifeSupply(numPerMonth, age) {
    if (age <= 100) {
        pizzaNum = (100 - age) * 12 * numPerMonth;
        return `Dovoljno je ${pizzaNum} pizza`
    }
}

lifeSupply(10, 26) // Враћа 8880

console.log(lifeSupply(10, 26)) // Исписује 8880