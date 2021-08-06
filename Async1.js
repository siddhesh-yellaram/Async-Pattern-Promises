function async1(n) {
    var random = Math.random() * n;
    console.log()
    if (random > 5) {
        return { sucess: random }
    }
    return { error: "No less than 5" };
}

console.log(async1(10));
console.log("end of main");