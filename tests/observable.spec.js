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
      })
    })
  })
})()