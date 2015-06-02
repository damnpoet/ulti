'use strict';

angular.module('document').controller('ViewModalController', function ($scope, document, DocumentService, $modalInstance, UserService) {

    $scope.document = document;
    $scope.users    = UserService.getUsers();

    $scope.getDocumentIcon = function(document) {
        return DocumentService.getDocumentIcon(document);
    };

    $scope.update = function(document) {
        $modalInstance.close(document);
    };

    $scope.close = function() {
        $modalInstance.dismiss();
    };

});
