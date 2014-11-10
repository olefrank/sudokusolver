"use strict";

angular.module("app", []);

angular
    .module("app")
    .controller("gameCtrl", ["$scope", "solutionSvc", gameCtrl]);

function gameCtrl($scope, solutionSvc) {

    $scope.solution = solutionSvc.getSolution();
	$scope.isSolving = false;
	$scope.numSteps = 0;

    var worker;
    var stateIndex = 0;
    $scope.btnStates = [
        { text: "Start" },
        { text: "Reset" },
    ];
    $scope.currentState = $scope.btnStates[stateIndex];

    $scope.clickHandler = function() {
        // handle state
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
        console.log( (stateIndex + 1) % $scope.btnStates.length);

    }

    var startSolving = function() {
        $scope.isSolving = true;
        worker = new Worker('js/worker.js');
        worker.addEventListener('message', $scope.workerHandler, false);

        // start worker with messate
        var o = {
            grid: $scope.solution,
            row: 0,
            col: 0
        };
        worker.postMessage(o);
    };

    var reset = function() {
        $scope.solution = solutionSvc.getSolution();
        $scope.numSteps = 0;
    };

    $scope.workerHandler = function(e) {
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

    var updateGrid = function(row, col, num) {
        $scope.solution[row][col].value = num;
        $scope.numSteps++;
    };

}
