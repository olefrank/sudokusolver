angular
    .module("app")
    .factory("solutionSvc", [function() {

        return {
            getSolution: function(num) {
                var solution;

                switch(num) {
                    case 1:
                        solution = [
                            [ {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 0}, {value: 4} ],
                            [ {value: 7}, {value: 0}, {value: 0}, {value: 2}, {value: 3}, {value: 0}, {value: 9}, {value: 0}, {value: 0} ],
                            [ {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 4}, {value: 9}, {value: 0}, {value: 0}, {value: 7} ],
                            [ {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 2}, {value: 8}, {value: 4}, {value: 9} ],
                            [ {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
                            [ {value: 8}, {value: 5}, {value: 9}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0} ],
                            [ {value: 1}, {value: 0}, {value: 0}, {value: 4}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 5} ],
                            [ {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 3} ],
                            [ {value: 4}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 1}, {value: 0}, {value: 0} ]
                        ];
                        break;
                    case 2:
                        solution = [
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 6}, {value: 8}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 4}, {value: 0}, {value: 1}, {value: 7} ],
                            [ {value: 1}, {value: 7}, {value: 0}, {value: 9}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 5}, {value: 0}, {value: 0}, {value: 3}, {value: 6}, {value: 0}, {value: 0}, {value: 0}, {value: 4} ],
                            [ {value: 0}, {value: 8}, {value: 3}, {value: 0}, {value: 7}, {value: 0}, {value: 2}, {value: 6}, {value: 0} ],
                            [ {value: 4}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 5}, {value: 0}, {value: 0}, {value: 8} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 2}, {value: 0}, {value: 3}, {value: 9} ],
                            [ {value: 6}, {value: 9}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 4}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 2}, {value: 1}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0} ]
                        ];
                        break;
                    case 3:
                        solution = [
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
                        break;
                    case 4:
                        solution = [
                            [ {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 8}, {value: 2}, {value: 0}, {value: 9}, {value: 0}, {value: 1} ],
                            [ {value: 0}, {value: 2}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 9} ],
                            [ {value: 9}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 8} ],
                            [ {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 1}, {value: 0} ],
                            [ {value: 6}, {value: 0}, {value: 5}, {value: 0}, {value: 8}, {value: 4}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5} ]
                        ];
                        break;
                    case 5:
                        solution = [
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 4}, {value: 2}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
                            [ {value: 5}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 0}, {value: 4}, {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 8} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 7} ],
                            [ {value: 1}, {value: 0}, {value: 3}, {value: 0}, {value: 8}, {value: 0}, {value: 2}, {value: 0}, {value: 9} ],
                            [ {value: 6}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0} ],
                            [ {value: 2}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 0} ],
                            [ {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 3} ],
                            [ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 6}, {value: 4}, {value: 0}, {value: 0}, {value: 0} ]
                        ];
                        break;
                    default:
                        solution = [];
                        break;
                }

                return solution;
            }
        }

    }]);