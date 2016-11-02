(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TodoController', TodoController);

    myController.$inject = ['TodoFactory'];

    /* @ngInject */

        function TodoController(TodoFactory) {
        var vm = this;
        vm.title = 'TodoController';       
        // Sort by
        vm.sortToDo = function(order) {
        	vm.order = order;
        }
        // Build
        activate();
        function activate() {
        	TodoFactory.getList().then(
        		function(results) {
        			vm.todo=results;
        			return results;
        		},
        		function(error){
        			return error;
        		}
        		
        	)
        }
        // Add items, function works++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        vm.addItem = function() {
           var data = {
            		Name: vm.input,
            	 	Priority: vm.priority
            	};

            	if(vm.toDoId)
            	{
            		data.toDoId=vm.toDoId
            		//Made change below from vm.update to vm.addItem
						vm.update(data, data.toDoId);
            	}
            	else{
            console.log(data);

            TodoFactory.addList(data).then(function(response){
            	return response;
            	 activate();
            }, function(error){
            	return error;
            });
           }
        };

        // Delete item, function works+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        vm.deleteItem = function(todo) {
            TodoFactory.deleteToDo(todo).then(
                function(response) {
                	return response;
                	activate();
                },
                function(error){
        			return error;
        		}
            );

        };
        //Update item, function works++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        vm.update = function(incoming, id){
        	TodoFactory.updateList(incoming, id).then(
        		
        		 function() {
                	activate();
                },
                function(error){
        			return error;
        		}
        		);

        };
        vm.PopulatItems = function(item){

        	vm.toDoId = item.toDoId;
        	vm.input= item.name;
        	vm.priority= item.priority;
        };
    }
})();
