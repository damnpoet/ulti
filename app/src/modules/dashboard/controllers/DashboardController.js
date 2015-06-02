'use strict';

angular.module('dashboard').controller('DashboardController', function ($scope, UserService, DocumentService) {

    $scope.count = {
        users:     UserService.count(),
        documents: DocumentService.count(),
        downloads: DocumentService.countDownloads(),
        views:     DocumentService.countViews()
    };

    $scope.documents = DocumentService.getDocuments();

});
