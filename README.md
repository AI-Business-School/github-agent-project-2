# 🎮 Memory Matching Game

A fun and interactive memory card matching game built with HTML, CSS, and JavaScript. Test and improve your memory by finding all matching pairs of cards!

![Memory Game Preview](https://via.placeholder.com/800x400?text=Memory+Game+Preview)

## 🎯 How to Play

1. Click on any card to flip it and reveal the emoji
2. Click on a second card to try to find a match
3. If the cards match, they stay face up
4. If they don't match, they flip back face down
5. Continue until all pairs are matched
6. Try to complete the game in as few moves and as little time as possible
7. Use the restart button to begin a new game at any time

## 🚀 Running the Project

### Using GitHub Codespaces

1. Click on the "Code" button in this repository
2. Select the "Codespaces" tab
3. Click on "Create codespace on main"
4. Wait for the codespace to initialize
5. The game will automatically launch in the browser preview (port 3000)

### Running Locally

If you want to run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memory-matching-game.git
   cd memory-matching-game
   ```

2. Option 1: Open directly in browser
   - Simply open `index.html` in your browser

3. Option 2: Use a local server
   ```bash
   npm install -g http-server  # Install http-server globally (requires Node.js)
   http-server -p 3000         # Start server on port 3000
   ```
   - Then open `http://localhost:3000` in your browser

## ✨ Features

- 16 Cards (8 Pairs) with friendly emoji characters
- Smooth card flipping animations with 3D effect
- Game statistics tracking:
  - Move counter to track your efficiency
  - Timer to challenge your speed
- Congratulation alert when all matches are found
- Restart button to play again
- Clean, attractive UI design
- Fully responsive design works on desktop and mobile devices
- No external libraries or dependencies required

## 🧰 Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and interactivity
  - ES6+ features
  - DOM manipulation

## 🔧 Customization

Want to modify the game? Here are some simple ways to customize:

- Edit the emoji array in `script.js` to change the card icons
- Adjust the grid size in CSS for different difficulty levels
- Modify card colors and animations in `style.css`
- Add sound effects for more interactivity

## 📝 License

MIT License - feel free to use and modify as you wish!

## 🙋‍♀️ Author

Created by [Your Name]

---

Enjoy the game and happy coding! 🎮
