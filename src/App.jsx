import { useState, useEffect } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"
import "./css/global.css"
import "./css/estilo.css"


function App() {
  
  //HOCK-useState manipula o estado da variavel
  const {peso, setPeso} = useState(0);
  const {altura, setAltura} = useState(0);
  const {resultado, setResultado} = useState(0);
  const {mostrarResultado, setMostrarResultado}= useState(false)
  
  //FUNÇÃO CAULCULAR IMC
  const calcularImc = ()=>{
    const imc = peso/(altura*altura)
    return setResultado(imc.toFixed(2))
  }
  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true): setMostrarResultado(false)
  }, [resultado])
  
  return (
   
    <div className="container">
    <div className="box">
    <Header/>
    <form>
      <div>
        <label htmlFor="altura"><span className="span">(exemplo 1.80)</span></label>
        <input type="number" id="altura" placeholder="Digite sua altura:" onBlur={({target})=> setAltura(parseFloat(target.value))}></input>
      </div>

       <div>
        <label htmlFor="peso"><span className="span">(exemplo 50 kg)</span></label>
        <input type="number" id="peso" placeholder="Digite seu peso:" onBlur={({target})=> setPeso(parseFloat(target.value))}></input>
      </div>
      <button onClick={calcularImc}>Calcular</button>
    </form>
    </div>
    {mostrarResultado &&(
      <Resultado resultado={Resultado}/>

    )}
    </div>
    
  
  )
}

export default App
