let getOtp = () => {
    let a = Math.floor(Math.random() * 10000)
    if (a < 1000) {
        if (a < 10) {
            console.log(a * 1000);
        }
        else if (a < 100) {
            console.log(a * 100); 
        }
        else {
            console.log(a * 10);
        }
    }
    else {
        console.log(a);
    }
}
getOtp();
