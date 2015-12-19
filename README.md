# observable
Create a simple observable object using the `rk.observable.create` factory method. Pass in the value you want to become observable. Any changes made via assignment will be passed to all subscribed callbacks

##Basic Usage

```javaScript
var observableNumber = rk.observable.create(1);
observableNumber.subscribe(console.log);
observableNumber.value = 20;
//> 20
```

##Still to come

Arrays...