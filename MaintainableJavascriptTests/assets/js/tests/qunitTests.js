
module("inline test");

test("A basic test", function () {
    ok(true, "this test is fine");
    var value = "hello";
    equals("hello", value);
});

module("namespaced static function");

test("basic addition", function () {
    var result = Math.add(1, 2);
    equals(result, 3);
});


module("nested namespaced static function");

test("namespace addition", function () {
    var result = Application.Math.add(1, 2);
    equals(result, 3);
});

test("namespace subtraction", function () {
    var result = Application.Math.subtract(3, 1);
    equals(result, 2);
});

module("Namespaced new object");

test("can create a new book unit", function () {
    var result = new Application.Book("War of the Worlds");
    var name = result.name;
    equals(name, "War of the Worlds");
});

module("Namespaced object instance / type");

test("verify the type of an  Book", function () {
    var result = new Application.Book("Another Book");
    ok(result instanceof Application.Book);
});

test("verify that add is a function in the Midway namespace", function () {
    ok(typeof Application.Math.add === "function");
});

module("Namespace array comparison");

test("is array", function () {
    var anArray = [0, 1, 2, 3];
    ok(Application.Comparison.isArray(anArray));
});

test("is not an array", function () {
    var notAnArray = 2;
    ok(!Application.Comparison.isArray(notAnArray));
});

module("object property");

test("check on object for a property", function () {
    var object = new Application.Book();
    ok(Application.checkForProperty(object, "name"));
});

module("configuration");

test("return a config message", function () {
    var result = Application.invalidRequest(config);
    equal(result, "Invalid value");
});

module("error handling");

test("throws an error", function () {
    raises(function () {
        Application.throwAnError();
    }, Error, "Must throw error to pass.");
});

test("throws a custom custom error", function () {
    raises(function () {
        Application.throwACustomError();
    }, Error, "Must throw an error to pass.");
});

test("check the error type of custom error", function () {
    try {
        Application.throwACustomError();
    } catch (ex) {
        ok(ex instanceof Errors.CustomError)
    }
});

module("inheritance");

test("object-based inheritance", function () {
    var person = Object.create(Application.Person);
    equal(person.sayName(), "James");
});

test("object-based inheritance with override", function () {
    var person1 = Object.create(Application.Person);
    var person2 = Object.create(Application.Person, { name: { value: "Bob"} });
    equal(person1.sayName(), "James");
    equal(person2.sayName(), "Bob");

});

test("type-based inheritance", function () {
    //var book = new Application.Book("The Man and the Sea");
    //var book = new Application.Book();
    Application.HeavyBook.prototype = new Application.Book();
    equal(Application.HeavyBook.name, "");
});

test("facade pattern", function () {
    var book = new Application.Book("Lord of the Flies");
    var author = {};
    author.firstname = "William";
    author.lastname = "Golding";
    var bookWrapper = new Application.BookWrapper(book);
    //bookWrapper.addAuthor(author); //need to read up on this one, not sure why it isn't working....
});

test("object is not extensible", function () {

    var person = Application.Person;
    var book = new Application.Book("A book");
    Object.preventExtensions(person);
    Object.preventExtensions(book);
    ok(!Object.isExtensible(person));
    ok(!Object.isExtensible(book));
    book.author = "An Author";
    notEqual(book.name, "An Author");
});



