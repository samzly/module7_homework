class Device {
    constructor(name, power, price) {
        this.name = name;
        this.power = power;
        this.price = price;
        this.enabled = false;
    }

    switch() {
        this.enabled = true;
        console.log(`${this.name} switched on`)
    }

    returnPower() {
        return this.enabled ? this.power : 0
    }
}
function sumPower(array) {
    let result = 0
    array.forEach((device) => {
        result += device.returnPower()
    })
    return result
}
class Lamp extends Device {
    constructor(name, power, price, lightColor, color) {
        super(name, power, price);
        this.lightColor = lightColor;
        this.color = color
    }
}
class Computer extends Device {
    constructor(name, power, price, ram, frequency) {
        super(name, power, price);
        this.ram = ram;
        this.frequency = frequency;
    }
    info () {
        console.log(`This PC have ${this.ram} Gb of RAM and processor frequency ${this.frequency} GHz`)
    }
}

const whiteLamp = new Lamp('White lamp', 20, 100, 'Warm yellow', 'White');
const pcGame = new Computer('Game PC', 825, 108000, 32, 5.2);
const pcOffice = new Computer('Game PC', 340, 25000, 8, 3.1);
whiteLamp.switch();
pcGame.switch();
pcOffice.switch();
console.log(sumPower([whiteLamp, pcGame, pcOffice]))