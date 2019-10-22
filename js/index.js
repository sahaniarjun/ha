var app = angular.module("dictionaryApp", []);
app.controller("dictionaryController", function ($scope, apiFac,$compile) {
    $scope.result_word="nothing";
    $scope.get_content=function(){
        console.log("called")
    };
    $scope.search ;
    $scope.items=["hey"];

});