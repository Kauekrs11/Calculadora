// Variáveis globais
let resultado = '';

function insert(value) {
    resultado += value;
    document.getElementById('resultado').textContent = resultado;
}

function calcular() {
    try {
        resultado = eval(resultado); // Avalia a expressão
        document.getElementById('resultado').textContent = resultado;
    } catch (error) {
        document.getElementById('resultado').textContent = 'Erro';
    }
}

function clean() {
    resultado = '';
    document.getElementById('resultado').textContent = '';
}

function back() {
    resultado = resultado.slice(0, -1);
    document.getElementById('resultado').textContent = resultado;
}

// Event listeners para os botões
document.querySelectorAll('.botao').forEach((botao) => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;
        insert(valor);
    });
});
