function add(a, b) {
    return a + b;
}

// N => 1

function addCurry(a) {
    return function (b) {
        return a + b;
    };
}

const addc = addCurry(1)(2);

const add2 = a => b => a + b; // (a, b) => a + b

addCurry(1)(2);

