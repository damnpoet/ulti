'use strict';

angular.module('dashboard').controller('DashboardController', function ($scope, UserService, DocumentService) {

    $scope.count = {
        users:     UserService.count(),
        documents: DocumentService.count(),
        locked:    DocumentService.countLocked(),
        views:     DocumentService.countViews()
    };

    $scope.documents = DocumentService.getDocuments();

    $scope.$on('document:viewed', function() {
        $scope.count.views = DocumentService.countViews();
    });

});
