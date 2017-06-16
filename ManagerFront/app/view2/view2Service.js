angular.module('myApp').factory('view2Srvc', function ($http) {
    var service = {
        add: add,
        update: update,
        query: query,
        remove: remove
    };

    return service;
    //post
    function add(machine) {
        machine.id = parseFloat(0);
        console.log(machine);
        return $http.post("http://localhost:9003/add", machine);
    }

    //post
    function update(machine) {
        console.log(machine);
        return $http.post("http://localhost:9003/edit", machine);
    }
    //get
    function query(id) {
        return $http.get("http://localhost:9003/getmachine?id=" + id);
    }
    //get
    function remove(id) {
        return $http.get("http://localhost:9003/exclude?id=" + id);
    }
});