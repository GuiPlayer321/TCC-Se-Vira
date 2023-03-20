/* Aula 20 MaiaQuiz  */

globalThis.acertos = 0;
globalThis.erros = 0;

const progressbarfull = document.querySelector('#barrafull');

document.getElementById('nova').disabled = true;
var btn =  document.getElementById('nova');
btn.style.opacity = "0";
let eeros = document.querySelector('#erros');
eeros.style.opacity="0";

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')

let pergunta   = document.querySelector('#pergunta')
let enunciado  = document.querySelector('#enunciado')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Os tempos gastos por três alunos para resolver um mesmo exercício de matemática foram: 3,25 minutos; 3,4 minutos e 191 segundos.\n" +
        "\n" +
        "O tempo gasto a mais, em segundo, pelo aluno que concluiu por último a resolução do exercício, em relação ao primeiro que o finalizou, foi igual a",
    alternativaA : "13",
    alternativaB : "14",
    alternativaC : "15",
    alternativaD : "21",
    alternativaE : "29",
    correta      : "13",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(Enem PPL 2016) A corrida dos 100 m rasos é uma das principais provas do atletismo e qualifica o homem mais rápido do mundo. Um corredor de elite foi capaz de percorrer essa distância em 10 s, com 41 passadas. Ele iniciou a corrida com o pé direito.\n" +
        "\n" +
        "O período de oscilação do pé direito desse corredor foi mais próximo de",
    alternativaA : "1/10 s.",
    alternativaB : "1/4 s.",
    alternativaC : "1/2 s.",
    alternativaD : "2 s.",
    alternativaE : "4 s",
    correta      : "1/2 s.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O avanço científico e tecnológico da física nuclear permitiu conhecer, com maiores detalhes, o decaimento radioativo dos núcleos atômicos instáveis, desenvolvendo-se algumas aplicações para a radiação de grande penetração no corpo humano, utilizada, por exemplo, no tratamento do câncer. A aplicação citada no texto se refere a qual tipo de radiação?",
    alternativaA : "Beta.",
    alternativaB : "Alfa.",
    alternativaC : "Gama.",
    alternativaD : "Raios X.",
    alternativaE : "Ultravioleta.",
    correta      : "Gama",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(Enem 2018) Para apagar os focos A e B de um incêndio, que estavam a uma distância de 30 m um do outro, os bombeiros de um quartel decidiram se posicionar de modo que a distância de um bombeiro ao foco A, de temperatura mais elevada, fosse sempre o dobro da distância desse bombeiro ao foco B, da temperatura menos elevada.\n" +
        "\n" +
        "Nestas condições, a maior distância, em metro, que dois bombeiros poderiam ter entre eles é",
    alternativaA : "30",
    alternativaB : "40",
    alternativaC : "45",
    alternativaD : "60",
    alternativaE : "68",
    correta      : "40",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "(UFMG) Uma escola de samba, ao se movimentar numa rua reta e muito extensa, mantém um comprimento constante de 2 km. Se ela gasta 90 minutos para passar completamente por uma arquibancada de 1 km de comprimento, sua velocidade média deve ser:",
    alternativaA : "2/3 Km/h",
    alternativaB : "1 Km/h",
    alternativaC : "4/3 Km/h",
    alternativaD : "2 Km/h",
    alternativaE : "3 Km/h",
    correta      : "2 Km/h",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "(PUC-RS) Dizer que um movimento se realiza com uma aceleração escalar constante de 5 m/s2 significa que:\n" +
        "\n",
    alternativaA : "Em cada segundo o móvel se desloca 5 m.",
    alternativaB : "Em cada segundo a velocidade do móvel aumenta de 5 m/s .",
    alternativaC : "Em cada segundo a aceleração do móvel aumenta de 5m/s.",
    alternativaD : "Em cada 5 s a velocidade aumenta de 1 m/s.",
    alternativaE : "A velocidade é constante e igual a 5 m/s.",
    correta      : "Em cada segundo a velocidade do móvel aumenta de 5 m/s .",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "(PUC-MG) Um carro que se move com velocidade 72 km/h, ao ser freado, leva 5,0s para parar. A distância que percorre durante esse tempo é, aproximadamente, em m, de",
    alternativaA : "22,3",
    alternativaB : "49,7",
    alternativaC : "50,0",
    alternativaD : "72,0",
    alternativaE : "111,0",
    correta      : "72,0",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "(PUC-MG) Um automóvel que vinha com velocidade escalar de 72 km/h é freado e pára em 20 s. Qual o valor da aceleração escalar média do automóvel durante a freada?\n" +
        "\n",
    alternativaA : "0",
    alternativaB : "-3,62",
    alternativaC : "72 m/s2",
    alternativaD : "- 1,0 m/s2",
    alternativaE : "13 m/s2",
    correta      : "- 1,0 m/s2",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(UFBA) A velocidade do objeto, no instante 30 s, é de",
    alternativaA : "- 2,0 m/s",
    alternativaB : "- 1,2 m/s\n",
    alternativaC : "Zero",
    alternativaD : "1,2 m/s\n",
    alternativaE : "2,0 m/s\n",
    correta      : "- 2,0 m/s",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(PUC) No instante em que uma partícula, lançada verticalmente para cima, atinge a altura máxima,",
    alternativaA : "A aceleração e a velocidade anulam-se.",
    alternativaB : "A aceleração e velocidade não se anulam.",
    alternativaC : "A aceleração é nula e a velocidade, diferente de zero.\n",
    alternativaD : "A velocidade é nula e a aceleração, diferente de zero.\n",
    alternativaE : "A aceleração e a velocidade são constantes.\n",
    correta      : "A velocidade é nula e a aceleração, diferente de zero.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(UFMG) Uma pedra é deixada em um ponto P, situado a uma certa altura, próximo à superfície da Terra. Ela se encontra dentro de um recipiente em que se fez o vácuo.\n" +
        "Pode-se afirmar que",
    alternativaA : "A pedra, em virtude da atração da Terra, cairá com aceleração de 9,8 m/s2",
    alternativaB : "A pedra permanecerá parada em P, porque o seu peso, no vácuo, é nulo.\n",
    alternativaC : "A pedra, por estar em queda no vácuo, cairá com uma aceleração maior do que a da gravidade.\n",
    alternativaD : "A pedra tem peso nulo e, por isso, cairá com velocidade constante.\n",
    alternativaE : "Nenhuma das alternativas",
    correta      : "A pedra, em virtude da atração da Terra, cairá com aceleração de 9,8 m/s2",
}
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD
e.textContent = q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    e.textContent = questoes[nQuestao].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
    progressbarfull.style.width = `${(nQuestao/totalDeQuestoes) * 100}%`
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        acertos += 1
    } else {
        erros += 1
    }


    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Resultados:')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    window.clearInterval(intervalo);
    eeros.style.opacity="100";

    instrucoes.textContent = "Resultados:"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você acertou: " + acertos
    enunciado.textContent   = "Você conseguiu " + acertos + " " + erros

    aviso.textContent = "Você acertou: " + acertos
    aviso.style.color="#008b00"
    eeros.textContent = "Você errou " +erros
    eeros.style.color="#8b0000"

    document.getElementById('nova').disabled = false;
    var btn =  document.getElementById('nova');
    btn.style.opacity = "100";


    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        window.location.href = index.html;
    }, 6000)
}

var intervalo;

function tempo(op) {
    if (op == 1) {
        document.getElementById('parar').style.display = "block";
        document.getElementById('comeca').style.display = "none";
    }
    var s = 1;
    var m = 0;
    var h = 0;
    intervalo = window.setInterval(function() {
        if (s == 60) { m++; s = 0; }
        if (m == 60) { h++; s = 0; m = 0; }
        if (h < 10) document.getElementById("hora").innerHTML = "0" + h + ":"; else document.getElementById("hora").innerHTML = h + ":";
        if (s < 10) document.getElementById("segundo").innerHTML = "0" + s ; else document.getElementById("segundo").innerHTML = s ;
        if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + ":"; else document.getElementById("minuto").innerHTML = m + ":";
        if (h >= 1 && s > 1 && m >30) document.getElementById("hora").style.color = "#FF0000" ;
        if (s > 1 && m >30) document.getElementById("segundo").style.color = "#FF0000" ;
        if (m > 30) document.getElementById("minuto").style.color = "#FF0000";
        s++;
    },1000);

    if(s > 10){

    }
}


window.onload=tempo;
