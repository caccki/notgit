// 클로저 기본
function makeCounter(){
  var counter=0;
  return function(){
    return count++;
  };
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// 여러개 내부상태,메서드를 가진 클로저
function Person(name,age){
  var _name = name;
  var _age = age;
  return{
    getName: function(){return _name;},
    getAge: function(){ return _age;},
    setAge: function(x){ _age =x;}
  };
}
var person = Person("Tom",18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(19);
console.log(person.getAge());


/** 예제 8-10 , 메모리 누수도 막는 에라토스테네스 체 구현 ( 공부할법하지만 일단 시간없어서 생략)*/ 

