namespace hid {

    // Consumer Control HID codes
    export enum ConsumerCode {
        PlayPause = 0xCD,
        NextTrack = 0xB5,
        PrevTrack = 0xB6,
        VolumeUp = 0xE9,
        VolumeDown = 0xEA,
        Mute = 0xE2,
        LaunchAssistant = 0x04
    }

    //% block="stuur media code %code"
    export function media(code: ConsumerCode) {
        sendConsumer(code)
    }

    //% block="typ tekst %text"
    export function typeText(text: string) {
        sendKeyboard(text)
    }

    //% block="druk enter"
    export function pressEnter() {
        sendKeyboard("\n")
    }

    //% block="vraag het weer"
    export function askWeather() {
        sendConsumer(ConsumerCode.LaunchAssistant)
        sendKeyboard("wat is het weer")
        sendKeyboard("\n")
    }

    //% block="vraag de tijd"
    export function askTime() {
        sendConsumer(ConsumerCode.LaunchAssistant)
        sendKeyboard("hoe laat is het")
        sendKeyboard("\n")
    }
}
