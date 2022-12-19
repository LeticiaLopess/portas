export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta= false) {
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
        const selecionada = false
        return new PortaModel (this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel (this.numero, this.temPresente, selecionada, this.aberta) // para não alterar os dados internos de Porta, fizemos uma cópia. Sempre que chamarmos um método que altera dados internos, geramos uma nova instância
    }

    abrir() {
        const aberta = true
        return new PortaModel (this.numero, this.temPresente, this.selecionada, aberta)
    }
}

// # pois é um atributo privado