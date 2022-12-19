import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta"

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  const [texto, setTexto] = useState("...")
  

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type="text" value={texto} onChange={e => setTexto(e.target.value)}/>
      <Porta value={p1}/>
      
    </div> 
  )
}

// apartir dos métodos: desselecionar(), alternarSelecao() e abrir(), será gerada uma nova porta com os valores modificados