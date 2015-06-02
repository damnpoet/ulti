'use strict';

angular.module('document').directive('documentsTable', function($rootScope, DocumentService, $modal, toaster, $window) {
    return {
        restrict: 'E',
        require: "?ngModel",
        templateUrl: '/src/modules/document/views/documents-table-directive.html',
        scope: {
            documents: '=ngModel',
            hideOwner: '=hideOwner'
        },
        replace: true,
        link: function postLink(scope) {

            scope.getDocumentIcon = function(document) {
                return DocumentService.getDocumentIcon(document);
            };

            scope.view = function(document) {
                if(!_.isEmpty(document.base64)) {
                    document.views++;
                    $rootScope.$broadcast('document:viewed', document);

                    $window.open("data:" + document.type + ";base64, " + document.base64, document.name);
                }
                else {
                    toaster.pop('error', 'Invalid Document', 'The document cannot be displayed because is invalid.');
                }

            };

            scope.edit = function(document) {
                if(document.locked) {
                    toaster.pop('error', 'Document Locked.', 'This document is locked and can\'t be edited.');
                    return;
                }

                var editModalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/src/modules/document/views/edit-modal.html',
                    controller: 'EditModalController',
                    size: 'lg',
                    resolve: {
                        document: function () {
                            return document;
                        }
                    }
                });

                editModalInstance.result.then(function(updatedDocument) {
                    updatedDocument.modified = new Date();
                    document = updatedDocument;
                    toaster.pop('success', 'Document Updated', 'The document was updated');
                });
            };

            scope.share = function(document) {
                var shareModalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/src/modules/document/views/share-modal.html',
                    controller: 'ShareModalController',
                    resolve: {
                        document: function () {
                            return document;
                        }
                    }
                });

                shareModalInstance.result.then(function(users) {
                    document.sharedWith = users;
                    toaster.pop('success', 'Document Shared', 'The document was shared with the selected users');
                });
            };

            scope.delete = function(document) {
                var shareModalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/src/modules/document/views/delete-modal.html',
                    controller: 'DeleteModalController',
                    resolve: {
                        document: function () {
                            return document;
                        }
                    }
                });

                shareModalInstance.result.then(function() {
                    DocumentService.remove(document);
                    toaster.pop('success', 'Document Removed', 'The document was removed');
                });
            };
        }
    }
});
