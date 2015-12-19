(function (window) {
  window.rk = window.rk || {};

  window.rk.observable = {
    create: function (val) {
      //confirm we havent got a observable
      var descriptor = Object.getOwnPropertyDescriptor(val, "value");
      if (descriptor && descriptor.set && descriptor.get && val.subscribe && val.unsubscribe) {
        return val;
      }

      //create a new observable      
      var _value = val;
      var callbacks = {};
      return {
        set value(val) {
          _value = val;
          Object.keys(callbacks).forEach(function (key) {
            callbacks[key](val);
          });
        },
        get value() {
          return _value;
        },
        subscribe: function (cb) {
          var key = Date.now().toString();
          callbacks[key] = cb;
          return key;
        },
        unsubscribe: function (key) {
          if (callbacks[key]) {
            delete callbacks[key]
          }
        }
      }
    }
  }
})(window)