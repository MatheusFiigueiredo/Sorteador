/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Main.css';
import Sorteador from '../../Sorteador';

function Main() {
    const [resultado, setResultado] = useState('');

    const resultadoAtualizado = () => {
        setResultado(Sorteador());
    }

    return (
        <div className='Sorteio'>
            <h2>Sorteie o número: </h2>
            <button onClick={resultadoAtualizado}>Sortear</button>
            <h3>{resultado}</h3>
        </div>
    );
}

export default Main;