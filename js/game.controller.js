"use strict";

angular
    .module("app")
    .controller("gameCtrl", ["$scope", "solutionSvc", gameCtrl]);

function gameCtrl($scope, solutionSvc) {

    var worker,
        stateIndex = 0,
        selectedSolution = 2;

    // scope vars
    $scope.solution = solutionSvc.getSolution(selectedSolution);
    $scope.solutionEasy = solutionSvc.getSolution(2);
    $scope.solutionMedium = solutionSvc.getSolution(1);
    $scope.solutionHard = solutionSvc.getSolution(4);
    $scope.solutionEvil = solutionSvc.getSolution(3);
    $scope.isSolving = false;
    $scope.numSteps = 0;
    $scope.pctSolved = 0;

    $scope.selectSolution = function(id) {
        selectedSolution = id;
        killWorker();
        reset();
        stateIndex = 0;
        $scope.btnState = $scope.btnStates[stateIndex];
    };

    // button states
    $scope.btnStates = [
        { id: 0, text: "Start" },
        { id: 1, text: "Working..." },
        { id: 2, text: "Reset" }
    ];

    // current button state
    $scope.btnState = $scope.btnStates[stateIndex];

    // how fast the solver should work
    $scope.solveSpeed = "fast";

    /**
     *  Button click handler
     */
    $scope.clickHandler = function() {
        // switch states
        switch ( $scope.btnState.text.toLowerCase() ) {
            case "start" :
                startSolving();
                break;
            case "reset" :
                reset();
                break;
        }

        nextState();
    };

    function nextState() {
        // switch to next state
        stateIndex = (stateIndex + 1) % $scope.btnStates.length;
        $scope.btnState = $scope.btnStates[stateIndex];
    }

    /**
     *  Start solving puzzle
     */
    function startSolving() {
        $scope.isSolving = true;
        worker = new Worker('js/worker.js');
        worker.addEventListener('message', workerHandler, false);

        // start worker with message
        var o = {
            grid: $scope.solution.rows,
            row: 0,
            col: 0,
            speed: $scope.solveSpeed
        };
        worker.postMessage(o);
    }

    function killWorker() {
        if (typeof worker !== "undefined") {
            worker.terminate();
            worker = undefined;
        }
    }

    /**
     *  Reset solver
     */
    function reset() {
        $scope.isSolving = false;
        $scope.numSteps = 0;
        $scope.solution = solutionSvc.getSolution(selectedSolution);
    }

    /**
     *  Handle messages from worker thread
     */
    function workerHandler(e) {
        if (e.data === "finished") {
            killWorker();
            $scope.isSolving = false;
            nextState();
        }
        else {
            var row = e.data.row;
            var col = e.data.col;
            var num = e.data.num;
            updateGrid(row, col, num);
        }
        $scope.$apply();
    }

    /**
     *  Update sudoku grid
     */
    function updateGrid(row, col, num) {
        $scope.solution.rows[row][col].value = num;
        $scope.numSteps++;
        $scope.pctSolved = ($scope.numSteps / $scope.solution.steps) * 100;
    }

    reset();

}
