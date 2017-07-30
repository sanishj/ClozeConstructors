# Flashcard Generator
Flashcard Generator Overview  This is a basic flashcard application written in Node. The backend essentially constitute an API that allows users to create two types of flashcards. Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington"). Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.") Cloze Deletions

## Getting started

1. Open your command line (CLI) program (*e.g.*, GitBash, Terminal, etc.)
2. Type
    ```
    npm install
    ```
to install the required node packages
3. To run the application, type 
    ```
    node index.js
    ```
4. Follow the prompts
    * `` - Create Basic Card
    * `` - Create Cloze Card
    * `` - Exit