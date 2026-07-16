export function createLayout(width: number, height: number) {
    const center = width / 2;

     const OLD_WIDTH = 1500;
     const OLD_HEIGHT = 600;



    return {
        scaleX: width / OLD_WIDTH,
        scaleY: height / OLD_HEIGHT,
        CENTER: center,
        LEFT: center - 130,
        RIGHT: center + 130,

        ROW1: height - 120,
        ROW2: height - 200,
        ROW3: height - 280,
        ROW4: height - 360,
        ROW5: height - 440,
        ROW6: height - 520,
    };
}