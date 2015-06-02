'use strict';

angular.module('document').controller('DeleteModalController', function ($scope, document, $modalInstance) {

    $scope.document = document;

    $scope.yes = function() {
        $modalInstance.close();
    };

    $scope.no = function() {
        $modalInstance.dismiss();
    };

});
