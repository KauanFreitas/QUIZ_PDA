const titulo = document.getElementsByClassName('perguntas')[0];
const btn1 = document.getElementById('opcao-1');
const btn2 = document.getElementById('opcao-2');
const btn3 = document.getElementById('opcao-3');
const opcaoTextos = document.getElementsByClassName('opcao-texto');
const pontucao = document.getElementById('contador-pontuacao');
// console.log(opcaoTextos[0])

const listaGabarito = ['opcao-1','opcao-1','opcao-3','opcao-3']
const listaPerguntas = ["da Inglaterra", "do Brasil","de Noruega "]
const listaOpcoes = [
    ['Londres', "Bogotá","Madrí",],
    ["Oslo", "Lisboa","Brasília"],
    ["Madrí", "Caracas","Oslo",]]


const listaBtns = [btn1,btn2,btn3]
let c = 0
let k = 0
let gabarito = 0

function renderConteudo(){
    if(k < 3){
        let str = "Capital " + listaPerguntas[c]
        titulo.innerHTML = str
        for(let i = 0; i < 3; ++i){
            opcaoTextos[i].textContent = listaOpcoes[c][i]
        }
    }
    ++c
    ++k
}

btn1.addEventListener('click',()=>{
    if(btn1.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
    } 
    renderConteudo()
})

btn2.addEventListener('click',()=>{
    if(btn2.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
    }
    renderConteudo()
})
btn3.addEventListener('click',()=>{
    if(btn3.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
    }
    renderConteudo()
})




