(function() {
    'use strict';
// naming my factory
    angular
        .module('myApp')
        .factory('mainFactory', mainFactory);
// injecting $http into my factory
    mainFactory.$inject = ['$http'];

    /* @ngInject */
    // naming the functions my factory will be performing
    function mainFactory($http) {
        var service = {
            getData: getData,
            addTodo: addTodo,
            deleteTodo: deleteTodo
        };
        return service;

        ////////////////
//  giving it the function to retrive data from the json
        function getData() { 
            return $http({
                method:"GET",
                url:"../../json/data.json"
            }).then(function(response) {
                return response.data;
            });
        }
// giving it the function to add items to the todo list
        function addTodo(todos, todoName, priority) {
            var todo = {name: todoName,priority: priority} 
             return todos.push(todo);

        }
// giving it the function to delete items on the todo list
        function deleteTodo(todos, index) {
            return todos.splice(index, 1);
        }
        
    }
})();