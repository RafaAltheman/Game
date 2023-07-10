let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

primeiraVez = true

let animacao;

let nuvens = {
    x:700,
    y:0,
    largura: 400,
    altura: 400,
    img: new Image(),
    desenha: function(){
        this.img.src="nuvens.png"
        ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)
    }

}

let cidade = {
    x:0,
    y:0,
    largura: 800,
    altura: 400,
    img: new Image(),
    desenha: function(){
        this.img.src="cidade.png"
        ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)
    }

}

let gravidade = 0.25;

let cachorroandando = {
    x:0,
    y: 325,
    largura: 100,
    altura: 75,
    velocidade: 0,
    pulo: 3,
    estapulando: false,
    gameover: false,
    img: new Image(),
        desenha: function(){
            this.img.src="cachorro.png"
            ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)

    },
}

let randomTimeout = Math.floor(Math.random()*1000)+1000;

let obstaculo= {
    x: 400,
    y: 300,
    largura: 80,
    altura: 100,
    img: new Image(),
    desenha: function () {
        this.img.src = "hidrante.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

let obstaculo2= {
    x: 900,
    y: 300,
    largura: 80,
    altura: 100,
    img: new Image(),
    desenha: function () {
        this.img.src = "hidrante.png"
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
    }
}

// let obstaculo3= {
//     x: 1100,
//     y: 300,
//     largura: 80,
//     altura: 100,
//     img: new Image(),
//     desenha: function () {
//         this.img.src = "hidrante.png"
//         ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
//     }
// }

let obstaculos = [obstaculo,obstaculo2]

let score = 0


function resetarVariaveis() {
    nuvens = {
        x:700,
        y:0,
        largura: 400,
        altura: 400,
        img: new Image(),
        desenha: function(){
            this.img.src="nuvens.png"
            ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)
        }

    }

    cachorroandando = {
        x:0,
        y: 325,
        largura: 100,
        altura: 75,
        velocidade: 0,
        pulo: 3,
        estapulando: false,
        gameover: false,
        img: new Image(),
        desenha: function(){
            this.img.src="cachorro.png"
            ctx.drawImage(this.img,this.x,this.y,this.largura,this.altura)

        },
    }

    obstaculo= {
        x: 400,
        y: 300,
        largura: 80,
        altura: 100,
        img: new Image(),
        desenha: function () {
            this.img.src = "hidrante.png"
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
        }
    }

    obstaculo2= {
        x: 900,
        y: 300,
        largura: 80,
        altura: 100,
        img: new Image(),
        desenha: function () {
            this.img.src = "hidrante.png"
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura)
        }
    }

    obstaculos = [obstaculo,obstaculo2]
}
function desenhaScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score.toFixed(0), 10, 30);
  }
  
  
function colisao(){
     for(let i = 0; i < obstaculos.length; i++){
         console.log('colidiu',cachorroandando.x >= Math.abs(obstaculos[i].x) && cachorroandando.y >= obstaculos[i].y)
         if(cachorroandando.x >= Math.abs(obstaculos[i].x) && cachorroandando.y >= obstaculos[i].y){

                 cachorroandando.gameover = true
         }
     }
 }

function cair(){
    if(cachorroandando.y < 325){
        gravidade+=0.025
        cachorroandando.y+=gravidade
    } else {
        gravidade = 0.25
    }
}
function pular(){
    if(cachorroandando.estapulando){
        cachorroandando.y-=cachorroandando.pulo
    }
}

document.addEventListener("keydown", pegartecla)
document.addEventListener("keydown", comecar)
document.addEventListener("keyup", soltartecla)

function pegartecla(event){
    var tecla = event.keyCode;
    if (tecla==32){
        cachorroandando.estapulando = true
        if(primeiraVez){
            primeiraVez = false
        }
        if(cachorroandando.gameover){
            // reiniciar jogo
        }
    }
}

function comecar(event){
    var tecla = event.keyCode;
    if (tecla=='13'){
       // resetarVariaveis()
        atualiza()
    }
}

function soltartecla(event){
    cachorroandando.estapulando = false
}

function surgirobs(){
    if (obstaculo.x === -200) {
        obstaculo.x = 900;
    }
    // requestAnimationFrame(atualiza)
    obstaculo.x = obstaculo.x - 2;
    ctx.clearRect(0,0,0,150)
    obstaculo.desenha()
}
surgirobs();


function surgirobs2(){
    if (obstaculo2.x === -200) {
        obstaculo2.x = 900;
    }
    // requestAnimationFrame(atualiza)
    obstaculo2.x = obstaculo2.x - 2;
    ctx.clearRect(0,0,0,150)
    obstaculo2.desenha()
}
surgirobs2();

// function surgirobs3(){
//     if (obstaculo3.x === -200) {
//         obstaculo3.x = 900;
//     }
//     // requestAnimationFrame(atualiza)
//     obstaculo3.x = obstaculo3.x - 2;
//     ctx.clearRect(0,0,0,150)
//     obstaculo3.desenha()
// }
// surgirobs3();

//function moverObstaculos() {
    //for(let i = 0; i < obstaculos.largura; i++){
      //  obstaculos[i].x-=3
        //obstaculos[i].desenha()
        //if(obstaculos[i].x < -1 * obstaculos[i].largura){
          //  obstaculos.splice(obstaculos[i],1)
            //i--;
            //console.log("deletado")
        //}
    //}

//}



function atualiza(){

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        nuvens.x = nuvens.x - 1;
        if (nuvens.x === -400) {
            nuvens.x = 800
        }


        // if(cachorroandando.gameover){
        //     gameoverObj.desenha()
        // } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        nuvens.desenha()
        cidade.desenha()
        ctx.clearRect(0, 0, 0, 400)

        // surgirObstaculos()
        surgirobs()
        surgirobs2()
        //surgirobs3()
        console.log(cachorroandando.x)
        desenhaScore()
        if (!cachorroandando.gameover) {
            console.log('dsad')

            cachorroandando.desenha();

            colisao()
            cair()
            pular()
            score += 0.1;

            animacao = requestAnimationFrame(atualiza)

        } else {
            console.log('dfsfdsf')

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            score =0;
            cancelAnimationFrame(animacao)
            resetarVariaveis()
            window.alert("Game over")
            //gameoverImg = new Image()
            //ctx.drawImage(this.img, this.x, this.y, this.altura, this.largura)
        }
        // }

}


