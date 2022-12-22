import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {

  return (
    <div style={{display: "flex"}}>
      <h1>Formulário de Início</h1>
    </div> 
  )
  
}

// apartir dos métodos: desselecionar(), alternarSelecao() e abrir(), será gerada uma nova porta com os valores modificados

