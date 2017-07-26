/**
 * Created by Administrator on 2017/7/26.
 */


// function log(x, y = 'World') {
// 	console.log(x, y);
// }
//
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello
//
// function foo({x, y = 5}) {
// 	console.log(x, y);
// }
//
// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined


var x = 1;
function foo(x, y = function() { x = 2; }) {
	var x = 3;
	y();
	console.log(x);
}

foo() // 3
x // 1





//箭头函数
// var f = v => v;
// var f = function(v) {
// 	return v;
// };


// var f = () => 5;
// // 等同于
// var f = function () { return 5 };
//
// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
// 	return num1 + num2;
// };





// 正常函数写法
// [1,2,3].map(function (x) {
// 	return x * x;
// });
//
// // 箭头函数写法
// [1,2,3].map(x => x * x);
//
// // 正常函数写法
// var result = values.sort(function (a, b) {
// 	return a - b;
// });
//
// // 箭头函数写法
// var result = values.sort((a, b) => a - b);
//
// const numbers = (...nums) => nums;
//
// numbers(1, 2, 3, 4, 5)
// // [1,2,3,4,5]
//
// const headAndTail = (head, ...tail) => [head, tail];
//
// headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]