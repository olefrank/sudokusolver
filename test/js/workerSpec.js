describe("worker.js functions", function() {

    var grid, row, col, actual, expected, num;

    beforeEach(function() {
        grid = [
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
    });

    describe("findUnassignedLocation()", function() {

        it("should return same cell as given if value is '0'", function() {
            // arrange
            row = 0;
            col = 0;

            // act
            actual = findUnassignedLocation(grid, row, col);

            // assert
            expected = [0,0];
            expect(actual).toEqual(expected);
        });

        it("should find the next cell in same row with value '0'", function() {
            // arrange
            row = 1;
            col = 2;

            // act
            actual = findUnassignedLocation(grid, row, col);

            // assert
            expected = [1,4];
            expect(actual).toEqual(expected);
        });

        it("should find the a cell in next row with value '0'", function() {
            // arrange
            row = 3;
            col = 8;

            // act
            actual = findUnassignedLocation(grid, row, col);

            // assert
            expected = [4,0];
            expect(actual).toEqual(expected);
        });

    });

    describe("noConflicts()", function() {

        it("should return true for an OK number", function() {
            // arrange
            row = 0;
            col = 0;
            num = 2;

            // act
            actual = noConflicts(grid, row, col, num);

            // assert
            expect(actual).toBe(true);
        });

        it("should return false for a number already in row", function() {
            // arrange
            row = 0;
            col = 0;
            num = 5;

            // act
            actual = noConflicts(grid, row, col, num);

            // assert
            expect(actual).toBe(false);
        });

        it("should return false for a number already in column", function() {
            // arrange
            row = 0;
            col = 0;
            num = 4;

            // act
            actual = noConflicts(grid, row, col, num);

            // assert
            expect(actual).toBe(false);
        });

        it("should return false for a number already in square", function() {
            // arrange
            row = 8;
            col = 8;
            num = 2;

            // act
            actual = noConflicts(grid, row, col, num);

            // assert
            expect(actual).toBe(false);
        });

    });

});