'use strict';

angular.module('user').controller('UsersController', function ($scope, UserService, DocumentService) {

    $scope.users = UserService.getUsers();

    $scope.countDocumentsForUser = function(user) {
        var documents = DocumentService.getDocumentsByOwner(user);
        return !_.isUndefined(documents) ? documents.length : 0;
    };

});
