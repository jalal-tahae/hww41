let spans = document.querySelectorAll(".cards span");
let flipedCards = 0;
var clickedText=[];
setTimeout(() => {
  hidCards();
}, 2000);

function hidCards() {
  console.log(spans);
  for (i = 0; i < spans.length; i++) {
    spans[i].classList.add("hidden");
  }
}

function flipcard(Event) {
  console.log(Event);
}

let cards = document.querySelectorAll(".cards");
debugger;
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (event) {
    cardClick(event);
  });
}
function cardClick(event) {
  console.log(event.srcElement);
  debugger;
  let card = event.srcElement;
  card.querySelectorAll("span")[0].classList.remove("hidden");
 let  cardtext=card.querySelectorAll("span")[0].textContent;
  clickedText.push(cardtext)
  flipedCards++;
  if (flipedCards === 2) {
    flipedCards = 0;
    if(cardtext[0]==cardtext[1]){
      lockCard
    }
    setTimeout(() => {
      hidCards();
    }, 1000);
  }
}
