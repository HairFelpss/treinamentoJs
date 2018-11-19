class Lancamento {
    constructor(nome = 'Felipe', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(lanc => this.lancamentos.push(lanc))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(lanc => {
            valorConsolidado += lanc.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())