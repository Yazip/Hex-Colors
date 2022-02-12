function changeColor() {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    function rgb2hex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let btn = document.querySelector("#change_color_button");
    btn.setAttribute("class","onclick");
    let body = document.querySelector("body");
    let startRGB = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
    let endRGB = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
    let startHEX = rgb2hex(startRGB.r, startRGB.g, startRGB.b);
    let endHEX = rgb2hex(endRGB.r, endRGB.g, endRGB.b);
    body.setAttribute("style",`background: linear-gradient(to right, ${startHEX}, ${endHEX});`);
    let colorValue = document.querySelector("#bgcolor_value");
    colorValue.innerHTML = `background: linear-gradient(to right, ${startHEX}, ${endHEX});`;
}