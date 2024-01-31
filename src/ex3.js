//?는 안들어와도 에러를 내지않음
function greet(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name); //앞의 것이 있으면 앞의것으로, 없으면 Hello
    return "".concat(greeting || "Hello", ", ").concat(name); //앞의것이 true면 Hello, 없으면 null
}
//greet;
console.log(greet("dh"));
console.log(greet("dh", "반가워"));
