// console.log("start")

// setTimeout(function(){
//     console.log("Hi")
// },3000);

// console.log("end")

function loadscript(src,callback){
var script = document.createElement("script")
script.src=src;
script.onload= function(){
 console.log("script loded SRC"+ src);  
 callback(null,src);
}

script.onerror=function(){
    console.log("error loading the script");
    callback(new error("error loading script"), src)
}

document.body.appendChild(script)
}

function hello(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
    alert("hello"+src)
}

function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
    alert("goodmorning"+src)
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)



loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
    alert("goodmorning"+src)
})


//Pryamid of droom/ callback hell


loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
   
})
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
   
})
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error, src)
{
    if(error)
    {
        console.log("error loading script")
    }
   
})
   
})