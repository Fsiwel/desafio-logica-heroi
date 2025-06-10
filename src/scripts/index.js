/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 
 
*/

const classeSelect = document.getElementById('classe');
const imgPersonagem = document.getElementById('clase_personagem');
const sexoMasculino = document.getElementById('sexo-m');
const sexoFeminino = document.getElementById('sexo-f');

const imagensClasse = {
    guerreiro: {
        m: './src/images/guerreiro_m.png',
        f: './src/images/guerreiro_f.png'
    },
    ladino: {
        m: './src/images/ladino_m.png',
        f: './src/images/ladino_f.png'
    },
    mago: {
        m: './src/images/mago_m.png',
        f: './src/images/mago_f.png'
    },
    bardo: {
        m: './src/images/bardo_m.png',
        f: './src/images/bardo_f.png'
    },
    clerigo: {
        m: './src/images/clerigo_m.png',
        f: './src/images/clerigo_f.png'
    },
    vazio: {
        m: './src/images/vazio.png',
        f: './src/images/vazio.png'
    }
};

function atualizarImagem() {
    const classe = classeSelect.value.toLowerCase();
    const sexo = sexoMasculino.checked ? 'm' : sexoFeminino.checked ? 'f' : 'm';
    imgPersonagem.src = imagensClasse[classe]?.[sexo] || imagensClasse.vazio.m;
}

classeSelect.addEventListener('change', atualizarImagem);
sexoMasculino.addEventListener('change', atualizarImagem);
sexoFeminino.addEventListener('change', atualizarImagem);


    function heroi(nome,xp )
{
   let nivelHeroi = xp / 1000; 
   return (`O Herói é ${nome} e seu nivel é  ${nivelHeroi.toFixed(0)}, tendo ${xp} de experiencia`);
}
sexo = true;
const nome = "Siwel"; 
let ranking = ""; 
let xp = 200;

// Função para exibir nome e xp (se desejar)
function heroi(nome, xp) {
  return `O Herói ${nome} tem ${xp} de XP.`;
}
console.log(heroi(nome, xp));

if (xp <= 1000) {
   ranking = "Ferro";
} else if (xp > 1000 && xp <= 2000 ) {
   ranking = "Bronze";
} else if (xp > 2000 && xp <= 5000) {
   ranking = "Prata";
} else if (xp > 5000 && xp <= 7000) {
   ranking = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
   ranking = "Platina";
} else if (xp > 8000 && xp <= 9000) {
   ranking = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
   ranking = "Imortal";
} else {
   ranking = "Radiante";
}

console.log(`O ranking do Herói é ${ranking}`);

switch (ranking) {
  case "Ferro": 
    console.log("O Equipamento do Herói é um par Botas rasgadas");
    break;
  case "Bronze":
    console.log("O Equipamento do Herói é uma Capa leve de couro");
    break;
  case "Prata":
    console.log("O Equipamento do Herói é um Anel da resistência ");
    break;
  case "Ouro":
    console.log("O Equipamento do Herói é um Amuleto da força");
    break;
    case "Platina": 
    console.log("O equipamento do Herói é um Elmo de proteção arcana");
    break; 
    case "Ascendente": 
    console.log("O equipamento do Herói é um Cinto de destreza divina"); 
    break; 
    case "Imortal": 
    console.log("O equipamento do Herói é Bracelete da imortalidade (1X)"); 
    break; 
    case "Radiante": 
    console.log("O equipamento do Herói é Relíquia Ancestral Divina");
  default: 
    console.log("Equipamento indefinido");
}
