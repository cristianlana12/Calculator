import { useState } from "react"
import { calculadorExponentes } from "./hooks/calculadorExponentes"
import { calculadoraRaices } from "./hooks/calculadoraRaices"

export const Calculator = () => {


    const [pantalla, setPantalla] = useState('0')
    const [resultado, setResultado] = useState('0')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const manejarForm = (p) => {
        if (pantalla === '0') setPantalla(p)
        else setPantalla(pantalla + p)
    }


    const borrarUltimoCaracter = () => {
        if (pantalla.length > 1) {
            const nuevaPantalla = pantalla.slice(0, -1); // Elimina el último carácter
            setPantalla(nuevaPantalla);
        } else {
            setPantalla('0'); // Si solo queda un carácter, restablece la pantalla a "0"
        }
    };

    const borrarTodo = () => {
        setPantalla('0');
        setResultado('0');
    }

    const borrarPantalla = () => {
        setPantalla('0');
    }

    const calcularResultado = () => {
        if (pantalla === '0') {
            //const resultado = eval(pantalla); // Usamos eval() para evaluar la expresión matemática
            setPantalla('0');
        } else {
            const resultado = eval(pantalla);
            setResultado(resultado.toString());
        }
    }

    const MostrarExponentes = (pantalla, exponente) => {

        if (pantalla === '0') {
            setPantalla('0');
        } else {
            pantalla = eval(pantalla)
            console.log(pantalla)
            const resultado1 = calculadorExponentes({ base: pantalla, exponente: exponente })
            console.log(resultado1)
            setPantalla(resultado1.toString());
        }
    }

    const MostrarRaices = (pantalla) => {
        if (pantalla === '0') {
            setPantalla('0');
        } else {
            pantalla = eval(pantalla)
            console.log(pantalla)
            const resultado1 = calculadoraRaices({ base: pantalla})
            console.log(resultado1)
            setPantalla(resultado1.toString());
        }
    }


    return (
        <>
            <section>
                <div className="Conteiner">
                    <section className="cont-Encabezado">
                        <form onSubmit={handleSubmit}>
                            <p>
                                {pantalla}
                            </p>
                        </form>
                    </section>
                    <section className="contenedorResultado">
                        <div className="retultado">
                            <p>{resultado}</p>
                        </div>
                    </section>
                    <section className="cont-filas">
                        <div className="fila">
                            <button className="btn btn-secondary" onClick={() => manejarForm('/100')}>%</button>
                            <button className="btn btn-secondary" onClick={borrarTodo}>CE</button>
                            <button className="btn btn-secondary" onClick={borrarPantalla}>C</button>
                            <button className="btn btn-secondary" onClick={borrarUltimoCaracter}><img src="../borrar.png" alt="borrar-caculadora" /></button>
                        </div>
                        <div className="fila">
                            <button className="btn btn-secondary" onClick={() => manejarForm('1/')}>1/x</button>
                            <button className="btn btn-secondary" onClick={() => MostrarExponentes(pantalla, 2)}>x²</button>
                            <button className="btn btn-secondary" onClick={() => MostrarRaices(pantalla)}>√x</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('/')}>/</button>
                        </div>
                        <div className="fila">
                            <button className="btn btn-secondary" onClick={() => manejarForm('7')}>7</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('8')}>8</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('9')}>9</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('*')}>x</button>
                        </div>
                        <div className="fila">
                            <button className="btn btn-secondary" onClick={() => manejarForm('4')}>4</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('5')}>5</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('6')}>6</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('-')}>-</button>
                        </div>
                        <div className="fila">
                            <button className="btn btn-secondary" onClick={() => manejarForm('1')}>1</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('2')}>2</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('3')}>3</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('+')}>+</button>
                        </div>
                        <div className="fila">
                            <button className="btn btn-secondary"></button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('0')}>0</button>
                            <button className="btn btn-secondary" onClick={() => manejarForm('.')}>,</button>
                            <button className="btn btn-primary" type="submit" onClick={calcularResultado}>=</button>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
