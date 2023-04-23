function getObj(obj) {
    if (((typeof obj) == "object") || ((typeof obj) == "function")) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                console.log(`Key - ${prop}, value - ${obj[prop]}`)
            }
        }
    } else {
        console.log('Wrong data type');
    }
}