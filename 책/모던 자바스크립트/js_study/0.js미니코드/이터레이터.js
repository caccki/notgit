/** 이터레이터 기본 */
var a=[5,4,3]
var iter = a[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/** 이터레이터 함수를 사용한 for/of문 */
var a = [5,4,3];
for(var i of a)console.log(v);