var a = { p:"v" }
var b = { p:"v" }
var c = a;
console.log(a==b)
console.log(a.p==b.p)
console.log(a===b)
console.log(a==c)


function f1 (n){return f1;} ; console.log(a()); // 1
var A = a()
function b (){return 2;} ; console.log(b()); // 2
var B = b()

//
var x = function a (){return 3;}; console.log(x());console.log(a());
var y = function (){return 3;}


function f1 (n){
  if(n<=1) return 1;
  return (n)*f1(n-1) ;
};
console.log(f1(10))

var f2 = new Function ('n','  if(n<=1) return 1; return (n)*anonymous(n-1) ;')
console.log(f2(10))




function f1(){
  console.log(arguments);
  //arguments.shift();
  var args = Array.prototype.slice.apply(arguments);
  console.dir(args)
}

f1(1,2,3);


SVGNumber.apply()



