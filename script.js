var MyNameSpace;
(function (MyNameSpace) {
    function myFunction() {
        console.log('Hello from myFunction');
    }
    MyNameSpace.myFunction = myFunction;
})(MyNameSpace || (MyNameSpace = {}));
var mns;
(function (mns) {
    var myFunction = MyNameSpace.myFunction;
    myFunction();
})(mns || (mns = {}));
