
// let button = document.getElementById("clickme"),
//   count = 0;
//  function clickMe() {
//   count += 1;
//   button.innerHTML = "Order : " + count;
// };

let pCount = document.querySelector('#clickMe');
let counter = 0;

let btnOrder = document.querySelector('#order');

btnOrder.addEventListener('click', (e) => {
  counter++
  pCount.innerHTML = "Order : " + counter;
})

let btnYourOrder = document.querySelector('#app');
let pYourOreder = document.querySelector('#app1');

btnYourOrder.addEventListener('click', (e) => {
  if (counter == 0) {
    app1.innerHTML = `You didn't order`;
  } else {

    let time = new Date();
    app1.innerHTML = `You ordered ${counter} pizza <br> at 
     ${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()} 
     on ${time.getDate()}. ${time.getMonth() + 1}. ${time.getFullYear()}.`;
  }
})


