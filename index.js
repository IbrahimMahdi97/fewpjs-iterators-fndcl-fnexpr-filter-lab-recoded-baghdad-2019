// Code your solution here
function findMatching (arr,i){
  arr= arr.filter(function(val){
    return val.toLowerCase() === i.toLowerCase();
  })
  return arr;
}
function fuzzyMatch(arr,i){
   arr= arr.filter(function(val){
    return val.toLowerCase().indexOf(i.toLowerCase()) === 0;
  })
  return arr;
}
function matchName(arr,i) {
  arr = arr.filter(function(val){
    return val['name'] === i });
    return arr;
}
