window.onload = () =>{
const left = document.querySelector('#left')
const up = document.querySelector('#up')
const right = document.querySelector('#right')
const down = document.querySelector('#down')
const score = document.querySelector('#score')
const canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');
canvas.width = 400
canvas.height = canvas.width
//Variaveis de controle
snake = [];
//posicao inicial da cobra
posX = 0;
posY = 0; 
//posicao inicia da comida
foodX = 0;
foodY = 0;
//velocidade da cobra
velX = 0;
velY = 0;
//tamanho de cada item que componhe a cobra
grid = (canvas.width/100)*5
//tamanho inicial da cobra
tam = 5; 
velocidade = 300
//comando botao virtual
left.addEventListener('click', ()=>{
    velX = -1;
    velY = 0;
}) 
up.addEventListener('click', ()=>{
    velX = 0;
    velY = -1;
})
right.addEventListener('click', ()=>{
    velX = 1;
    velY = 0;
})
down.addEventListener('click', ()=>{
    velX = 0;
    velY = 1;
})
//comandos teclado
document.addEventListener('keydown', (e)=>{
    
    switch(e.key){
        case 'ArrowLeft':
            velX = -1
            velY = 0
            break
        case 'ArrowUp': 
            velX = 0
            velY = -1  
            break 
        case 'ArrowRight':
            velX = 1
            velY = 0 
            break
        case 'ArrowDown':
            velX = 0
            velY = 1
            break
    }
}) 


//funcao chamando jogo a cada 100ms

}//fim onload

///
const velcobra = (tam) => {
    console.log(tam)
}
///

const jogo = () =>{
    let tmScore = 0
velocidade = 500
    //configuracao da tela
    
    ctx.fillStyle = '#E6E6FA';
    //distancia borda H distancia borda V largura alturar
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //posicionameto da cobra
    snake.push({
        x: posX,    
        y: posY
    })
    posX += velX;
    posY += velY;
    
    //configuracao da cobra 
    ctx.fillStyle = '#663399'
    for(let i=0; i<snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1)
        if(snake[i].x == posX && snake[i].y == posY){
            tam = 2
            ctx.fillStyle = 'red';
            score.innerHTML = `SCORE: ${tmScore}`
            
        }
    } 
    
    while(snake.length > tam){
        snake.shift()
    }
    
    //comida
    ctx.fillStyle = 'yellow';
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    //configuracao da comida
    if(posX == foodX && posY == foodY){
        tam++
        velcobra(tam)
        foodX = Math.floor(Math.random()*20)
        foodY = Math.floor(Math.random()*20)
        score.innerHTML = `SCORE: ${tam-2}` 
       
    } 
    //configurando saida da cobra na tela

    if(posX < 0 ){  
        posX = 20; 
    }else if(posX > 20){
        posX = 0 
    }
    else if(posY < 0 ){  
        posY = 20; 
    }else if(posY > 20){
        posY = 0
    }

} 


setInterval(jogo, 300);

velcobra(10)