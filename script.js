// heart emoji
const heart1CardElement = document.getElementById("heart-1-card");
const heart1CardFrontElement = document.getElementById("heart-1-card-front");
const heart1CardBackElement = document.getElementById("heart-1-card-back");
const heart1Element = document.getElementById("heart-1");

const heart2CardElement = document.getElementById("heart-2-card");
const heart2CardFrontElement = document.getElementById("heart-2-card-front");
const heart2CardBackElement = document.getElementById("heart-2-card-back");
const heart2Element = document.getElementById("heart-2");

// cold emoji
const cold1CardElement = document.getElementById("cold-1-card");
const cold1CardFrontElement = document.getElementById("cold-1-card-front");
const cold1CardBackElement = document.getElementById("cold-1-card-back");
const cold1Element = document.getElementById("cold-1");

const cold2CardElement = document.getElementById("cold-2-card");
const cold2CardFrontElement = document.getElementById("cold-2-card-front");
const cold2CardBackElement = document.getElementById("cold-2-card-back");
const cold2Element = document.getElementById("cold-2");

// kissing emoji
const kissing1CardElement = document.getElementById("kissing-1-card");
const kissing1CardFrontElement = document.getElementById("kissing-1-card-front");
const kissing1CardBackElement = document.getElementById("kissing-1-card-back");
const kissing1Element = document.getElementById("kissing-1");

const kissing2CardElement = document.getElementById("kissing-2-card");
const kissing2CardFrontElement = document.getElementById("kissing-2-card-front");
const kissing2CardBackElement = document.getElementById("kissing-2-card-back");
const kissing2Element = document.getElementById("kissing-2");

// hot emoji
const hot1CardElement = document.getElementById("hot-1-card");
const hot1CardFrontElement = document.getElementById("hot-1-card-front");
const ho1CardBackElement = document.getElementById("hot-1-card-back");
const hot1Element = document.getElementById("hot-1");

const hot2CardElement = document.getElementById("hot-2-card");
const hot2CardFrontElement = document.getElementById("hot-2-card-front");
const hot2CardBackElement = document.getElementById("hot-2-card-back");
const hot2Element = document.getElementById("hot-2");

// money emoji
const money1CardElement = document.getElementById("money-1-card");
const money1CardFrontElement = document.getElementById("money-1-card-front");
const money1CardBackElement = document.getElementById("money-1-card-back");
const money1Element = document.getElementById("money-1");

const money2CardElement = document.getElementById("money-2-card");
const money2CardFrontElement = document.getElementById("money-2-card-front");
const money2CardBackElement = document.getElementById("money-2-card-back");
const money2Element = document.getElementById("money-2");

// party emoji
const party1CardElement = document.getElementById("party-1-card");
const party1CardFrontElement = document.getElementById("party-1-card-front");
const party1CardBackElement = document.getElementById("party-1-card-back");
const party1Element = document.getElementById("party-1");

const party2CardElement = document.getElementById("party-2-card");
const party2CardFrontElement = document.getElementById("party-2-card-front");
const party2CardBackElement = document.getElementById("party-2-card-back");
const party2Element = document.getElementById("party-2");

// laugh emoji
const laugh1CardElement = document.getElementById("laugh-1-card");
const laugh1CardFrontElement = document.getElementById("laugh-1-card-front");
const laugh1CardBackElement = document.getElementById("laugh-1-card-back");
const laugh1Element = document.getElementById("laugh-1");

const laugh2CardElement = document.getElementById("laugh-2-card");
const laugh2CardFrontElement = document.getElementById("laugh-2-card-front");
const laugh2CardBackElement = document.getElementById("laugh-2-card-back");
const laugh2Element = document.getElementById("laugh-2");

// nerd emoji
const nerd1CardElement = document.getElementById("nerd-1-card");
const nerd1CardFrontElement = document.getElementById("nerd-1-card-front");
const nerd1CardBackElement = document.getElementById("nerd-1-card-back");
const nerd1Element = document.getElementById("nerd-1");

const nerd2CardElement = document.getElementById("nerd-2-card");
const nerd2CardFrontElement = document.getElementById("nerd-2-card-front");
const nerd2CardBackElement = document.getElementById("nerd-2-card-back");
const nerd2Element = document.getElementById("nerd-2");

const resultElement = document.getElementById("result");

const listCardElements = [
heart1CardElement,
heart2CardElement,
cold1CardElement,
cold2CardElement,
kissing1CardElement,
kissing2CardElement,
hot1CardElement,
hot2CardElement,
money1CardElement,
money2CardElement,
party1CardElement,
party2CardElement,
laugh1CardElement,
laugh2CardElement,
nerd1CardElement,
nerd2CardElement,
];

const listCardFrontElements = [
heart1CardElement,
heart2CardElement,
cold1CardElement,
cold2CardElement,
kissing1CardElement,
kissing2CardElement,
hot1CardElement,
hot2CardElement,
money1CardElement,
money2CardElement,
party1CardElement,
party2CardElement,
laugh1CardElement,
laugh2CardElement,
nerd1CardElement,
nerd2CardElement,
];

const listOrder = Array.from(listCardElements).map((value, index) => ({
  element: value,
  order: index,
}));

// state
let allowFlipping = true;
let previousCardId = null;

// shuffle logic and altered the data  expected output
const shufflingArray = (list) => {
  return list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((data, index) => ({ element: data.value.element, order: index }));
};

//  game loading logic
const handleStartLoad = () => {
  const shuffledList = shufflingArray(listOrder);
  shuffledList.map((value) => {
    value.element.style.order = value.order;
  });
};

//  Appropriate card elements based on card
const getCardElements = (card) => {
  switch (card) {
    case "heart-1":
      return {
        cardElement: heart1CardElement,
        cardFrontElement: heart1CardFrontElement,
        cardBackElement: heart1CardBackElement,
        imgElement: heart1Element,
      };
    case "heart-2":
      return {
        cardElement: heart2CardElement,
        cardFrontElement: heart2CardFrontElement,
        cardBackElement: heart2CardBackElement,
        imgElement: heart2Element,
      };
    case "cold-1":
      return {
        cardElement: cold1CardElement,
        cardFrontElement: cold1CardFrontElement,
        cardBackElement: cold1CardBackElement,
        imgElement: cold1Element,
      };
    case "cold-2":
      return {
        cardElement: cold2CardElement,
        cardFrontElement: cold2CardFrontElement,
        cardBackElement: cold2CardBackElement,
        imgElement: cold2Element,
      };
    case "kissing-1":
      return {
        cardElement: kissing1CardElement,
        cardFrontElement: kissing1CardFrontElement,
        cardBackElement: kissing1CardBackElement,
        imgElement: kissing1Element,
      };
    case "kissing-2":
      return {
        cardElement: kissing2CardElement,
        cardFrontElement: kissing2CardFrontElement,
        cardBackElement: kissing2CardBackElement,
        imgElement: kissing2Element,
      };
    case "hot-1":
      return {
        cardElement: hot1CardElement,
        cardFrontElement: hot1CardFrontElement,
        cardBackElement: ho1CardBackElement,
        imgElement: hot1Element,
      };
    case "hot-2":
      return {
        cardElement: hot2CardElement,
        cardFrontElement: hot2CardFrontElement,
        cardBackElement: hot2CardBackElement,
        imgElement: hot2Element,
      };
    case "money-1":
      return {
        cardElement: money1CardElement,
        cardFrontElement: money1CardFrontElement,
        cardBackElement: money1CardBackElement,
        imgElement: money1Element,
      };
    case "money-2":
      return {
        cardElement: money2CardElement,
        cardFrontElement: money2CardFrontElement,
        cardBackElement: money2CardBackElement,
        imgElement: money2Element,
      };
    case "party-1":
      return {
        cardElement: party1CardElement,
        cardFrontElement: party1CardFrontElement,
        cardBackElement: party1CardBackElement,
        imgElement: party1Element,
      };
    case "party-2":
      return {
        cardElement: party2CardElement,
        cardFrontElement: party2CardFrontElement,
        cardBackElement: party2CardBackElement,
        imgElement: party2Element,
      };
    case "laugh-1":
      return {
        cardElement: laugh1CardElement,
        cardFrontElement: laugh1CardFrontElement,
        cardBackElement: laugh1CardBackElement,
        imgElement: laugh1Element,
      };
    case "laugh-2":
      return {
        cardElement: laugh2CardElement,
        cardFrontElement: laugh2CardFrontElement,
        cardBackElement: laugh2CardBackElement,
        imgElement: laugh2Element,
      };
    case "nerd-1":
      return {
        cardElement: nerd1CardElement,
        cardFrontElement: nerd1CardFrontElement,
        cardBackElement: nerd1CardBackElement,
        imgElement: nerd1Element,
      };
    case "nerd-2":
      return {
        cardElement: nerd2CardElement,
        cardFrontElement: nerd2CardFrontElement,
        cardBackElement: nerd2CardBackElement,
        imgElement: nerd2Element,
      };
  }
};

// Checking the given card  front
const getIsCardFrontFacing = (cardFront) => {
  return cardFront.style.display === "block";
};

// Change the content of the card
const changeCardContent = (cardElements) => {
  setTimeout(() => {
    if (
      cardElements.cardFrontElement.style.display === "" ||
      !getIsCardFrontFacing(cardElements.cardFrontElement)
    ) {
      cardElements.cardFrontElement.style.display = "block";
      cardElements.cardBackElement.style.display = "none";
    } else {
      cardElements.cardFrontElement.style.display = "none";
      cardElements.cardBackElement.style.display = "flex";
    }
  }, 200);
};

// Reset Card position to show card backside if given card is facing front
const flipCardToDefault = (cardElements) => {
  if (cardElements.cardFrontElement.style.display === "block") {
    cardElements.cardElement.disabled = false;
    cardElements.cardElement.classList.add("flipCard");
    setTimeout(() => {
      cardElements.cardFrontElement.style.display = "none";
      cardElements.cardBackElement.style.display = "flex";
    }, 300);
    setTimeout(() => {
      cardElements.cardElement.classList.remove("flipCard");
    }, 500);
  }
};
document.querySelector("#result")


// Card click logic
const handleCardClicked = (card) => {
  const currentCardElements = getCardElements(card);
  if (currentCardElements.cardElement.disabled || !allowFlipping) {
    return;
  }
  currentCardElements.cardElement.classList.add("flipCard");
  changeCardContent(currentCardElements);
  setTimeout(() => {
    currentCardElements.cardElement.classList.remove("flipCard");
  }, 500);
  checkFlipCards(currentCardElements, card);
};

// Card match checking
const checkFlipCards = (currentCardElements, cardId) => {
  if (previousCardId === null) {
    currentCardElements.cardElement.disabled = true;
    previousCardId = cardId;
    return;
  }
  const previousCardElements = getCardElements(previousCardId);
  
  // if both cards are same
  if (previousCardId.split("-")[0] === cardId.split("-")[0]) {
    currentCardElements.cardElement.disabled = true;
    previousCardElements.cardElement.disabled = true;
    previousCardId = null;
    checkIsAllCardsFlipCorrectly();
    return;
  }   else {
    allowFlipping = false;
    setTimeout(() => {
      currentCardElements.cardElement.disabled = false;
      previousCardElements.cardElement.disabled = false;
      currentCardElements.cardElement.classList.add("flipCard");
      previousCardElements.cardElement.classList.add("flipCard");
      changeCardContent(currentCardElements);
      changeCardContent(previousCardElements);
      previousCardId = null;
      setTimeout(() => {
        currentCardElements.cardElement.classList.remove("flipCard");
        previousCardElements.cardElement.classList.remove("flipCard");
        allowFlipping = true;
      }, 500);
    }, 1000);
  }
};
// winning logic
// Show the overlay (winning message)
function showWinMessage() {
  const overlay = document.getElementById('result');
  overlay.classList.add('show');
}

// Hide the overlay
function hideWinMessage() {
  const overlay = document.getElementById('result');
  overlay.classList.remove('show');
}

// Example: show on page load or when game ends
// showWinMessage();

// Restart Logic
const handleRestartClicked = () => {
  allowFlipping = true;
  previousCardId = null;
  resultElement.style.display = "none";
  resetAllCards();
  handleStartLoad();
};

// Reset to default position of cards
const resetAllCards = () => {
  flipCardToDefault({
    cardElement: heart1CardElement,
    cardFrontElement: heart1CardFrontElement,
    cardBackElement: heart1CardBackElement,
    imgElement: heart1Element,
  });
  flipCardToDefault({
    cardElement: heart2CardElement,
    cardFrontElement: heart2CardFrontElement,
    cardBackElement: heart2CardBackElement,
    imgElement: heart2Element,
  });
  flipCardToDefault({
    cardElement: cold1CardElement,
    cardFrontElement: cold1CardFrontElement,
    cardBackElement: cold1CardBackElement,
    imgElement: cold1Element,
  });
  flipCardToDefault({
    cardElement: cold2CardElement,
    cardFrontElement: cold2CardFrontElement,
    cardBackElement: cold2CardBackElement,
    imgElement: cold2Element,
  });
  flipCardToDefault({
    cardElement: kissing1CardElement,
    cardFrontElement: kissing1CardFrontElement,
    cardBackElement: kissing1CardBackElement,
    imgElement: kissing1Element,
  });
  flipCardToDefault({
    cardElement: kissing2CardElement,
    cardFrontElement: kissing2CardFrontElement,
    cardBackElement: kissing2CardBackElement,
    imgElement: kissing2Element,
  });
  flipCardToDefault({
    cardElement: hot1CardElement,
    cardFrontElement: hot1CardFrontElement,
    cardBackElement: ho1CardBackElement,
    imgElement: hot1Element,
  });
  flipCardToDefault({
    cardElement: hot2CardElement,
    cardFrontElement: hot2CardFrontElement,
    cardBackElement: hot2CardBackElement,
    imgElement: hot2Element,
  });
  flipCardToDefault({
    cardElement: money1CardElement,
    cardFrontElement: money1CardFrontElement,
    cardBackElement: money1CardBackElement,
    imgElement: money1Element,
  });
  flipCardToDefault({
    cardElement: money2CardElement,
    cardFrontElement: money2CardFrontElement,
    cardBackElement: money2CardBackElement,
    imgElement: money2Element,
  });
  flipCardToDefault({
    cardElement: party1CardElement,
    cardFrontElement: party1CardFrontElement,
    cardBackElement: party1CardBackElement,
    imgElement: party1Element,
  });
  flipCardToDefault({
    cardElement: party2CardElement,
    cardFrontElement: party2CardFrontElement,
    cardBackElement: party2CardBackElement,
    imgElement: party2Element,
  });
  flipCardToDefault({
    cardElement: laugh1CardElement,
    cardFrontElement: laugh1CardFrontElement,
    cardBackElement: laugh1CardBackElement,
    imgElement: laugh1Element,
  });
  flipCardToDefault({
    cardElement: laugh2CardElement,
    cardFrontElement: laugh2CardFrontElement,
    cardBackElement: laugh2CardBackElement,
    imgElement: laugh2Element,
  });
  flipCardToDefault({
    cardElement: nerd1CardElement,
    cardFrontElement: nerd1CardFrontElement,
    cardBackElement: nerd1CardBackElement,
    imgElement: nerd1Element,
  });
  flipCardToDefault({
    cardElement: nerd2CardElement,
    cardFrontElement: nerd2CardFrontElement,
    cardBackElement: nerd2CardBackElement,
    imgElement: nerd2Element,
  });
};