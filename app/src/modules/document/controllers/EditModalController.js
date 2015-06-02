'use strict';

angular.module('document').controller('EditModalController', function ($scope, document, DocumentService, $modalInstance, UserService, toaster) {

    $scope.document = angular.copy(document, {});
    $scope.users    = UserService.getUsers();

    $scope.getDocumentIcon = function(document) {
        return DocumentService.getDocumentIcon(document);
    };

    $scope.update = function() {
        if(_.isEmpty($scope.document.name)) {
            toaster.pop('error', 'Missing Document Name', 'The document name is required.');
        }
        else if(_.isEmpty($scope.document.owner)) {
            toaster.pop('error', 'Missing Document Owner', 'The document owner is required.');
        }
        else {
            $modalInstance.close($scope.document);
        }
    };

    $scope.close = function() {
        $modalInstance.dismiss();
    };

});
