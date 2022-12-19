export default class Porta {
    #numero
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente = false, selecionada = false, aberta= false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    desselecionar() {
        const selecinada = false
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecinada = !this.selecionada
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta) // para não alterar os dados internos de Porta, fizemos uma cópia. Sempre que chamarmos um método que altera dados internos, geramos uma nova instância
    }

    abrir() {
        const aberta = true
        return new Porta(this.numero, this.temPresente, this.selecionada, aberta)
    }
}

// # pois é um atributo privado