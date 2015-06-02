'use strict';

angular.module('document').factory('DocumentService', function(UserService) {

    var icons = [
        {
            mime: 'application/pdf',
            icon: '/images/icons/pdf_16x16.png'
        },
        {
            mime: 'application/vnd.ms-word.document',
            icon: '/images/icons/word_16x16.png'
        }
    ];

    var documents = [
        {
            id:   '1001',
            name: 'Manifest',
            owner: UserService.getById(1001),
            downloads: 80,
            views: 800,
            uploaded: new Date(),
            modified: new Date(),
            type: 'application/pdf',
            sharedWith: []
        },
        {
            id:   '1002',
            name: 'Strategy',
            owner: UserService.getById(1001),
            downloads: 50,
            views: 500,
            uploaded: new Date(),
            modified: new Date(),
            type: 'application/pdf',
            sharedWith: [UserService.getById(1002)]
        },
        {
            id:   '1003',
            name: 'Bug List',
            owner: UserService.getById(1001),
            downloads: 80,
            views: 800,
            uploaded: new Date(),
            modified: new Date(),
            type: 'application/vnd.ms-word.document',
            sharedWith: []
        },
        {
            id:   '1004',
            name: 'Collection',
            owner: UserService.getById(1002),
            downloads: 10,
            views: 250,
            uploaded: new Date(),
            modified: new Date(),
            type: 'application/application',
            sharedWith: []
        }
    ];

    var isDocument = function(document) {
        return !(_.isUndefined(document.name) || _.isUndefined(document.owner) || _.isUndefined(document.downloads) || _.isUndefined(document.views));
    };

    return {
        count: function() {
            return documents.length;
        },
        add: function(document) {
            if(isDocument(document)) {
                documents.push(document);
            }
        },
        getDocumentsByOwner: function(owner) {
            return _.filter(documents, function(document) {
                return document.owner.id == owner.id
            });
        },
        countDownloads: function() {
            var count = 0;

            _.each(documents, function(document) {
                count += document.downloads;
            });

            return count;
        },
        countViews: function() {
            var count = 0;

            _.each(documents, function(document) {
                count += document.views;
            });

            return count;
        },
        getDocuments: function() {
            return documents;
        },
        getDocumentIcon : function(document) {
            var icon = _.find(icons, function (icon) {
                return document.type == icon.mime
            });

            return !_.isUndefined(icon) ? icon.icon : '/images/icons/archive_16x16.png';
        }
    }
});
