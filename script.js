const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [l
    {
        enunciado:
        alternativas: [
            {
                texto:
                afirmacao:
            },
            {
                texto:
                afirmacao:
            }
        ]
    },
    {
        enunciado:
        afirmacao: [
            {
                texto:
                afirmacao:
            },
            {
                texto:
                afirmacao:
            }
        ] 
        }
        {
            anunciado:
            alternativas: [
                {
                    texto:
                    afirmacao:
                },
                {
                    texto:
                    afirmacao:
                }
            ]
        },
        {
            enunciado:
            alternativas: [
            {
                texto:
                afirmacao:
            },
            {
                texto:
                afirmacao:
            }
        ]
     },
     {
        enunciado:
        alternativas: [
            {
                texto:
                afirmacao:
            },
            {
                texto:
                afirmacao:
            }
        ]
    },
 ];


let atual = 0;
let perguntasAtual;
let historiaFinal = "";

function mostraperguntas() {
    if(atual >= perguntas.length) {
        mostraresultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){ 
    for(const alternativas of perguntaAtual.alternatias) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",()=> respostaselecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaselecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal+= afirmacoes +" ";
    atual++;
    mostraperguntas();
}

function mostraresultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraperguntas();
                
            
    

        