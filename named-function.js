// this is just same as anonymuse function but with name 
const se = function sayhi(){
    console.log("hi");

};
console.log (se());
//this is and forEach function with the named function
const an = [1,2,3];
an.forEach(function (num){console.log("hello"+ num +" this me ");});
//now this is and nomed function for sort 
const  d = [2,1,5,3,6,9,6];
console.log(d);
const ss = d.sort(function (a , b ){
    return a - b ;
});

console.log(ss);

