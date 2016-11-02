(function() {
    'use strict';
    angular
        .module('myApp')
        .factory('TodoFactory', TodoFactory);
    TodoFactory.$inject = ['$http', '$q'];
    /* @ngInject */
    function TodoFactory($http, $q) {
        var service = {
        	addList: addList,
            getList: getList,
            updateList: updateList,
            deleteToDo: deleteToDo
        };
        return service;

        // getting the entire ToDo list
        function getList() {
        	var defer = $q.defer();
        	$http({
        		method: 'GET',
        		url: 'http://localhost:51423/api/Todoes'
        	}).then(function(result) {
        		if (typeof result.data === 'object') {
        			defer.resolve(result.data);
        		} else {
        			defer.reject('factory error')
        		}
        	},
        	function(error){
        		defer.reject(error);
        	});
        	return defer.promise;
        }

        // Add item, Function works
        function addList(item) {
        	return $http({
                method: 'POST',
                url: 'http://localhost:51423/api/Todoes',
                data: item          
            }).then(function(response){
            	return response;
                console.log("Successfully updated the factory : " + response);
            },
            function(response){
            	return response;
                console.log("Failure: " + response);
            });
        }

        //Update the Record
    	function updateList(item, id) {
         	$http({
            method: "PUT",
            url: 'http://localhost:51423/api/Todoes' + '/' + id,
            data: item

        	}).then(function(response){
                console.log("Successfully updated the factory : " + response);
        	},
            function(response){
                console.log("Failure: " + response);
            });
    	}
		

        // delete an item, Function works!
        function deleteToDo(toDoId) {
            var defer = $q.defer();

            $http({
                method: "DELETE",
                url: 'http://localhost:51423/api/Todoes' + '/' + toDoId
            }).then(function(result) {
                if (typeof result.data === 'object') {
                    defer.resolve(result.data);
                } else {
                    defer.reject('factory error')
                }
            },
            function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
})();