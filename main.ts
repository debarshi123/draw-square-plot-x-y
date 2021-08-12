let index = 0
let index2 = 0
basic.forever(function () {
    index = 0
    index2 = 1
    for (let index3 = 0; index3 < 5; index3++) {
        led.plot(index, 0)
        led.plot(0, index)
        led.plot(index, 4)
        led.plot(4, index)
        index += 1
    }
    basic.pause(200)
    index = 0
    for (let index3 = 0; index3 < 5; index3++) {
        led.unplot(index, 0)
        led.unplot(0, index)
        led.unplot(index, 4)
        led.unplot(4, index)
        index += 1
    }
    for (let index3 = 0; index3 < 3; index3++) {
        led.plot(index2, 1)
        led.plot(1, index2)
        led.plot(index2, 3)
        led.plot(3, index2)
        index2 += 1
    }
    basic.pause(200)
    index2 = 1
    for (let index3 = 0; index3 < 3; index3++) {
        led.unplot(index2, 1)
        led.unplot(1, index2)
        led.unplot(index2, 3)
        led.unplot(3, index2)
        index2 += 1
    }
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.unplot(2, 2)
})
