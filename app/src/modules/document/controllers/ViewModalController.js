'use strict';

angular.module('document').controller('ViewModalController', function ($scope, document, DocumentService, $modalInstance) {

    $scope.document = document;

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
