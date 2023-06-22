basic.showNumber(7)
radio.setGroup(4)
radio.setFrequencyBand(7)
let bA = false
let bB = false
let stop = false
let bAB = false
let deez = function () {
    // PCAmotor.MotorRun(PCAmotor.Motors.M4, 321)
    // PCAmotor.MotorRun(PCAmotor.Motors.M1, -173)
    carMotor(0, 0, -100, -100)
}
let deez2 = function () {
    // PCAmotor.MotorRun(PCAmotor.Motors.M1, 173)
    // PCAmotor.MotorRun(PCAmotor.Motors.M4, -321)
    carMotor(0, 0, 100, 100)
}
function carMotor(ul: number = 0, ur: number = 0, ll: number = 0, lr: number = 0) {
    ul = Math.map(ll, -100, 100, -255, 255)
    ur = Math.map(lr, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -ul)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, ur)
}
radio.onReceivedValue(function (name: string, value: number) {
    if (name == "bA") {
        bA = (value == 1)
    }
    if (name == "bB") {
        bB = (value == 1)
    }
    if (name == "stop") {
        stop = (value == 1)
    }
    if (name == "bAB") {
        bAB = (value == 1)
    }
})
basic.forever(function () {
    if (bA == true) {
        //PCAmotor.MotorRun(PCAmotor.Motors.M4, -321)
        carMotor(0, 0, 100, 0)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
    if (bB == true) {
        //PCAmotor.MotorRun(PCAmotor.Motors.M1, 173)
        carMotor(0, 0, 0, 100)
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
    }
    if (stop == true) {
        deez()

    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
    if (bAB == true) {
        deez2()
    } else {
        PCAmotor.MotorStop(PCAmotor.Motors.M1)
        PCAmotor.MotorStop(PCAmotor.Motors.M4)
    }
})