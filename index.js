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

const botao = document.getElementById("botaoProximo");
const furadeira = document.getElementById("furadeira");

const botaoBorracha = document.getElementById("botaoBorracha");
const borracha = document.getElementById("borracha");
var cuboCor = document.querySelector("#cubeCor");
var borrachaBool = 0;

function clickBotao(){
  //furadeira.object3D.rotation.y += 1;w
  furadeira.object3D.position.x += 1;
  

  if(furadeira.object3D.position.x == 0){
    
    furadeira.object3D.position.x -= 2;
    
 
  }
  if(furadeira.object3D.position.x == -1 && borrachaBool == 0){
    cuboCor.setAttribute('material', 'color', '#8B0000');
  }else if(furadeira.object3D.position.x == -1){
    cuboCor.setAttribute('material', 'color', '#006400');
  }

}



function clickBotaoBorracha(){
  
  if(borrachaBool === 0){
    borracha.object3D.position.z += 0.3;
    borrachaBool = 1
  }
  
}

botao.addEventListener("click", clickBotao);
botaoBorracha.addEventListener("click",clickBotaoBorracha);





























//const porta = document.querySelector("porta");
//const seta1 = document.querySelector("setaDireita");
//const seta2 = document.querySelector("setaDireita0");

//function andarPraDireita() {
  //porta.object3D.rotation.y += 0.1;
//}

//seta1.addEventListener("click", andarPraDireita);
//seta2.addEventListener("click", andarPraDireita);

