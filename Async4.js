function async4(n) {
    return new Promise(function (resolve, reject) {
        console.log("Inside Promise")
        var res = Math.random() * n;
        console.log(res)
        if (res > 5) {
            resolve({ success: res })
            return
        }
        reject({ error: "No less than 5" })
    });
}

async4(10).then(function (result) {
    console.log("Success Happened: " + result.success)
}).catch(function (error) {
    console.log("Error Happened: " + error.error)
})

console.log("End of program")