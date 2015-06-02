'use strict';

angular.module('document').controller('ShareModalController', function ($scope, document, UserService, $modalInstance) {

    $scope.document         = document;
    $scope.users            = UserService.getUsers();
    $scope.selectedUsers    = document.sharedWith;
    $scope.selected         = null;

    $scope.selectUser = function($item){
        if($scope.selectedUsers.indexOf($item) <= -1) {
            $scope.selectedUsers.push($item);
        }
        $scope.selected = null;
    };

    $scope.share = function() {
        $modalInstance.close($scope.selectedUsers);
    };

    $scope.remove = function(user) {
        var index = $scope.selectedUsers.indexOf(user);
        if(index > -1) {
            $scope.selectedUsers.splice(index, 1);
        }
    };

    $scope.close = function() {
        $modalInstance.dismiss();
    };

});
