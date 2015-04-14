var hackernewsControllers = angular.module("hackernewsControllers", []);
hackernewsControllers.controller("MainCtrl", ["$scope", "$http", function ($scope, $http) {
    $scope.news = [];
    $http.get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .success(function (data, status, headers, config) {
            var ids = data;
            ids.splice(10);
            ids.forEach(function (id) {
                $http.get(["https://hacker-news.firebaseio.com/v0/item/", id, ".json"].join(""))
                    .success(function (data, status, headers, config) {
                        var news = {};
                        news.id = id;
                        news.title = data.title;
                        news.url = data.url;
                        $scope.news.push(news);
                    })
                    .error(function (data, status, headers, config) {
                        console.err(data);
                    });
            });
        })
        .error(function (data, status, headers, config) {
            console.err(data);
        });
}]);
hackernewsControllers.controller("DetailCtrl", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
    $http.get(["https://hacker-news.firebaseio.com/v0/item/", $routeParams.id, ".json"].join(""))
        .success(function (data, status, headers, config) {
            var news = data;
            $scope.title = news.title;
            var kidsids = data.kids;
            $scope.comments = [];
            kidsids.forEach(function (id) {
                $http.get(["https://hacker-news.firebaseio.com/v0/item/", id, ".json"].join(""))
                    .success(function (data, status, header, config) {
                        var comment = {};
                        comment.text = data.text;
                        comment.by = data.by;
                        $scope.comments.push(comment);
                    })
                    .error(function (data, status, header, config) {
                        console.err(data);
                    });
            });
        })
        .error(function (data, status, headers, config) {
            console.err(data);
        });
}]);
