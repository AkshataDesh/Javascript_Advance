

console.log("Hello 1");

setTimeout(function(){
    console.log("hello 2 after 2 seconds")
},2000);

console.log("hello 3");

let myprompis = new Promise( function(resolve, reject){
    console.log("hello 4 in promise")
resolve(56);
});