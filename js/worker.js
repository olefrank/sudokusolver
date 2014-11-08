// listen for message event
self.addEventListener('message', function(e) {
	var grid = e.data.grid;
	var row = e.data.row;
	var col = e.data.col;

	self.solveSudoku(grid, row, col);
}, false);


// solve sudoku with recursion
var cell;
var o = {};

function solveSudoku(grid, row, col) {
	cell = findUnassignedLocation(grid, row, col);
	row = cell[0];
	col = cell[1];
	
	// base case: no empty cells in grid
	if (row == 9) {
		postMessage("finished");
		
		return true;
	}

	for (var num = 1; num <= 9; num++) { 			
		if ( noConflicts(grid, row, col, num) ) {
			
			grid[row][col].value = num;
			
			o = {
				row: row,
				col: col,
				num: num
			};
			postMessage(o); // send data back

			//waitSome(500000000);

			// if success -> stop!
			if ( solveSudoku(grid, row, col) ) { 				
					return true;
			}
		
			// if not success -> mark cell as unassigned
			grid[row][col].value = 0;
			o = {
				row: row,
				col: col,
				num: 0
			};
			postMessage(o); // send data back

			//waitSome(500000000);
		}	
	}
	return false;
}

function findUnassignedLocation(grid, row, col) {
	while (row < 9) {

		// if cell is empty
		if (grid[row][col].value == 0) {
			return [row, col];
		}
		
		// otherwise x next cell in grid
		if (col < 8) {
			col++;
		}
		else {
			row++;
			col = 0;
		}
	}

	return [row, col];
}

function noConflicts(grid, row, col, num) {
	return isRowOk(grid, row, num) && isColOk(grid, col, num) && isBoxOk(grid, row, col, num);
}

/** Checks if num is an acceptable value for the given row */
function isRowOk(grid, row, num) {
	for (var col = 0; col < 9; col++)
		if (grid[row][col].value == num)
			return false;

	return true;
}

/** Checks if num is an acceptable value for the given column */
function isColOk(grid, col, num) {
	for (var row = 0; row < 9; row++)
		if (grid[row][col].value == num)
			return false;

	return true;	
}

/** Checks if num is an acceptable value for the box around row and col */
function isBoxOk(grid, row, col, num) {
	row = Math.floor(row / 3) * 3;
	col = Math.floor(col / 3) * 3;

	for (var r = 0; r < 3; r++)
		for (var c = 0; c < 3; c++)
			if (grid[row + r][col + c].value == num)
				return false;

	return true;
}

// function waitSome(val) {
// 	var i = 0;

// 	while (i < val) {
// 		i++;
// 	}
// }