"use strict";

angular.module("app", []);

angular
    .module("app")
    .controller("gameCtrl", ["$scope", "solutionSvc", gameCtrl]);

function gameCtrl($scope, solutionSvc) {

    var worker,
        stateIndex = 0,
        selectedSolution = 2;

    $scope.selectSolution = function(id) {
        selectedSolution = id;
        $scope.solution = solutionSvc.getSolution(selectedSolution);
        reset();
    };

    // button states
    $scope.btnStates = [
        { text: "Start" },
        { text: "Reset" }
    ];

    // current button state
    $scope.currentState = $scope.btnStates[stateIndex];

    // how fast the solver should work
    $scope.solveSpeed = "fast";

    /**
     *  Button click handler
     */
    $scope.clickHandler = function() {
        // switch states
        switch ( $scope.currentState.text.toLowerCase() ) {
            case "start" :
                startSolving();
                break;
            case "reset" :
                reset();
                break;
        }

        // switch to next state
        stateIndex = (stateIndex + 1) % $scope.btnStates.length;
        $scope.currentState = $scope.btnStates[stateIndex];
    };

    /**
     *  Start solving puzzle
     */
    function startSolving() {
        $scope.isSolving = true;
        worker = new Worker('js/worker.js');
        worker.addEventListener('message', workerHandler, false);

        // start worker with message
        var o = {
            grid: $scope.solution,
            row: 0,
            col: 0,
            speed: $scope.solveSpeed
        };
        worker.postMessage(o);
    };

    /**
     *  Reset solver
     */
    function reset() {
        if (typeof worker !== "undefined") {
            worker.terminate();
            worker = undefined;
        }

        $scope.isSolving = false;
        $scope.numSteps = 0;
        stateIndex = 0;
        $scope.currentState = $scope.btnStates[stateIndex];
    };

    /**
     *  Handle messages from worker thread
     */
    function workerHandler(e) {
        if (e.data === "finished") {
            $scope.isSolving = false;
        }
        else {
            var row = e.data.row;
            var col = e.data.col;
            var num = e.data.num;
            updateGrid(row, col, num);
        }
        $scope.$apply();
    };

    /**
     *  Update sudoku grid
     */
    function updateGrid(row, col, num) {
        $scope.solution[row][col].value = num;
        $scope.numSteps++;
    };

    // load solutions
    $scope.solution = solutionSvc.getSolution(selectedSolution);
    $scope.solutionEasy = solutionSvc.getSolution(2);
    $scope.solutionMedium = solutionSvc.getSolution(1);
    $scope.solutionHard = solutionSvc.getSolution(4);
    $scope.solutionEvil = solutionSvc.getSolution(3);

    reset();

}
