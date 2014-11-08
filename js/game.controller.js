"use strict";

angular.module("app", []);

angular
    .module("app")
    .controller("gameCtrl", ["$scope", "solutionSvc", gameCtrl]);


function gameCtrl($scope, solutionSvc) {

	$scope.isClicked = false;
	$scope.numSteps = 0;

	// sudoku grid
	$scope.solution = solutionSvc.getSolution();

	// update solution grid
	var updateSolution = function(row, col, num) {
		$scope.solution[row][col].value = num;
		$scope.$apply();
	}

	// reference to worker
	var worker;
	
	// button click -> start worker thread
	$scope.clickHandler = function() {
		if ($scope.isClicked) {
			$scope.isClicked = false;

			worker.terminate();
		}
		else {
			$scope.isClicked = true;

			worker = new Worker('js/worker.js');
			worker.addEventListener('message', function(e) {

				if (e.data === "finished") {
					$scope.isClicked = false;
                    console.log($scope.isClicked);
                    $scope.$apply();
				}
				else {
					var row = e.data.row;
					var col = e.data.col;
					var num = e.data.num;

					updateSolution(row, col, num);
					$scope.numSteps++;
				}
			}, false);
			
			// send message to worker
			var o = {
				grid: $scope.solution,
				row: 0,
				col: 0
			};
			worker.postMessage(o);
		}
	}

}
