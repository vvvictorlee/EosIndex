"use strict";

angular.module("app").config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "public/views/index.html",
      controller: "indexController",
      activetab: "index"
    })
    .when("/rating", {
      templateUrl: "public/views/rating.html",
      controller: "ratingController",
      activetab: "rating"
    })
    .when("/about", {
      templateUrl: "public/views/about.html",
      controller: "aboutController",
      activetab: "about"
    })
    .when("/scatter", {
      templateUrl: "public/views/projects/scatter.html",
      controller: "scatterController",
      activetab: "scatter"
    })
    .when("/everipedia", {
      templateUrl: "public/views/projects/everipedia.html",
      controller: "everipediaController",
      activetab: "everipedia"
    })
    .when("/chintai", {
      templateUrl: "public/views/projects/chintai.html",
      controller: "chintaiController",
      activetab: "chintai"
    });
});
