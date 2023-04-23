function checkObj(propName, obj) {
    if ((((typeof obj) == "object") || ((typeof obj) == "function")) && ((typeof propName) == "string")) {
        return obj.hasOwnProperty(propName)
    } else {
        return 'Wrong data type'
    }
}