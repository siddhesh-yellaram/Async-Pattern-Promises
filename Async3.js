//Async functions does not give result directly 
function async3(n, successCallBack, errCallBack) {
    setTimeout(function () {
        var random = Math.random() * n;
        console.log()
        if (random > 5) {
            successCallBack({ sucess: random })
            return
        }
        errCallBack({ error: "No less than 5" });
    }, 0);
}

console.log("Start of Main")
async3(10, function (data) {
    console.log("Success Happened: " + data.sucess)
}, function (err) {
    console.log("Error Happened: " + err.error)
});
console.log("End of main");