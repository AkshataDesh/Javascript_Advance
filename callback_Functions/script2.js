function a(b){
    console.log("inside function")
    b();
}

function xyz(){
    console.log("callback function")
}


a(xyz)
//A function passed to another function as a argument and then its called inside the calling function
