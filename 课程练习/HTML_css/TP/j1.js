// function f1(){
//   console.log("f1被调用");
//   return function(){
//     console.log("f2被调用");
//   }
// }
// f1();  //输出  “f1被调用”
// let xx=f1();  //将f1函数赋给xx,且return 数据给xx
// xx();  //f1被调用，f1被调用，f2被调用
// xxx=1;
// console.log(xxx);
//1、下方代码在JS中可单独运行，
let y=true;
function myConfirm(){
    if (y) {
        y="T";
    }else {
        y="取消";
    }
    console.log(y);
}
myConfirm();
console.log(y);

//2但在html中写成下方样式才能运行
function myConfirm(){
    let y=true;
    if (y) {
        y="T";
    }else {
        y="取消";
    }
    console.log(y);
}
myConfirm();
