// Lista de herói/heroína
const herois = [
    { nome: "Júlia", xp: 10500 }, // Radiante
    { nome: "Gabriela", xp: 6000 }, // Ouro
    { nome: "Flávio", xp: 7500 } // Platina
];

// Resultado acumulado
let resultadoHTML = "";

// Classificação do herói/heroína
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    let nivel;

    // Classificação baseada no XP
    if (heroi.xp < 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else if (heroi.xp >= 10001) {
        nivel = "Radiante";
    }

    // Resultado Final
    resultadoHTML += `
        <button class="resultado-btn">
            A Heroína / O Herói de nome <span class="destaque">${heroi.nome}</span> está no nível de <span>${nivel}!</span>
        </button>
    `;
}

// Atualiza o conteúdo na página
document.getElementById("resultado").innerHTML = resultadoHTML;
