const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const placar = document.getElementById('placar');
let velocidade = 5;
let p1 ={x:10,y:120,w:20,h:100,up:false,down:false,pontos:0}
let p2 ={x:570,y:120,w:20,h:100,up:false,down:false,pontos:0}
let ball = {x:280,y:150,w:30,h:30,v:5,left:false,right:true,up:false,down:false}
function acao(){
    //movimentação player 2
    window.addEventListener('keydown',(e)=>{
        if(e.keyCode==38){p2.up=true;p2.down=false}
        if(e.keyCode==40){p2.up=false;p2.down=true}
    })
    window.addEventListener('keyup',(e)=>{
        if(e.keyCode==38){p2.up=false}
        if(e.keyCode==40){p2.down=false}
    })


    //movimentação player 1
    window.addEventListener('keydown',(e)=>{
        if(e.keyCode==87){p1.up=true;p1.down=false}
        if(e.keyCode==83){p1.up=false;p1.down=true}
    })
    window.addEventListener('keyup',(e)=>{
        if(e.keyCode==87){p1.up=false}
        if(e.keyCode==83){p1.down=false}
    })

    
    if(p2.up){p2.y-=velocidade}
    if(p2.down){p2.y+=velocidade}
    if(p1.up){p1.y-=velocidade}
    if(p1.down){p1.y+=velocidade}


    if(ball.right){ball.x+=ball.v}
    if(ball.left){ball.x-=ball.v}
    if(ball.up){ball.y-=ball.v}
    if(ball.down){ball.y+=ball.v}




    //interagir bastão com bola


    if(ball.x+ball.w>p2.x&&ball.y+ball.h>p2.y&&ball.y<p2.y+p2.h){ball.right=false;ball.left=true}
    if(ball.x<p1.x+p1.w&&ball.y+ball.h>p1.y&&ball.y<p1.y+p1.h){ball.right=true;ball.left=false}

    if(ball.y>p2.y&&ball.y+ball.h<p2.y+50&&ball.x+ball.w>p2.x){ball.up=true;ball.down=false}
    if(ball.y>p1.y&&ball.y+ball.h<p1.y+50&&ball.x<p1.x+p1.w){ball.up=true;ball.down=false}

    if(ball.y>p2.y+50&&ball.y+ball.h<p2.y+p2.h&&ball.x+ball.w>p2.x){ball.down=true;ball.up=false}
    if(ball.y>p1.y+50&&ball.y+ball.h<p1.y+p1.h&&ball.x<p1.x+p1.w){ball.down=true;ball.up=false}

    if(ball.y<0){ball.y=0;ball.up=false;ball.down=true}
    if(ball.y>370){ball.y=370;ball.down=false;ball.up=true}


    if(ball.x+ball.w>600){
        p1.pontos+=1
        ball.x=280
        ball.y=150
        ball.up=false
        ball.down=false
        ball.right=false
        ball.left=true
        p1.x=10
        p1.y=120
        p2.x=570
        p2.y=120
    }
    if(ball.x<0){
        p2.pontos+=1
        ball.x=280
        ball.y=150
        ball.up=false
        ball.down=false
        ball.right=true
        ball.left=false
        p1.x=10
        p1.y=120
        p2.x=570
        p2.y=120
    }

    if(p1.y<0){p1.y=0}
    if(p1.y>300){p1.y=300}
    if(p2.y<0){p2.y=0}
    if(p2.y>300){p2.y=300}

    ctx.fillStyle = 'black';
    ctx.fillRect(p1.x,p1.y,p1.w,p1.h);

    ctx.fillStyle = 'black';
    ctx.fillRect(p2.x,p2.y,p2.w,p2.h)
    
    ctx.fillStyle = 'black';
    ctx.fillRect(ball.x,ball.y,ball.w,ball.h)
    
    placar.textContent=p1.pontos+':'+p2.pontos;  
    
    setTimeout(atualizar,10)
    
    
}

function atualizar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    acao()
}

atualizar()