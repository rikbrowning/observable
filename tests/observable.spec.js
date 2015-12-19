(function () {
  describe("observable", function () {
    describe("test with numbers", function () {
      var num = 10;
      var ob;

      beforeEach(function () {
        ob = rk.observable.create(num);
      });
      it("should set the observable value to the passed in value", function () {
        expect(ob.value).toBe(num);
      });
      it("should trigger a callback when updated", function () {
        var spy = jasmine.createSpy();
        var newValue = 20;
        var key = ob.subscribe(spy);
        ob.value = newValue;
        expect(ob.value).toBe(newValue);
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.argsFor(0)[0]).toBe(newValue);
        expect(key).not.toBeUndefined();
        expect(key.length).toBeGreaterThan(0);
      });
    })
    describe("test with strings", function () {
      var str = "hello";
      var ob;

      beforeEach(function () {
        ob = rk.observable.create(str);
      });
      it("should set the observable value to the passed in value", function () {
        expect(ob.value).toBe(str);
      });
      it("should trigger a callback when updated", function () {
        var spy = jasmine.createSpy();
        var newValue = "World";
        var key = ob.subscribe(spy);
        ob.value = newValue;
        expect(ob.value).toBe(newValue);
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.argsFor(0)[0]).toBe(newValue);
        expect(key).not.toBeUndefined();
        expect(key.length).toBeGreaterThan(0);
      });

    });
    describe("general functionality", function () {
      var ob;
      beforeEach(function () {
        ob = rk.observable.create(1);
      });
      it("should not observable an observable", function () {
        var secondOb = rk.observable.create(ob);
        expect(ob.value).toBe(1);
        expect(secondOb).toBe(ob);

      });
      it("should unsubscribe", function () {
        var ob = rk.observable.create(1);
        var spy = jasmine.createSpy();
        var key = ob.subscribe(spy);
        ob.value = 20;
        expect(spy).toHaveBeenCalled();
        ob.unsubscribe(key);
        ob.value = 22;
        expect(spy.calls.count()).toBe(1);

      })
    })
  })
})()