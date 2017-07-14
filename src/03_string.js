// 字符串的扩展
//
// 1. 字符的 Unicode 表示法
// 2. codePointAt()
// 3. String.fromCodePoint()
// 4. 字符串的遍历器接口
// 5. at()
// 6. normalize()
// 7. includes(), startsWith(), endsWith()
// 8. repeat()
// 9. padStart()，padEnd()
// 10. 模板字符串
// 11. 实例：模板编译
// 12. 标签模板
// 13. String.raw()
// 14. 模板字符串的限制


2.
// var s = '𠮷a';
// for (let ch of s) {
// 	console.log(ch.codePointAt(0).toString(16));
// }
// 20bb7
// 61



// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。

// function is32Bit(c) {
// 	return c.codePointAt(0) > 0xFFFF;
// }

// console.log(is32Bit("𠮷")); // true
// console.log(is32Bit("a")); // false



// 3.
// console.log(String.fromCodePoint(0x20BB7));
// "𠮷"
// console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');
// true

// fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。



// 4

// var text = String.fromCodePoint(0x20BB7);

// for (let i = 0; i < text.length; i++) {
// 	console.log(text[i]);
// }
// " "
// " "

// for (let i of text) {
// 	console.log(i);
// }
// "𠮷"



//6
// var s = 'Hello world!';

// console.log(s.startsWith('Hello')) // true
// console.log(s.endsWith('!')) // true
// console.log(s.includes('o')) // true

// var s = 'Hello world!';

// console.log(s.startsWith('world', 6)) // true
// console.log(s.endsWith('Hello', 5)) // true
// console.log(s.includes('Hello', 6)) // false


// 8.
// repeat方法返回一个新字符串，表示将原字符串重复n次。
var a;
a = 'x'.repeat(3); // "xxx"'
a = 'hello'.repeat(2) // "hellohello"
a = 'na'.repeat(0) // ""

// 参数如果是小数，会被取整。

a = 'na'.repeat(2.9) // "nana"

// 如果repeat的参数是负数或者Infinity，会报错。

// 'na'.repeat(Infinity)// RangeError
// 'na'.repeat(-1)// RangeError


// 如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。

a = 'na'.repeat(-0.9) // ""
// 参数NaN等同于0。

a = 'na'.repeat(NaN) // ""
// 如果repeat的参数是字符串，则会先转换成数字。

a = 'na'.repeat('na') // ""
a = 'na'.repeat('3') // "nanana"

console.log(a);
//9
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'

// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'
// 上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。

// 'xxx'.padStart(2, 'ab') // 'xxx'
// 'xxx'.padEnd(2, 'ab') // 'xxx'
// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
//
// 'abc'.padStart(10, '0123456789')
// '0123456abc'
// 如果省略第二个参数，默认使用空格补全长度。

// 'x'.padStart(4) // '   x'
// 'x'.padEnd(4) // 'x   '
// padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。

// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"
// 另一个用途是提示字符串格式。

// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"



// 10.
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


var x = 1;
var y = 2;

console.log(`${x} + ${y} = ${x + y}`);
// "1 + 2 = 3"

console.log(`${x} + ${y * 2} = ${x + y * 2}`);
// "1 + 4 = 5"

var obj = {x: 1, y: 2};
console.log(`${obj.x + obj.y}`);
// 3


function fn() {
	return "Hello World";
}

console.log(`foo ${fn()} bar`);
// foo Hello World bar

console.log(`Hello ${'World'}`);
// "Hello World"