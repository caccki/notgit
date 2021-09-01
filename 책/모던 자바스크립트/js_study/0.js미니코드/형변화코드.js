/*
목차
1. 배열 값을 객체 프로퍼티에 넣기
2. 배열 값을 변수이름으로하는 선언문 만들기
3. 
*/

// 1. 배열값을 프로퍼티 이름으로하는 객체 만들기
var obj = {}
var arr = ["a","b","c"]
arr.forEach(function(x,i){
  obj[x] = i
})

// 2. 배열값을 변수이름으로 하는 선언문 실행
var arr = ["a","b","c"]
arr.forEach(function(key,idx){
  window[key+idx] = idx;
  console.log(key+idx)
})


// 3. 배열값을 객체 이름,프로퍼티이름으로 하는 객체 만들기
var arr = ["a","b","c"]
arr.forEach(function(key,idx){
  window[key] = {[idx]:idx}; // [idx] 괄호로 감싸는 이유 동적속성명
})


// 배열값을 > 객체 이름,프로퍼티이름으로 하는 객체 만들기(1)
var arr = ["a","b","c"]
arr.forEach(function(key,idx){
  window[key] = {[key]:idx};
  console.log( window[key])
})
/* 실행결과
a= {a: 0}
b= {b: 1}
c= {c: 2}
*/


// 배열값을 객체 이름,프로퍼티이름으로 하는 객체 만들기(1.1 변형)
var arr = ["a","b","c"]
arr.forEach(function(key,idx){
  window[key] = {[key]:idx};
  window[key][key] = 100
  console.log( window[key])
})
/* 실행결과
a= {a: 100}
b= {b: 100}
c= {c: 100}
*/



// 배열값을 객체 이름,프로퍼티이름으로 하는 객체 만들기(1.2 변형)
var a= {a:1}
var b= {b:1}
var c= {c:1}
var arr = ["a","b","c"] // 따옴표 감싸줘야 밑에서 a.a 식으로 찍힌다
arr.forEach(function(key,idx){
  window[key][key] = 2;

})
/* 실행결과
a= {a: 2}
b= {b: 2}
c= {c: 2}
*/

////////////////// 실험 ///////////////////////////
