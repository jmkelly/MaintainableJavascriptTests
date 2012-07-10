var Math = {
    add: function (a, b) {
        return a + b;
    }
}

var Midway = {
    Math: {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        }
    },
    Person: 
    {
        name: "James",
        sayName: function(){
            return this.name;
        }
    },

    EstablishmentUnit: function (eu) {
        this.eu = eu,
        this.fixedId = 15
    },
    Comparison: {
        isArray: function (value) {
            return typeof value.sort === "function";
        }
    },

    checkForProperty: function (object, property) {
        if (property in object) {
            return true;
        }
        else {
            return false;
        }
    },

    invalidRequest: function (config) {
        return config.MSG_INVALID_VALUE;
    },

    throwAnError: function () {
        throw new Exception("This is a custom Exception");
    },

    throwACustomError: function () {
        Errors.CustomError.prototype = new Error();
        throw new Errors.CustomError("My custom error");
    }



};

var config = {
    MSG_INVALID_VALUE: "Invalid value",
    URL_INVALID: "/errors/invalid/",
    CSS_SELECTED: "selected"
};

var Errors = {

    CustomError: function CustomError(message) {
        this.message = message;
    }
}



