'use strict';

angular.module('document').directive('documentsTable', function(DocumentService, $modal, toaster) {
    return {
        restrict: 'E',
        require: "?ngModel",
        templateUrl: '/src/modules/document/views/documents-table-directive.html',
        scope: {
            documents: '=ngModel'
        },
        replace: true,
        link: function postLink(scope) {

            scope.getDocumentIcon = function(document) {
                return DocumentService.getDocumentIcon(document);
            };

            scope.view = function(document) {
                document.views++;

                var viewModalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/src/modules/document/views/view-modal.html',
                    controller: 'ViewModalController',
                    size: 'lg',
                    resolve: {
                        document: function () {
                            return document;
                        }
                    }
                });

                viewModalInstance.result.then(function(updatedDocument) {
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
