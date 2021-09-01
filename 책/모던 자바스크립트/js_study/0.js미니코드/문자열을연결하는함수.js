
// 문자열을 연결하는 함수
// argument 객체사용
function myConcat(){
  console.log(arguments.callee);
  console.log(arguments.length);
  console.log(arguments);
  var s ="";
  for(var i=0; i<arguments.length ; i++){
    s += arguments[i] + " ";
  }
  return s;
}
console.log(myConcat("1","apple","orange","asdasd"));


// argument.callee 연습
function plus(a,b){
  var sum = a+b 
  var fplus = eval(arguments.callee); // b는 현재함수를 실행시키는 코드를 구현하고자 한건데, 아직 성공하지 못했다

  return fplus,sum;
  
}
console.log(plus(1,2));
console.log(fplus(2,3)); 