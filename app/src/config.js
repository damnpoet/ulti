'use strict';

/**
 * @ngdoc overview
 * @name Config
 * @description
 * Config File.
 *
 * Contains application configuration.
 */
angular.module('config', []).constant('config', {
    application: {
        name: "Ulti"
    },
    date: {
        format: 'medium'
    }
});
