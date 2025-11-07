let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
const totalPairs = 8; 
// since 16 cards = 8 pairs

function handleStartLoad() {
  shuffleCards();
}

// Shuffle all cards randomly
function shuffleCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
}

function handleCardClicked(cardId) {
  if (lockBoard) return;
  const card = document.getElementById(`${cardId}-card`);

  // prevent double clicking the same card
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }
  secondCard = card;
  lockBoard = true;
  checkForMatch();
}

function checkForMatch() {
  const firstId = firstCard.id.split("-")[0];
  const secondId = secondCard.id.split("-")[0];

  if (firstId === secondId) {
    disableCards();
    matchedPairs++;
    if (matchedPairs === totalPairs) {
      setTimeout(showWinOverlay, 600);
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", handleCardClicked);
  secondCard.removeEventListener("click", handleCardClicked);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function handleRestartClicked() {
  matchedPairs = 0;
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("flipped");
  });
  document.getElementById("result").classList.remove("show");
  shuffleCards();
}

function showWinOverlay() {
  const overlay = document.getElementById("result");
  overlay.innerHTML = "🎉 You Win the Game! 🎉<br><button class='reset-button' onclick='handleRestartClicked()'>Play Again</button>";
  overlay.classList.add("show");
}
