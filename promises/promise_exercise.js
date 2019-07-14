function resolveDigit(digit) {
    return new Promise(resolve => {
        var r = Math.random();
        setTimeout(() => {
            console.log({date: new Date(), digit: digit}); 
            resolve(digit);
        }, r * 5000);
        
    })
}

function asyncIteration(n) {
    var resolved = [];
    for(let i = 0; i < n; i++) {
        resolved.push(resolveDigit(i));
    }
    var pipes = resolved[0];
    for(let i = 1; i < n; i++) {
        pipes = pipes.then((digit) => {
            console.log(digit);
            return resolved[i];
        })
    }
    pipes.then((digit) => console.log(digit));
}


asyncIteration(10);


