// var regex = new RegExp('xyz', 'i');
// 等价于
// var regex = /xyz/i;


// var regex = new RegExp(/xyz/i);
// 等价于
// var regex = /xyz/i;


// new RegExp(/abc/ig, 'i').flags
// "i"


// var s = 'aaa_aa_a';
// var r1 = /a+/g;
// var r2 = /a+/y;
// r1.exec(s) // ["aaa"]
// r2.exec(s) // ["aaa"]
// r1.exec(s) // ["aa"]
// r2.exec(s) // null


// var s = 'aaa_aa_a';
// var r = /a+_/y;

// r.exec(s) // ["aaa_"]
// r.exec(s) // ["aa_"]