const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [l
    {
        enunciado:"qual o melhor uso do agrotoxico"
        alternativas: [
            {
                texto:"precisamos ponhar mais agrotoxicos pra ter melhor resultado"
                afirmacao:"Os EPIs devem ser indicados no receituário agronômico e no rótulo do produto"
            },
            {
                texto:"atuam no controle da proliferação de pragas, doenças e plantas daninhas associadas a várias culturas de interesse agrícola"
                afirmacao:"para matar insetos, larvas, fungos, carrapatos sob a justificativa de controlar as doenças"
            }
        ]
    },
    {
        enunciado:"porque usamos agrotoxicos?"
        afirmacao: [
            {
                texto:"ter mais eficiência no controle de uma quantidade maior de plantas daninhas do que outros produtos"
                afirmacao:"agrotóxicos fragilizam-no e reduzem a sua fertilidade"
            },
            {
                texto:"colocando mais que a medida correta pra ter mais sucessos pra matar as pragas"
                afirmacao:"contaminando o ar, a água, o solo causando a morte de animais e plantas"
            }
        ] 
        }
        {
            anunciado:"Como a exposição a agrotóxicos pode afetar a saúde das comunidades próximas a áreas agrícolas?"
            alternativas: [
                {
                    texto:" não afeta poís e pra matar so inseto e pragas para melhor rendimento"
                    afirmacao:"alterações cromossômicas, câncer, doenças hepáticas, doenças respiratórias, entre outros"
                },
                {
                    texto:"o uso de muito em uma area urbana pode afetar pessoas e população proximas e pode correr risco de danos a saude"
                    afirmacao:"cólicas abdominais, náuseas, vômitos, dificuldades respiratórias, desmaios, coma e até mesmo a morte"
                    
                }
            ]
        },
        {
            enunciado:"Como a tecnologia está ajudando a reduzir os impactos negativos dos agrotóxicos na agricultura?"
            alternativas: [
            {
                texto:"esta na qualidades de produtos melhor rendimento, menos desmatamento e mais areas produtivas"
                afirmacao:"O uso de software sofisticado na agricultura ajuda a reduzir o consumo de insumos, fertilizantes e pesticidas"
            },
            {
                texto:"muitas areas nao tem internet a tecnologia ainda e um descobrimentos para pessoas rurais"
                afirmacao:"contaminando o ar, a água, o solo causando a morte de animais e plantas"
            }
        ]
     },
     {
        enunciado:"Como o manejo integrado de pragas pode reduzir a dependência de agrotóxicos?"
        alternativas: [
            {
                texto:"pode reduzir os insetos pragas,melhor qualidades sem contaminação"
                afirmacao:"reduz a quantidade de produtos químicos utilizados, diminuindo os impactos ambientais e protegendo a saúde dos agricultores"
            },
            {
                texto:"podemos dizer que o uso e pouco de matar pragas e afetar as pesssoas em volta"
                afirmacao:"o uso de defensivos naturais, a rotação de culturas e a diversidade no plantio"
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
                
            
    

        