// ja sam domaci uradila pre petka tj. pre nego sto smo radili addEventListener,
// ispravicu kod ali to ne stizem do predaje domaceg, nadam se da moze i ovako :)

let button = document.getElementById("clickme"),
  count = 0;
 function clickMe() {
  count += 1;
  button.innerHTML = "Order : " + count;
};

function displayDate() {
    if (count==0) {
        document.getElementById("app1").innerHTML = `You didn't order`;
    } else {
        
    let time = new Date();
    document.getElementById("app1").innerHTML = `You ordered ${count} pizza <br> at 
     ${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()} 
     on ${time.getDate()}. ${time.getMonth()+1}. ${time.getFullYear()}.`;
    }
}


