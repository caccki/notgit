// 메모제이션
function memorize(f){
  var cache = {};
  return function(x){
    if(cache[x] == undefined)cache[x] = f(X);
    return cache[x];
  };
}
