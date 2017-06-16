angular.module('myApp').factory('view1Srvc', function ($http) {
    var service = {
        refresh: refresh,
        turnOnOff: turnOnOff,
        connectToMachine: connectToMachine,
        disconnectFromMachine: disconnectFromMachine,
        exclude: exclude
    };

    return service;
    //get
    function refresh() {
        return $http.get("http://localhost:9003/getmachines");
    }
    //get
    function turnOnOff(id, powerStatus) {
        if (powerStatus === 0) {
            return $http.get("http://localhost:9003/power?id=" + id + "&togglePower=" + 1);
        } else {
            return $http.get("http://localhost:9003/power?id=" + id + "&togglePower=" + 0);
        }
        refresh();
    }
    //post
    function connectToMachine(address, user, password) {
        var params= {"address":address,"user": user, "password":password};
        return $http.post("http://localhost:9003/connect",params);
    }
    //post
    function disconnectFromMachine(address) {
        return $http.post("http://localhost:9003/disconnect",address);
    }
    //get
    function exclude(id) {
        return $http.get("http://localhost:9003/exclude?id=" + id);
    }

});
