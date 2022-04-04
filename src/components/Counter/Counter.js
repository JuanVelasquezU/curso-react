import { useState } from 'react';
import '../Counter/counter.css'

const Counter = () => {
const [count, setCounter] = useState(0);

const decrement= () =>{
    console.log('decrement')
    setCounter(count -1)
}

const increment = () => {
    console.log("increment")
    setCounter(count +1)
}

    return(

        <div className='counterCart'>
            <button className="btn" onClick={decrement}> Quitar </button>
            <h2 className='numero'>{count}</h2>
            <button className="btn" onClick={increment}>Agregar</button>
        </div>
    )

}

export default Counter;