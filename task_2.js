function checkObj(propName, obj) {
    if ((((typeof obj) == "object") || ((typeof obj) == "function")) && ((typeof propName) == "string")) {
        return (propName in obj)
    } else {
        return 'Wrong data type'
    }
}
