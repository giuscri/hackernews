var hackernewsControllers=angular.module("hackernewsControllers",[]);hackernewsControllers.controller("MainCtrl",["$scope","$http",function(a,b){a.news=[],b.get("https://hacker-news.firebaseio.com/v0/topstories.json").success(function(c,d,e,f){var g=c;g.splice(10),g.forEach(function(c){b.get(["https://hacker-news.firebaseio.com/v0/item/",c,".json"].join("")).success(function(b,d,e,f){var g={};g.id=c,g.title=b.title,g.url=b.url,a.news.push(g)}).error(function(a,b,c,d){console.err(a)})})}).error(function(a,b,c,d){console.err(a)})}]),hackernewsControllers.controller("DetailCtrl",["$scope","$http","$routeParams",function(a,b,c){b.get(["https://hacker-news.firebaseio.com/v0/item/",c.id,".json"].join("")).success(function(c,d,e,f){var g=c;a.title=g.title;var h=c.kids;a.comments=[],h.forEach(function(c){b.get(["https://hacker-news.firebaseio.com/v0/item/",c,".json"].join("")).success(function(b,c,d,e){var f={};f.text=b.text,f.by=b.by,a.comments.push(f)}).error(function(a,b,c,d){console.err(a)})})}).error(function(a,b,c,d){console.err(a)})}]);