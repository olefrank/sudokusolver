angular
    .module("app")
    .factory("solutionSvc", ["$http", function($http) {

    return {
        getSolution: function() {
            return [
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
        }
    }

    }]);