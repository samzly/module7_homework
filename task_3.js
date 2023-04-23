function createPrototypeless() {
    let obj = {};
    obj.__proto__ = null;
    return obj;
}