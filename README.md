# Sudoku Solver
### _Animated sudoku solver made with AngularJS_
---
_current version: 1.0_

Another project made for fun! It uses a recursive backtracking algorithm to solve sudoku puzzles. Because JavaScript is single threaded the recursion is done in a worker thread (web worker), which communicates with the main thread. The main thread can then update the GUI and animate the recursion. Enjoy!

**[Download it from my github here](https://github.com/olefrank/inviewtracker/)**

## Compatibility
[_SudokuSolver_ works in modern browsers:](http://caniuse.com/#search=webworker)
* Chrome 31+
* Firefox 31+ 
* IE 10+
* Opera 26+
* Safari 5.1+

## Installation
Copy it to a web server (like wamp, xxamp etc) to run it. If you have nodeJS installed, just go to the download folder and type `http-server -p 8080`. Then open a browser and go to `http://localhost:8080` to try the app. The http-server module can be installed with `npm install -g http-server`.
