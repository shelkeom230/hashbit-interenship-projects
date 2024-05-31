```javascript
//question 1
function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );

What is the output of above code ?
```
## Answer - returns string in alert
-  The `var x='2';` declaration hoists `x` to the top of the function, making `x` a string. Thus, `typeof foo()` returns "string" and `alert('string')` displays "string".

```javascript
//question 2

function foo(){
    return x
    x=1

    function x(){}
    var x='2'
}
console.log(typeof foo())

what will be the output of below code ?
```
## Answer - returns function in console
- The `function x() { }` declaration hoists the function `x` to the top, so `return x;` returns the hoisted function `x`. Therefore, `typeof foo()` is "function".

```javascript
//question 3

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );

What is the output of below code ?
```
## Answer- returns 1 in console
- as x is globally declared as 1 above function and we are not returning local value of x i.e 2 inside function , so the function `foo()` will not print anything, hence the `console.log(x) ` print `2`