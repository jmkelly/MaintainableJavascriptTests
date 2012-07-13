var App = {};
var Utils = {};
var Application = {};
var Errors = {};
var SecondApplication = {};

//A simple namespaced function to divide and mutiply
(function () {
    "use strict";
  
    Utils.multiply = function (a, b) {
        return a * b;
    },
    Utils.divide = function (a, b) {
        return a / b;
    };
} ()
);

//Show that via namespacing, we can implement the same functions without fear.
(function () {
    "use strict";
    Utils.add = function (a, b) {
        return a + b;
    },
    Utils.multiply = function (a, b) {
        return a * b;
    },
    Utils.divide = function (a, b) {
        return a / b;
    },

    Utils.Math = {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply:  function (a, b) {
            return a * b;
        },
        divide:  function (a, b) {
            return a / b;
        }
    };
} ()
);

//Define an application namespace and nested object within it.
(function () {
    "use strict";
    Application.Math =  {
            add: function (a, b) {
                return a + b;
            },
            subtract: function (a, b) {
                return a - b;
            }
        },

        Application.Person = 
        {
            name: "James",
            sayName: function () {
                return this.name;
            }
        },

        Application.Book = function (name) {
            this.authors = {};
            this.name = name;
            this.fixedId = 15;
        },

        Application.BookWrapper = function (book) {
            this.book = book;
        },


        Application.HeavyBook = function (name) {
            this.Book.Call(this, name);
        },

        Application.Comparison = {
            isArray: function (value) {
                return typeof value.sort === "function";
            }
        },

        Application.checkForProperty = function (object, property) {
            if (property in object) {
                return true;
            }
            else {
                return false;
            }
        },

        Application.invalidRequest = function (config) {
            return config.MSG_INVALID_VALUE;
        },

        Application.throwAnError = function () {
            throw new Error("This is a custom Exception");
        },

        Application.throwACustomError = function () {
            Errors.CustomError.prototype = new Error();
            throw new Errors.CustomError("My custom error");
        };
    }()
);

//using the Application namespace to define config settings.
(function () {
    "use strict";
    Application.config = {
        MSG_INVALID_VALUE: "Invalid value",
        URL_INVALID: "/errors/invalid/",
        CSS_SELECTED: "selected"
    };
}()
);

(function () {
    "use strict";
    Errors = {
        CustomError: function CustomError(message) {
            this.message = message;
        }
    };
}()
);

Application.BookWrapper.prototype.addAuthor = function (author) {
    "use strict";
    Application.book.authors.add(author);
};

(function () {
    "use strict";
    var result;

    SecondApplication.foo = function () {
        bar();
    };

    function bar() {
        console.log("bar was called");
    }
} ()
);




