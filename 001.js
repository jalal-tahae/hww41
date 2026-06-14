let spans = document.querySelectorAll(".cards span");
let flipedCards = 0;
var clickedText = [];
let card;
let cardtext;
let cards;
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

cards = document.querySelectorAll(".cards");
debugger;
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function (event) {
    cardClick(event);
  });
}
function cardClick(event) {
  console.log(event.srcElement);
  debugger;
  card = event.srcElement;
  card.querySelectorAll("span")[0].classList.remove("hidden");
  cardtext = card.querySelectorAll("span")[0];

  clickedText.push(cardtext);
  flipedCards++;
  if (flipedCards === 2) {
    flipedCards = 0;
    if (clickedText[0].textContent == clickedText[1].textContent) {
      clickedText[0].classList.add("locked");
      clickedText[1].classList.add("locked");
    } else {
      setTimeout(() => {
        hidCards();
      }, 1000);
    }
    setTimeout(() => {
      hidCards();
    }, 1000);
  }
}
//.getatribute

//locked
