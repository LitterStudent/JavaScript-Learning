// function foo() {
//     function bar(a) {
//         var i = 3; // 修改for 循环所属作用域中的i
//         console.log(a);
//     }
//     for (var i = 0; i < 10; i++) {
//         bar(i * 2); // 糟糕，无限循环了！
//     }
// }
// foo();

foo();

function foo() {
    var a;
    a = 2;
    console.log(a); // 2

}