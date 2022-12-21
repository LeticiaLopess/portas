import PortaModel from "../model/porta";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {
      return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
   })
}
