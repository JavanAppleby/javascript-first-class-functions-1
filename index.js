function receivesAFunction(callback) {
    console.log('This function was called back');
    callback();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log("This anonymous function was returned");
    }
}