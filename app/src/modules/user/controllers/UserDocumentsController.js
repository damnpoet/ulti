'use strict';

angular.module('user').controller('UserDocumentsController', function ($scope, UserService, DocumentService, $stateParams, $modal, toaster) {

    $scope.user      = UserService.getById($stateParams.userId);
    $scope.documents = DocumentService.getDocumentsByOwner($scope.user);
    $scope.myFile    = null;

    $scope.$watch('myFile', function () {
        $scope.upload($scope.myFile);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            var file = files[0];

            var document = {
                id: DocumentService.getLastId() + 1,
                name: file.name,
                owner: $scope.user,
                views: 0,
                uploaded: new Date(),
                modified: new Date(),
                type: file.type,
                sharedWith: [],
                locked: false
            };

            if(DocumentService.add(document)) {
                toaster.pop('success', 'Document Added', 'A new document was added');
            }
            else {
                toaster.pop('error', 'Invalid Document', 'The document was not created because is invalid');
            }

        }
    };

    $scope.$on('document:created', function() {
        $scope.documents = DocumentService.getDocumentsByOwner($scope.user);
    });

    $scope.$on('document:deleted', function() {
        $scope.documents = DocumentService.getDocumentsByOwner($scope.user);
    });

});
