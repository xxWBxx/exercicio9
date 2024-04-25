function retornoInvestimento(capitalInicial, taxaJuros, tempoMeses) {
    const montante = capitalInicial * Math.pow(1 + (taxaJuros / 100), tempoMeses);
    return montante.toFixed(2);
}

const capitalInicial = parseFloat(prompt("Digite o capital inicial investido: "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %): "));
const tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses): "));

const retorno = retornoInvestimento(capitalInicial, taxaJuros, tempoMeses);
console.log("O montante após o investimento é de R$", retorno);