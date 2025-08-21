
import Header from "./components/Header"
import Resultado from "./components/Resultado"

function App() {
  

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
    </form>
    </div>
    {mostrarResultado &&(
      <Resultado resultado={Resultado}/>

    )}
    </div>
    
  
  )
}

export default App
