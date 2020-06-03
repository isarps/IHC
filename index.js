/*$ = (queryString) => document.querySelector(queryString);
  
const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;
var button = 1;
const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${shiftHue(hue)}, 100%, 50%)`;
    $('a-sphere').setAttribute('color', color);

    const position = `0 ${1.5 + Math.sin(Date.now() / 1000)} -2`;
    $('a-sphere').setAttribute('position', position);
    requestAnimationFrame(animate);
};


requestAnimationFrame(animate);*/

window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) { // DESKTOP
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
    } else {
        var el = document.getElementById("mycursor"); // MOBILE
        el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
        el.object3D.visible = true;
    }
}

const porta = document.querySelector("porta");
const seta1 = document.querySelector("setaDireita");
const seta2 = document.querySelector("setaDireita0");

function andarPraDireita() {
  porta.object3D.rotation.y += 0.1;
}

seta1.addEventListener("click", andarPraDireita);
seta2.addEventListener("click", andarPraDireita);

