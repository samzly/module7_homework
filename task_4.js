function Device (name, power, price) {
    this.name = name;
    this.power = power;
    this.price = price;
    this.enabled = false;
}
Device.prototype.switch = function () {
    this.enabled = true;
    console.log(`${this.name} switched on`)
}
Device.prototype.returnPower = function () {
    return this.enabled ? this.power : 0
}
function sumPower(array) {
    let result = 0
    array.forEach((device) => {
        result += device.returnPower()
    })
    return result
}
function Lamp (name, power, price, lightColor, color) {
    this.name = name;
    this.power = power;
    this.price = price;
    this.lightColor = lightColor;
    this.color = color
}
Lamp.prototype = new Device()
function Computer (name, power, price, ram, frequency) {
    this.name = name;
    this.power = power;
    this.price = price;
    this.ram = ram;
    this.frequency = frequency;
    this.info = function () {
        console.log(`This PC have ${this.ram} Gb of RAM and processor frequency ${this.frequency} GHz`)
    }
}
Computer.prototype = new Device()

const whiteLamp = new Lamp('White lamp', 20, 100, 'Warm yellow', 'White');
const pcGame = new Computer('Game PC', 825, 108000, 32, 5.2);
const pcOffice = new Computer('Game PC', 340, 25000, 8, 3.1);
whiteLamp.switch();
pcGame.switch();
pcOffice.switch();
console.log(sumPower([whiteLamp, pcGame, pcOffice]))