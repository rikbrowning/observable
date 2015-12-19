(function (window) {
  window.rk = window.rk || {};

  window.rk.observable = {
    create: function (val) {
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
        }
      }
    }
  }
})(window)