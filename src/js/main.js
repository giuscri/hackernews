var hackernews = angular.module("hackernews", ["ngRoute", "hackernewsControllers", "ngSanitize"]);
hackernews.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/main.html",
            controller: "MainCtrl"
        })
        .when("/:id/comments", {
            templateUrl: "templates/comments.html",
            controller: "DetailCtrl"
        });
}]);
