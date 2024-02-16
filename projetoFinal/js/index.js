const titulo = document.getElementsByClassName('perguntas')[0];
const btn1 = document.getElementById('opcao-1');
const btn2 = document.getElementById('opcao-2');
const btn3 = document.getElementById('opcao-3');
const btn4 = document.getElementById('opcao-4');
const telaMain = document.getElementsByClassName('main')[0]
const telaPerguntas = document.getElementsByClassName('display')[0];
const telaFinal = document.getElementsByClassName('resultado-final')[0];
const estatistica = document.getElementById('estatistica');
const resultadoTitulo = document.getElementsByClassName('resultado-titulo')[0]
const mainResultado = document.getElementsByClassName('main-resultado')[0]
const opcaoTextos = document.getElementsByClassName('opcao-texto');
const pontucao = document.getElementById('contador-pontuacao');


const listaGabarito = ['opcao-1','opcao-4','opcao-3','opcao-2']
const listaPerguntas = ["da Inglaterra", "do Brasil","da Noruega "]
const listaOpcoes = [
    ['Budapeste', "Bogotá","Madrí","Londres"],
    ["Oslo", "Lisboa","Brasília","Moscou"],
    ["Madrí", "Oslo","Caracas","Bogotá"]]


const listaBtns = [btn1,btn2,btn3,btn4]
let c = 0
let k = 0
let gabarito = 0

let nome = prompt('Qual o seu nome?');

function renderConteudo(){

    if(k < 3){
        let str = "Capital " + listaPerguntas[c]
        titulo.innerHTML = str
        for(let i = 0; i < 4; ++i){
            opcaoTextos[i].innerHTML = listaOpcoes[c][i]
        }
    }else{
       
        estatistica.textContent = gabarito+'/4'
        telaMain.classList.add('alin')
        mainResultado.classList.remove('none')
        telaFinal.classList.add('alin')
        telaPerguntas.classList.add('none')
        resultadoTitulo.innerHTML = `Fim do quiz <br> Seu resultado ${nome}:`
    }
    ++c
    ++k
}
function backgroundCorCerta(btn){
    btn.classList.add('gradient')
    setTimeout(()=>{
        btn.classList.remove('gradient')
        renderConteudo()
    },1000)
}

function backgroundCorErrada(btn){
    btn.classList.add('gradient-vermelho')
    setTimeout(()=>{
        btn.classList.remove('gradient-vermelho')
        renderConteudo()
    },1000)
}
btn1.addEventListener('click',()=>{
    if(btn1.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
       backgroundCorCerta(btn1)

    }else{
        backgroundCorErrada(btn1)
    }

})

btn2.addEventListener('click',()=>{
    if(btn2.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;

       backgroundCorCerta(btn2)
    
    }else{
        backgroundCorErrada(btn2)
    }

})

btn3.addEventListener('click',()=>{
    if(btn3.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
       backgroundCorCerta(btn3)

    }else{
        backgroundCorErrada(btn3)
    }
})
btn4.addEventListener('click',()=>{
    if(btn4.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;

       backgroundCorCerta(btn4)
    }else{

        backgroundCorErrada(btn4)
    }
})






