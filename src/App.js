import { useEffect, useState } from "react";
import ListaNomes from "./componentes/ListaNomes";
import Main from "./componentes/Main/Main";
import "./componentes/Relogio/Relogio.css"

function App() {
  const [Hora, setHora] = useState(23);
    const [Minuto, setMinuto] = useState(59);
    const [Segundo, setSegundo] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundo(Segundo + 1);
            if (Segundo === 59) {
                setSegundo(0);
                setMinuto(Minuto + 1);
                if (Minuto === 59) {
                    setMinuto(0);
                    setHora(Hora + 1);
                    if (Hora === 23 && Minuto === 59 && Segundo === 59) {
                        setHora(0);
                        setMinuto(0);
                        setSegundo(0);
                    }
                }
            }
        }, 1000)
        return () => clearInterval(interval);
    })
  return (
    <div className="App">
      <Main/>
      <ListaNomes />
      <div className="Relogio">
        <h2>{Hora}:{Minuto}:{Segundo}</h2>
      </div>
    </div>
  );
}

export default App;
