import React from "react";
import './ItemListContainer.css'
import '../Counter/Counter'
import Counter from "../Counter/Counter";

function ItemListContainer(props) {
    console.log(props)

    return(
        <div className="tarjetatour">
        
            <h1>Esto es una prueba</h1>

            <Counter />
      
            
           

        </div>


    )

    
}

export default ItemListContainer;