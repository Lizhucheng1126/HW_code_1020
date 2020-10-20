basic.forever(function () {
    for (let A = 0; A <= 8; A++) {
        led.plot(4, A)
        led.plot(3, A - 1)
        led.plot(2, A - 2)
        led.plot(1, A - 3)
        led.plot(0, A - 4)
        basic.pause(100)
        led.toggle(4, A)
        led.toggle(3, A - 1)
        led.toggle(2, A - 2)
        led.toggle(1, A - 3)
        led.toggle(0, A - 4)
    }
})
