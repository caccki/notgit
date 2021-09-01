
// 재귀함수 기본(1.0 함수 선언문)
function fact(n){
  if(n<=1){return 1;
  } else {return n*fact(n-1);}
}
fact(2)


// 재귀함수 기본(1.1 리터럴정의)
var fact = function (n){
  if(n<=1){return 1;
  } else {return n*arguments.callee(n-1);} // 
}
fact(5)