"use strict";

//create the controller and inject Angular's $scope
angular.module('app').controller('statusController',function($scope,dataService){
    
    $scope.dataService = dataService;
    $scope.pallProjects = dataService.allProjects;
    
});