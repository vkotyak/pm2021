input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    init()
})
function init () {
    px = 3
    py = 1
    led.plot(px, py)
    gx = 0
    gy = 3
    led.plotBrightness(gx, gy, 100)
    lifes = 3
}
let dy = 0
let dx = 0
let lifes = 0
let gy = 0
let gx = 0
let py = 0
let px = 0
init()
basic.forever(function () {
    if (lifes > 0) {
        dx = px - gx
        dy = py - gy
        led.unplot(gx, gy)
        if (dx == 0 && dy == 0) {
            lifes += -1
            gx = 0
            gy = 0
            led.plot(px, py)
        }
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) {
                gx += 1
            } else {
                gx += -1
            }
        } else {
            if (dy > 0) {
                gy += 1
            } else {
                gy += -1
            }
        }
        led.plotBrightness(gx, gy, 100)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (lifes > 0) {
        led.unplot(px, py)
        if (input.acceleration(Dimension.X) < 50) {
            if (px > 0) {
                px += -1
            }
        }
        if (input.acceleration(Dimension.X) > -50) {
            if (px < 4) {
                px += 1
            }
        }
        if (input.acceleration(Dimension.Y) > 50) {
            if (py < 4) {
                py += 1
            }
        }
        if (input.acceleration(Dimension.Y) < 50) {
            if (py > 0) {
                py += -1
            }
        }
        led.plot(px, py)
        basic.pause(100)
    }
})
