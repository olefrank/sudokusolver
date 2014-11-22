angular
    .module("app")
    .factory("solutionSvc", [function() {

        return {
            getSolution: function(id) {
                var solution;

                switch(id) {
                    case 0:
                        solution = {
                            rows: [
                                [ {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 0}, {value: 4} ],
                                [ {value: 7}, {value: 0}, {value: 0}, {value: 2}, {value: 3}, {value: 0}, {value: 9}, {value: 0}, {value: 0} ],
                                [ {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 4}, {value: 9}, {value: 0}, {value: 0}, {value: 7} ],
                                [ {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 2}, {value: 8}, {value: 4}, {value: 9} ],
                                [ {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
                                [ {value: 8}, {value: 5}, {value: 9}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0} ],
                                [ {value: 1}, {value: 0}, {value: 0}, {value: 4}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 5} ],
                                [ {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 2}, {value: 1}, {value: 0}, {value: 0}, {value: 3} ],
                                [ {value: 4}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 1}, {value: 0}, {value: 0} ]
                            ],
                            steps: 1111
                        };
                        break;
                    case 1:
                        solution = {
                            rows: [
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 6}, {value: 8}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 4}, {value: 0}, {value: 1}, {value: 7} ],
                                [ {value: 1}, {value: 7}, {value: 0}, {value: 9}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 5}, {value: 0}, {value: 0}, {value: 3}, {value: 6}, {value: 0}, {value: 0}, {value: 0}, {value: 4} ],
                                [ {value: 0}, {value: 8}, {value: 3}, {value: 0}, {value: 7}, {value: 0}, {value: 2}, {value: 6}, {value: 0} ],
                                [ {value: 4}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 5}, {value: 0}, {value: 0}, {value: 8} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 2}, {value: 0}, {value: 3}, {value: 9} ],
                                [ {value: 6}, {value: 9}, {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 4}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 2}, {value: 1}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0} ]
                            ],
                            steps: 1078
                        };
                        break;
                    case 2:
                        solution = {
                            rows: [
                                [ {value: 0}, {value: 0}, {value: 8}, {value: 4}, {value: 0}, {value: 3}, {value: 5}, {value: 0}, {value: 6} ],
                                [ {value: 0}, {value: 0}, {value: 3}, {value: 1}, {value: 0}, {value: 2}, {value: 0}, {value: 0}, {value: 4} ],
                                [ {value: 0}, {value: 4}, {value: 5}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 0} ],
                                [ {value: 6}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 7} ],
                                [ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
                                [ {value: 4}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 8} ],
                                [ {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 2}, {value: 4}, {value: 0} ],
                                [ {value: 1}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 7}, {value: 8}, {value: 0}, {value: 0} ],
                                [ {value: 8}, {value: 0}, {value: 6}, {value: 9}, {value: 0}, {value: 1}, {value: 3}, {value: 0}, {value: 0} ]
                            ],
                            steps: 101
                        };
                        break;
                    case 3:
                        solution = {
                            rows: [
                                [ {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 8}, {value: 2}, {value: 0}, {value: 9}, {value: 0}, {value: 1} ],
                                [ {value: 0}, {value: 2}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 9} ],
                                [ {value: 9}, {value: 1}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 8} ],
                                [ {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 6}, {value: 1}, {value: 0} ],
                                [ {value: 6}, {value: 0}, {value: 5}, {value: 0}, {value: 8}, {value: 4}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5} ]
                            ],
                            steps: 59845
                        };
                        break;
                    case 4:
                        solution = {
                            rows: [
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 4}, {value: 2}, {value: 0}, {value: 0}, {value: 5}, {value: 0} ],
                                [ {value: 5}, {value: 0}, {value: 9}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 0}, {value: 4}, {value: 0}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 8} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 5}, {value: 0}, {value: 0}, {value: 7} ],
                                [ {value: 1}, {value: 0}, {value: 3}, {value: 0}, {value: 8}, {value: 0}, {value: 2}, {value: 0}, {value: 9} ],
                                [ {value: 6}, {value: 0}, {value: 0}, {value: 3}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0} ],
                                [ {value: 2}, {value: 0}, {value: 0}, {value: 7}, {value: 0}, {value: 0}, {value: 0}, {value: 1}, {value: 0} ],
                                [ {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 0}, {value: 8}, {value: 0}, {value: 3} ],
                                [ {value: 0}, {value: 8}, {value: 0}, {value: 0}, {value: 6}, {value: 4}, {value: 0}, {value: 0}, {value: 0} ]
                            ],
                            steps: 11374
                        };
                        break;
                    default:
                        solution = {
                            rows: [],
                            steps: 0
                        };
                        break;
                }

                return solution;
            }
        }

    }]);