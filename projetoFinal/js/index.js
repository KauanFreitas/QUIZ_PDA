const titulo = document.getElementsByClassName('perguntas')[0];
const btn1 = document.getElementById('opcao-1');
const btn2 = document.getElementById('opcao-2');
const btn3 = document.getElementById('opcao-3');
const btn4 = document.getElementById('opcao-4');

const opcaoTextos = document.getElementsByClassName('opcao-texto');
const pontucao = document.getElementById('contador-pontuacao');
console.log(btn4)

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

function renderConteudo(){

    if(k < 3){
        let str = "Capital " + listaPerguntas[c]
        titulo.innerHTML = str
        for(let i = 0; i < 4; ++i){
            opcaoTextos[i].textContent = listaOpcoes[c][i]
        }
    }
    ++c
    ++k
}
let removerClasse = '';
let opcaoCorreta = true;
btn1.addEventListener('click',()=>{
    if(btn1.id == listaGabarito[k]){
       ++gabarito;
       btn1.classList.add('gradient')
       pontucao.innerHTML = gabarito;
       opcaoCorreta = false;  
       setTimeout(()=>{
            btn1.classList.remove('gradient')
            renderConteudo()
            opcaoCorreta = false;
        },1000)
    }else{
        opcaoCorreta = true
    }

})

btn2.addEventListener('click',()=>{
    if(btn2.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
       btn2.classList.add('gradient')
       opcaoCorreta = false;
        setTimeout(()=>{
            btn2.classList.remove('gradient')
            renderConteudo()
        },1000)
    
    }else{
        opcaoCorreta = true
    }

})

btn3.addEventListener('click',()=>{
    if(btn3.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
       btn3.classList.add('gradient')
       opcaoCorreta = false;
       setTimeout(()=>{
            btn3.classList.remove('gradient')
            renderConteudo()
        },1000)
    }else{
        opcaoCorreta = true
    }
    


})
btn4.addEventListener('click',()=>{
    if(btn4.id == listaGabarito[k]){
       ++gabarito;
       pontucao.innerHTML = gabarito;
       btn4.classList.add('gradient')
       opcaoCorreta = false;
       setTimeout(()=>{
            btn4.classList.remove('gradient')
            renderConteudo()
    
        },1000)
    }else{
        opcaoCorreta = true
    }
})

addEventListener('click',(e)=>{
    let obj = ''
    if(opcaoCorreta){
        for(let j=0;j<listaBtns.length;++j){
            if(listaBtns[j].id == e.target.id){
                obj = listaBtns[j]
            }
        }
       obj.classList.add('gradient-vermelho')
        setTimeout(()=>{
            obj.classList.remove('gradient-vermelho')
            renderConteudo()
        },1000)
    } 
    opcaoCorreta = false;
})


