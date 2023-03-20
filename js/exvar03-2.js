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
    pergunta     : "(Fuvest) Após chover na cidade de São Paulo, as águas da chuva descerão o rio Tietê até o rio Paraná, percorrendo cerca de 1.000km. Sendo de 4km/h a velocidade média das águas, o percurso mencionado será cumprido pelas águas da chuva em aproximadamente:",
    alternativaA : "30 dias\n",
    alternativaB : "10 dias\n",
    alternativaC : "25 dias\n",
    alternativaD : "2 dias\n",
    alternativaE : "4 dias\n",
    correta      : "10 dias",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "(ACAFE) Assinale a alternativa incorreta:",
    alternativaA : "Esôfago, órgão e afôito são acentuadas graficamente.",
    alternativaB : "Bêbado, bálsamo e binóculo são proparoxítonas.\n",
    alternativaC : "Exausto, arroio e ofício são trissilábicas.\n",
    alternativaD : "Lei e lua apresentam ditongo e hiato, respectivamente.\n",
    alternativaE : "Caminho apresenta sete letras e sei fonemas.\n",
    correta      : "Esôfago, órgão e afôito são acentuadas graficamente",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : " (Cesgranrio) Assinale a opção em que os vocábulos obedecem a mesma regra de acentuação gráfica.",
    alternativaA : "Terás / límpida\n",
    alternativaB : "Necessário / verás\n",
    alternativaC : "Dá-lhes / necessário\n",
    alternativaD : "Incêndio / também\n",
    alternativaE : "Extraordinário / incêndio\n",
    correta      : "Extraordinário / incêndio\n",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "(Mackenzie) Assinale a alternativa incorreta a respeito do Trovadorismo em Portugal.",
    alternativaA : "Durante o Trovadorismo, ocorreu a separação entre poesia e a música.",
    alternativaB : "Muitas cantigas trovadorescas foram reunidas em livros ou coletâneas que receberam o nome de cancioneiros.",
    alternativaC : "Nas cantigas de amor, há o reflexo do relacionamento entre o senhor e vassalo na sociedade feudal: distância e extrema submissão.",
    alternativaD : "Nas cantigas de amigo, o trovador escreve o poema do ponto de vista feminino.\n",
    alternativaE : "A influência dos trovadores provençais é nítida nas cantigas de amor galego-portuguesas.\n",
    correta      : "Durante o Trovadorismo, ocorreu a separação entre poesia e a música.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "(Faap-SP) Em relação à circulação humana, é incorreto afirmar:\n" +
        "\n",
    alternativaA : "Todo vaso que sai do coração é artéria",
    alternativaB : "Todo vaso que chega ao coração é veia.",
    alternativaC : "Todo sangue que chega ao coração é sangue venoso.",
    alternativaD : "O sangue rico em oxigênio é o arterial.\n",
    alternativaE : "O sangue venoso passa do átrio direito para o ventrículo direito.\n",
    correta      : "Todo sangue que chega ao coração é sangue venoso.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : " (Unifesp) Entre os donatários das capitanias hereditárias (1531-1534), não havia nenhum representante da grande nobreza. Esta ausência indica que:\n" +
        "\n",
    alternativaA : "A nobreza portuguesa, ao contrário da espanhola, não teve perspicácia com relação às riquezas da América.\n",
    alternativaB : "A Coroa portuguesa concedia à burguesia, e não à nobreza, os principais favores e privilégios.",
    alternativaC : "No sistema criado para dar início ao povoamento do Brasil, não havia nenhum resquício de feudalismo.\n",
    alternativaD : "Na América portuguesa, ao contrário do que ocorreu na África e na Ásia, a Coroa foi mais democrática.\n",
    alternativaE : "As possibilidades de bons negócios aqui eram menores do que em Portugal e em outros domínios da Coroa.\n",
    correta      : "As possibilidades de bons negócios aqui eram menores do que em Portugal e em outros domínios da Coroa.\n",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "UESPI) No século XIX, a sociedade burguesa conseguiu avançar, incentivando o capitalismo e a industrialização. No campo das ideias, o positivismo do francês Auguste Comte:",
    alternativaA : "Criticava as filosofias materialistas, defendendo o idealismo iluminista.",
    alternativaB : "Argumentava a favor de uma história evolutiva e progressista.",
    alternativaC : "Considerava a ciência e a religião como dons supremos do homem.\n",
    alternativaD : "Desprezava a evolução, vendo a história como repetição e tradição.\n",
    alternativaE : "Teve repercussões apenas no pensamento europeu do século XIX.\n",
    correta      : "Argumentava a favor de uma história evolutiva e progressista.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "(Fuvest) Os portugueses chegaram ao território, depois denominado Brasil, em 1500, mas a administração da terra só foi organizada em 1549. Isso ocorreu porque, até então,",
    alternativaA : "Os índios ferozes trucidavam os portugueses que se aventurassem a desembarcar no litoral, impedindo assim a criação de núcleos de povoamento.",
    alternativaB : "A Espanha, com base no Tratado de Tordesilhas, impedia a presença portuguesa nas Américas, policiando a costa com expedições bélicas.\n",
    alternativaC : "As forças e atenções dos portugueses convergiam para o Oriente, onde vitórias militares garantiam relações comerciais lucrativas.\n",
    alternativaD : "Os franceses, aliados dos espanhóis, controlavam as tribos indígenas ao longo do litoral bem como as feitorias da costa sul-atlântica.\n",
    alternativaE : "A população de Portugal era pouco numerosa, impossibilitando o recrutamento de funcionários administrativos.\n",
    correta      : "As forças e atenções dos portugueses convergiam para o Oriente, onde vitórias militares garantiam relações comerciais lucrativas.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "(Cesgranrio) Entre as modificações que ocorreram nas condições ambientais de nosso planeta, algumas foram causadas pela própria atividade dos seres. Os organismos iniciais, ao realizarem a fermentação, determinaram uma grande alteração na atmosfera da Terra primitiva, porque nela introduziram o:",
    alternativaA : "Gás oxigênio.\n",
    alternativaB : "Gás metano.\n",
    alternativaC : "Gás carbônico.\n",
    alternativaD : "Gás nitrogênio.\n",
    alternativaE : "Vapor d'água.\n",
    correta      : "Gás metano.\n",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(UFBA) O surgimento de organismos com capacidade de utilizar a energia luminosa foi uma inovação importante na história da evolução da vida. Em consequência, houve, na atmosfera, um aumento gradativo na concentração de:",
    alternativaA : "O2",
    alternativaB : "N2",
    alternativaC : "CO2",
    alternativaD : "NH2",
    alternativaE : "CH2",
    correta      : "O2",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "(Uncisal) Uma das preocupações de certa escola filosófica consistiu em provar que as ideias platônicas ou os gêneros e espécies aristotélicos são substâncias reais, criadas pelo intelecto e vontade de Deus, existindo na mente divina. Reflexões dessa natureza foram realizadas majoritariamente no período da história da filosofia:",
    alternativaA : "Pré-socrático.\n",
    alternativaB : "Antigo",
    alternativaC : "Medieval.",
    alternativaD : "Moderno",
    alternativaE : "Contemporâneo",
    correta      : "Medieval",
}
const questoes = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10,]

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
    aviso.style.color="#00ff00"
    eeros.textContent = "Você errou " +erros
    eeros.style.color="#ff0000"

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