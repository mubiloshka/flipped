var symbols = ['🍓','🍋','🍒','🍉','🥝','🍇','🍑','🍍'];
var cards = symbols.concat(symbols);

cards.sort(() => Math.random() - 0.5);

var board = document.getElementById('gameBoard');
var flipped = [];

cards.forEach(function(symbol) {
    var card = document.createElement('div');
    card.className = 'card';
    card.textContent = '?';
    card.dataset.symbol = symbol;
    card.onclick = function() { flip(this); };
    board.appendChild(card);
});

function flip(card) {
    if (card.classList.contains('flipped') || flipped.length === 2) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    flipped.push(card);

    if (flipped.length === 2) setTimeout(check, 600);
}

function check() {
    var [a, b] = flipped;
    if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.add('matched');
        b.classList.add('matched');
    } else {
        a.classList.remove('flipped');
        b.classList.remove('flipped');
        a.textContent = '?';
        b.textContent = '?';
    }
    flipped = [];
}
