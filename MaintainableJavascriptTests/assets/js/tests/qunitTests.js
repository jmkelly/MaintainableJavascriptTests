
  test("A basic test", function () {
      ok(true, "this test is fine");
      var value = "hello";
      equals("hello", value);
  });

  test("basic addition", function () {
      var result = Math.add(1, 2);
      equals(result, 3);
  });



  test("namespace addition", function () {
      var result = Midway.Math.add(1, 2);
      equals(result, 3);
  });

  test("namespace subtraction", function () {
      var result = Midway.Math.subtract(3, 1);
      equals(result, 2);
  });

  test("can create a new establishment unit", function () {
      var result = new Midway.EstablishmentUnit(10);
      var eu = result.eu;
      equals(eu, 10);
  });

  test("verify the type of an establishment unit", function () {
      var result = new Midway.EstablishmentUnit(10);
      var eu = result.eu;
      ok(result instanceof Midway.EstablishmentUnit);
  });

  test("verify that add is a function in the Midway namespace", function () {
      ok(typeof Midway.Math.add === "function");
  });

  test("is array", function () {
      var anArray = [0, 1, 2, 3];
      ok(Midway.Comparison.isArray(anArray));
  });

  test("is not an array", function () {
      var notAnArray = 2;
      ok(!Midway.Comparison.isArray(notAnArray));
  });

  test("check on object for a property", function(){
    var object = new Midway.EstablishmentUnit();
        ok(Midway.checkForProperty(object,"eu"));
    });

    test("return a config message", function () {
        var result = Midway.invalidRequest(config);
        equal(result, "Invalid value");
    });

    test("throws an error", function () {
            raises(function () {
                Midway.throwAnError();
            }, Error, "Must throw error to pass.");
    });

    test("throws a custom custom error", function () {
        raises(function () {
            Midway.throwACustomError();
        }, Error, "Must throw an error to pass.");
    });

    test("check the error type of custom error", function() {
        try {
            Midway.throwACustomError();
        } catch (ex) {
            ok(ex instanceof Errors.CustomError)
        }
    });

    test("object-based inheritance", function () {
        var person = Object.create(Midway.Person);
        equal(person.sayName(), "James");
    });

    test("object-based inheritance with override", function () {
        var person1 = Object.create(Midway.Person);
        var person2 = Object.create(Midway.Person, { name: { value: "Bob"} });
        equal(person1.sayName(), "James");
        equal(person2.sayName(), "Bob");

    });


