'use strict';

angular.module('user').controller('UserDocumentsController', function ($scope, UserService, DocumentService, $stateParams) {

    $scope.user      = UserService.getById($stateParams.userId);
    $scope.documents = DocumentService.getDocumentsByOwner($scope.user);

});
