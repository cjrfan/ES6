// let 和 const 命令

// let 声明的变量仅在它所在的代码块内有效
// {
// 	let a = 1;
// 	var b = 2;
// }
// console.log(a); //ReferenceError: a is not defined
// console.log(b);


// for (let i = 0; i < 10; i++) {
// 	console.log('i的值为：'+i);
// }
// console.log('i的值为：'+i); //ReferenceError: i is not defined


// var a = [];
// for (var i = 0; i < 10; i++) {
// 	a[i] = function () {
// 		console.log(i);
// 	};
// }
// a[6](); // 10


// let声明的变量仅在块级作用域内有效
// var a = [];
// for (let i = 0; i < 10; i++) {
// 	a[i] = function () {
// 		console.log(i);
// 	};
// }
// a[6](); // 6


// 循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。
// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }
// abc
// abc
// abc


// let 不存在变量提升
// console.log(foo); // 输出undefined
// var foo = 2;

// console.log(bar); // 报错ReferenceError
// let bar = 2;

// http://www.tuicool.com/articles/viUZFbj
// http://blog.csdn.net/huangjq36sysu/article/details/51085674


// 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// var tmp = 123;
//
// if (true) {
// 	tmp = 'abc'; // ReferenceError
// 	let tmp;
// }


// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
// if (true) {
// 	// TDZ开始
// 	tmp = 'abc'; // ReferenceError
// 	console.log(tmp); // ReferenceError
//
// 	let tmp; // TDZ结束
// 	console.log(tmp); // undefined
//
// 	tmp = 123;
// 	console.log(tmp); // 123
// }


// typeof x; // ReferenceError
// let x;


// typeof undeclared_variable // "undefined"


// function bar(x = y, y = 2) {//ReferenceError: y is not defined
// 	return [x, y];
// }
//
// bar(); // 报错


// function bar(x = 2, y = x) {
// 	return [x, y];
// }
// bar(); // [2, 2]


// 不报错
// var x = x;


// 报错
// let x = x;
// ReferenceError: x is not defined


// ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为


// let不允许在相同作用域内，重复声明同一个变量
// 报错
// (function () {
// 	let a = 10;
// 	var a = 1;
// })();


// 报错
// (function () {
// 	let a = 10;
// 	let a = 1;
// })();


// 不能在函数内部重新声明参数。
// function func(arg) {
// 	let arg; // 报错
// }

// function func(arg) {
// 	{
// 		let arg; // 不报错
// 	}
// }


// 内层变量可能会覆盖外层变量。（变量提升）
// var tmp = new Date();
//
// function f() {
// 	console.log(tmp);
// 	if (false) {
// 		var tmp = 'hello world';
// 	}
// }
//
// f(); // undefined


// 用来计数的循环变量泄露为全局变量。
// var s = 'hello';
//
// for (var i = 0; i < s.length; i++) {
// 	console.log(s[i]);
// }
//
// console.log(i); // 5


// es6块级作用域，外层代码块不受内层代码块的影响
// function f1() {
// 	let n = 5;
// 	if (true) {
// 		let n = 10;
// 	}
// 	console.log(n); // 5
// }
// f1();


// ES6 允许块级作用域的任意嵌套。
// {{{{{let insane = 'Hello World'}}}}};


// 外层作用域无法读取内层作用域的变量。
// {{{{
// 	{let insane = 'Hello World'}
// 	console.log(insane); // 报错
// }}}};


// 内层作用域可以定义外层作用域的同名变量。
// {{{{
// 	let insane = 'Hello World';
// 	{let insane = 'Hello World'}
// }}}};


// 块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。

// ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

// ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。


// const命令

// const声明一个只读的常量。一旦声明，常量的值就不能改变。
// const PI = 3.1415;
// PI // 3.1415
// PI = 3;
// TypeError: Assignment to constant variable.



// const一旦声明变量，就必须立即初始化，不能留到以后赋值。
// const foo;
// SyntaxError: Missing initializer in const declaration


// const的作用域与let命令相同：只在声明所在的块级作用域内有效。
// if (true) {
// 	const MAX = 5;
// }
// MAX // Uncaught ReferenceError: MAX is not defined



// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
// if (true) {
// 	console.log(MAX); // ReferenceError
// 	const MAX = 5;
// }


// const声明的常量，也与let一样不可重复声明。
// var message = "Hello!";
// let age = 25;

// 以下两行都会报错
// const message = "Goodbye!";
// const age = 30;


// ES6 声明变量的六种方法
// ES5 只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有6种声明变量的方法。


// ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。


// var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
// window.a // 1
//
// let b = 1;
// window.b // undefined


//两种勉强取到顶层对象的方法
// 方法一
// (typeof window !== 'undefined'
// 	? window
// 	: (typeof process === 'object' &&
// typeof require === 'function' &&
// typeof global === 'object')
// 	? global
// 	: this);

// 方法二
// var getGlobal = function () {
// 	if (typeof self !== 'undefined') { return self; }
// 	if (typeof window !== 'undefined') { return window; }
// 	if (typeof global !== 'undefined') { return global; }
// 	throw new Error('unable to locate global object');
// };