namespace screenMagic{
    export function plotAt(index: number) : void{
        index |= 0
        const x = Math.round(index / 5);
        const y = Math.round(index % 5);
        led.plot(x, y);
    }
}
