function receivesAFunction(callback){
    return callback()
}
receivesAFunction(anyName)
function anyName(){
    console.log("I am any name")
}

function returnsANamedFunction(){
    return function notAnonymous(){console.log ("I am not anonymous")}
}
function returnsAnAnonymousFunction(){
    return function(){console.log ("I am anonymous")}
}