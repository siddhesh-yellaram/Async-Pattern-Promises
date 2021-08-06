function async2(n, successCallBack, errCallBack) {
    var random = Math.random() * n;
    console.log()
    if (random > 5) {
        successCallBack({ sucess: random })
        return
    }
    errCallBack({ error: "No less than 5" });
}

async2(10, function (data) {
    console.log("Success Happened: " + data.sucess)
}, function (err) {
    console.log("Error Happened: " + err.error)
});
console.log("end of main");