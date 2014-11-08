
function SudokuController($scope) {

	$scope.isClicked = false;
	$scope.numSteps = '0';

	// sudoku grid
	$scope.solution = [
		[ {value: 0}, {value: 0}, {value: 8}, {value: 4}, {value: 0}, {value: 3}, {value: 5}, {value: 0}, {value: 6} ],
		[ {value: 0}, {value: 0}, {value: 3}, {value: 1}, {value: 0}, {value: 2}, {value: 0}, {value: 0}, {value: 4} ],
		[ {value: 0}, {value: 4}, {value: 5}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 0} ],
		[ {value: 6}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 7} ],
		[ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
		[ {value: 4}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 8} ],
		[ {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 2}, {value: 4}, {value: 0} ],
		[ {value: 1}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 7}, {value: 8}, {value: 0}, {value: 0} ],
		[ {value: 8}, {value: 0}, {value: 6}, {value: 9}, {value: 0}, {value: 1}, {value: 3}, {value: 0}, {value: 0} ]
	];

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
				console.log(e);

				if (e.data === "finished") {
					$scope.isClicked = false;
				}
				// else if (parseInt($scope.numSteps) > 99) {
				// 	$scope.isClicked = false;
				// }
				else {
					var row = e.data.row;
					var col = e.data.col;
					var num = e.data.num;

					updateSolution(row, col, num);
					$scope.numSteps = parseInt($scope.numSteps)+1 + "";
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
