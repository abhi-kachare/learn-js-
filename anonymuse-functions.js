//this is anonymaus function assign to variable 
const ls = function (name) {

    return "hello :" +name +"!";

}
console.log  (ls("abhi"));

//callback function in  anonymaus function 
setTimeout (function (){
    console.log ("run this in 2 sconds ");
}, 3000);
//this is an same callback but with array 
[1,2,3].forEach(function (num){
    console.log("this is array items" + num );
})

// this is anonymaus function as argument to array function ok 
const a =[3,5,2,6,4];
const sorted = a.sort(function (d ,b ){
    return d - b ;
});
console.log(sorted);

