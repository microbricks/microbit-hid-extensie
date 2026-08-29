# microbit-hid-ultimate

Deze extensie voegt HID Consumer Control + HID Keyboard toe aan MakeCode.

Voorbeeld:

```ts
input.onButtonPressed(Button.B, function () {
    hid.askWeather()
})
