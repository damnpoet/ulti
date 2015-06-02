'use strict';

/**
 * @ngdoc overview
 * @name Document
 * @description
 * The Document module provides document CRUD functionality.
 *
 * Document module.
 */
angular.module('document', []).config(function ($stateProvider) {
    $stateProvider
        .state('app.documents', {
            url: 'documents',
            templateUrl: 'src/modules/document/views/documents.html',
            controller: 'DocumentsController'
        });
});
