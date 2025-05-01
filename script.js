document.addEventListener('DOMContentLoaded', () => {
    // Game elements
    const gameContainer = document.getElementById('game-container');
    const movesElement = document.querySelector('.moves');
    const timerElement = document.querySelector('.timer');
    const restartButton = document.querySelector('.restart-btn');
    
    // Game state variables
    let cards = [];
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let moves = 0;
    let matchedPairs = 0;
    let gameStarted = false;
    let timer = 0;
    let timerInterval;
    
    // Array of emoji pairs for cards
    const emojis = ['🐱', '🐶', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯'];
    
    // Initialize game
    function initGame() {
        // Reset game state
        moves = 0;
        matchedPairs = 0;
        gameStarted = false;
        timer = 0;
        clearInterval(timerInterval);
        
        // Update display
        movesElement.textContent = `0 Moves`;
        timerElement.textContent = `Time: 0s`;
        
        // Clear game container
        gameContainer.innerHTML = '';
        
        // Create emoji pairs
        cards = [...emojis, ...emojis];
        
        // Shuffle cards
        shuffleCards();
        
        // Create card elements
        createCards();
    }
    
    // Shuffle cards array
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }
    
    // Create card elements and add them to the DOM
    function createCards() {
        cards.forEach((emoji, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.index = index;
            cardElement.dataset.emoji = emoji;
            
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            cardFront.textContent = emoji;
            
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            
            cardElement.appendChild(cardFront);
            cardElement.appendChild(cardBack);
            
            cardElement.addEventListener('click', flipCard);
            gameContainer.appendChild(cardElement);
        });
    }
    
    // Start the game timer
    function startTimer() {
        timerInterval = setInterval(() => {
            timer++;
            timerElement.textContent = `Time: ${timer}s`;
        }, 1000);
    }
    
    // Handle card flipping
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        
        // Start timer on first move
        if (!gameStarted) {
            gameStarted = true;
            startTimer();
        }
        
        this.classList.add('flip');
        
        if (!hasFlippedCard) {
            // First card flipped
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        
        // Second card flipped
        secondCard = this;
        checkForMatch();
        
        // Update moves counter
        moves++;
        movesElement.textContent = `${moves} ${moves === 1 ? 'Move' : 'Moves'}`;
    }
    
    // Check if the two flipped cards match
    function checkForMatch() {
        const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
        
        if (isMatch) {
            disableCards();
            matchedPairs++;
            
            // Check if all pairs are matched (game complete)
            if (matchedPairs === emojis.length) {
                setTimeout(() => {
                    clearInterval(timerInterval);
                    alert(`Congratulations! You completed the game in ${moves} moves and ${timer} seconds.`);
                }, 500);
            }
        } else {
            unflipCards();
        }
    }
    
    // Remove event listeners from matched cards
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    
    // Flip back unmatched cards
    function unflipCards() {
        lockBoard = true;
        
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
    
    // Reset the board after each turn
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    // Restart game event
    restartButton.addEventListener('click', initGame);
    
    // Initialize game on page load
    initGame();
});
