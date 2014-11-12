// listen for message event
self.addEventListener('message', function(e) {
	var grid = e.data.grid,
	    row = e.data.row,
	    col = e.data.col;

    interval = getInterval(e.data.speed);

	self.solveSudoku(grid, row, col);
}, false);

// solve sudoku with recursion
var cell,
    o = {},
    interval = getInterval("default");

/** Recursive function to solve a sudoku using 'back tracking' (or brute force!) */
function solveSudoku(grid, row, col) {
	cell = findUnassignedLocation(grid, row, col);
	row = cell[0];
	col = cell[1];

	// base case: no empty cells in grid
	if (row == grid.length) {
		postMessage("finished");
		
		return true;
	}

	for (var num = 1; num <= grid.length; num++) {
		if ( noConflicts(grid, row, col, num) ) {
			
			grid[row][col].value = num;
			
			o = {
				row: row,
				col: col,
				num: num
			};
			postMessage(o); // send data back

                waitSome(interval);

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

                waitSome(interval);

		}
	}
	return false;
}

/** Find next available cell (with value '0')
 *  It starts at a given point (row,col) )in the grid and moves left to right
 *  If no cell was found in row it moves to start of next row
 */
function findUnassignedLocation(grid, row, col) {
	while (row < grid.length) {

		// if cell is empty
		if (grid[row][col].value == 0) {
			return [row, col];
		}
		
		// otherwise x next cell in grid
		if (col < (grid.length-1) ) {
			col++;
		}
		else {
			row++;
			col = 0;
		}
	}

	return [row, col];
}

/** Checks for conflicts of a number in a row, column and square */
function noConflicts(grid, row, col, num) {
	return isRowOk(grid, row, num) && isColOk(grid, col, num) && isSquareOk(grid, row, col, num);
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
function isSquareOk(grid, row, col, num) {
	row = Math.floor(row / 3) * 3;
	col = Math.floor(col / 3) * 3;

	for (var r = 0; r < 3; r++)
		for (var c = 0; c < 3; c++)
			if (grid[row + r][col + c].value == num)
				return false;

	return true;
}

/** This method occupies CPU for a while */
function waitSome(val) {
	while (val > 0) {
		val--;
	}
}

function getInterval(speed) {
    var result;
    switch ( speed.toLowerCase() ) {
        case "slow":
            result = 400000000;
            break;
        case "medium":
            result = 100000000;
            break;
        case "fast":
            result = 10000000;
            break;
        case "warp":
            result = 2000000;
            break;
        default:
            result = 100000000;
            break;
    }
    return result;
}