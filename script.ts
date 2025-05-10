namespace MyNameSpace {
    export function myFunction() {
        console.log('Hello from myFunction');
    }
}


namespace mns {
  import myFunction = MyNameSpace.myFunction;
  myFunction();
}