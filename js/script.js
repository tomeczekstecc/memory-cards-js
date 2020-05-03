import { cardsData } from './data.js';
import createCard from './card.js';

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');


// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}


createCards();
