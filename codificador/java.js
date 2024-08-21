// Tabela de mapeamento de sílabas para números
const mapaSilabas = {
    'ba': '1', 'be': '2', 'bi': '3', 'bo': '4', 'bu': '5',
    'ca': '6', 'ce': '7', 'ci': '8', 'co': '9', 'cu': '10',
    'da': '11', 'de': '12', 'di': '13', 'do': '14', 'du': '15',
    // Adicione mais sílabas conforme necessário
};

function codificar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let silabaAtual = texto.substr(i, 2);
        
        if (mapaSilabas[silabaAtual]) {
            resultado += mapaSilabas[silabaAtual];
            i++; // Pular o próximo caractere pois já foi usado na sílaba
        } else {
            resultado += texto[i]; // Mantém o caractere se não encontrar uma sílaba correspondente
        }
    }

    document.getElementById("outputText").value = resultado;
}

function limpar() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}

function copiar() {
    const outputText = document.getElementById("outputText").value;

    if (outputText) {
        // Seleciona e copia o texto do textarea
        const textarea = document.getElementById("outputText");
        textarea.select();
        document.execCommand("copy");

        alert("Texto copiado para a área de transferência!");
    } else {
        alert("Nenhum texto para copiar.");
    }
}