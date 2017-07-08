// 2.变量的解构赋值
// 数组的解构赋值
// 对象的解构赋值
// 字符串的解构赋值
// 数值和布尔值的解构赋值
// 函数参数的解构赋值
// 圆括号问题
// 用途


// 2.1数组
// “模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

// let [a, b, c] = [1, 2, 3];
// console.log(a,b,c);//1,2,3


// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo,bar,baz);// 1,2,3


// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third); // "baz"


// let [x, , y] = [1, 2, 3];
// console.log(x,y);//1,3


// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head,tail); // 1,[2,3,4]

// let [x, y, ...z] = ['a'];
// console.log(x,y,z);//'a',undefined,[]


// let [foo] = [];
// console.log(foo);//undefined
// let [bar, foo] = [1];
// console.log(bar,foo);//1 undefined



// let [x, y] = [1, 2, 3];
// let [a, [b], d] = [1, [2, 3], 4];

// console.log(x,y);//1,2
// console.log(a,b,d);//1,2,4


// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};
// console.log(foo);



// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x,y,z);//a,b,c



// 解构赋值允许指定默认值。
// let [foo = true] = [];
// console.log(foo);

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// console.log(x,y);



// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
// let [x = 1] = [undefined];
// console.log(x); // 1

// let [x = 1] = [null];
// console.log(x); // null


// 惰性求值
// function f() {
// 	console.log('aaa');
// }

// let [x = f()] = [1];
// console.log(x);


// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// console.log(x,y);



// 2. 对象

// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo,bar);

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz); // undefined


// var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz); // "aaa"

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// console.log(f,l);//heiil,world



// 对象的解构赋值是下面形式的简写
// let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo,bar);



// let foo;
// ({foo} = {foo: 1}); // 成功
// console.log(foo);
//
// let baz;
// ({bar: baz} = {bar: 1}); // 成功
// console.log(baz);


// let obj = {
// 	p: [
// 		'Hello',
// 		{ y: 'World' }
// 	]
// };

// let { p: [x, { y }] } = obj;
// console.log(x,y);//Hello,World


// let obj = {};
// let arr = [];
//
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
//
// console.log(obj); // {prop:123}
// console.log(arr); // [true]


// var {x = 3} = {};
// console.log(x); // 3

// var {x, y = 5} = {x: 1};
// console.log(x,y);

// var {x:y = 3} = {};
// console.log(y); // 3

// var {x:y = 3} = {x: 5};
// console.log(y) // 5

// var { message: msg = 'Something went wrong' } = {};
// console.log(msg); // "Something went wrong"


// 默认值生效的条件是，对象的属性值严格等于undefined。

// var {x = 3} = {x: undefined};
// x // 3

// /var {x = 3} = {x: null};
// x // null


// 数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;
// console.log(first); // 1
// console.log(last); // 3

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。



// 字符串

// 字符串被转换成了一个类似数组的对象。

// const [a, b, c, d, e] = 'hello';
// console.log(a,b,c,d,e);//h,e,l,l,o
// 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

// let {length : len} = 'hello';
// console.log(len); // 5



// 数值和布尔值的解构赋值
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

// let {toString: s} = 123;
// var a = s === Number.prototype.toString // true


// let {toString: s} = true;
// var a = s === Boolean.prototype.toString // true
// console.log(a);

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError




// 函数参数的解构赋值 

// function add([x, y]){
// 	return x + y;
// }

// console.log(add([1, 2])); // 3

// [[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]

// 函数参数的解构也可以使用默认值。
// function move({x = 0, y = 0} = {}) {
// 	return [x, y];
// }
//
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// move(); // [0, 0]



// function move({x, y} = { x: 0, y: 0 }) {
// 	return [x, y];
// }
//
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, undefined]
// move({}); // [undefined, undefined]
// move(); // [0, 0]



// [1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]




// 圆括号
// （1）变量声明语句中，不能带有圆括号。

// 全部报错
// let [(a)] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };


// （2）函数参数中，模式不能带有圆括号。

// 函数参数也属于变量声明，因此不能带有圆括号。

// 报错
// function f([(z)]) { return z; }




// （3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。

// 全部报错
// ({ p: a }) = { p: 42 };
// ([a]) = [5];

// 报错
// [({ p: a }), { x: c }] = [{}, {}];



// 可以使用圆括号的情况
// 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

// [(b)] = [3]; // 正确
// ({ p: (d) } = {}); // 正确
// [(parseInt.prop)] = [3]; // 正确



// 用途
// 交换变量的值
// let x = 1;
// let y = 2;

// [x, y] = [y, x];
// console.log(x,y);//2,1


// 从函数返回多个值
// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。

// 返回一个数组
// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();//1,2,3

// 返回一个对象

// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example();//1,2



// 函数参数的定义
// 解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);

// 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});


// 提取JSON数据
// 解构赋值对提取JSON对象中的数据，尤其有用。

let jsonData = {
	id: 42,
	status: "OK",
	data: [867, 5309]
};

let { id, status, data:number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]


// 函数参数的默认值

// jQuery.ajax = function (url, {
// 	async = true,
// 	beforeSend = function () {},
// 	cache = true,
// 	complete = function () {},
// 	crossDomain = false,
// 	global = true,
// 	... more config
// }) {
// 	... do stuff
// };



// 遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
	console.log(key + " is " + value);
}

// 如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
// for (let [key] of map) {
	// ...
// }

// 获取键值
// for (let [,value] of map) {
	// ...
// }