# Simple Quiz App

A lightweight web-based quiz application where users can answer multiple-choice questions and receive their score at the end. The quiz dynamically updates the questions, provides feedback on the selected answers, and displays the final score once all questions are answered.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [License](#license)

## Features

- Multiple-choice questions with four answer options.
- Immediate feedback on whether the selected answer is correct or incorrect.
- Dynamic question and answer rendering.
- Score tracking and final score display.
- Responsive design that works on mobile and desktop devices.

## Technologies

This project uses the following technologies:

- **HTML5**: For the structure of the quiz app.
- **CSS3**: For styling the UI and providing responsiveness.
- **JavaScript**: For dynamically rendering questions and answers, handling user interactions, and managing game logic.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/quiz-app.git
   ```

2. Navigate to the project directory:
    ```
    cd quiz-app
    ```

3. Open the index.html file in your browser to launch the quiz app.
    ``` 
    open index.html
    ```
Alternatively, you can open the file in any web browser by double-clicking it or dragging it to the browser window.

## Usage
1. Open the app in your browser.
2. The app will display one question at a time, along with four answer choices.
3. Select an answer by clicking on one of the buttons. The app will immediately indicate whether the selected answer is correct or incorrect by highlighting the buttons.
4. Click on the Next button to proceed to the next question.
5. After the final question, the app will display your total score.
6. You can click Play Again to restart the quiz.

## Project Structure
    ```
    ├── index.html        # Main HTML file for the app
    ├── style.css         # Stylesheet for the app
    ├── script.js         # JavaScript file containing the quiz logic
    └── README.md         # Documentation file (this file)
    ```

## Code Overview:
1. index.html: Defines the structure of the quiz, including the question display and buttons for answers.
2. style.css: Adds basic styling for the app layout, button styles, and responsiveness.
3. script.js: Contains the logic for:
- Rendering questions and answers dynamically.
- Handling user input and providing feedback.
- Tracking the user's score.
- Restarting the quiz after completion.

## Contribution
Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/YourFeature).
6. Open a Pull Request.

