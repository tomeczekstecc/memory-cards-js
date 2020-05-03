const cardsContainer = document.getElementById('cards-container');
const currentEl = document.getElementById('current');



// Store DOM cards
const cardsEl = [];
//Keep track of current card
let currentActiveCard = 0;

// Create a single card
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (index === 0) {
    card.classList.add('active');
  }
  card.innerHTML = `
      <div class="inner-card">
        <div class="inner-card-front">
          <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
          <p>${data.answer}</p>
        </div>

      </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM cards
  cardsEl.push(card);
  cardsContainer.appendChild(card);
  updateCurrentText();
}

function updateCurrentText() {
  currentEl.innerText = `
${currentActiveCard + 1} / ${cardsEl.length}
`;
}

export default createCard;
