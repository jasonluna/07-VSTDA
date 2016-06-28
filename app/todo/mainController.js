(function() {
    'use strict';
// naming my controller and refrencing my app
    angular
        .module('myApp')
        .controller('mainController', mainController);
// injecting my factory into my controller
    mainController.$inject = ['mainFactory'];

    /* @ngInject */
    function mainController(mainFactory) {
        var vm = this;
        vm.title = 'mainController';
        vm.addTodo = addTodo;
        vm.deleteTodo = deleteTodo;

        activate();

        ////////////////
// refrencing the function of retrieving data from the json file, already defined in our factory
        function activate() {
            mainFactory.getData()
            .then(function(response) {
              vm.data = response;
   
        })

        }
// refrencing the function of adding data on the todo list already defined in our factory
        function addTodo(todoName, priority) {
            mainFactory.addTodo(vm.data, vm.todo, priority);


        }
        // refrencing the function of deleting data on the todo list already defined in our factory
        function deleteTodo(data) {
            var index = vm.data.indexOf(data);
            mainFactory.deleteTodo(vm.data, index);
        }
    }
})();