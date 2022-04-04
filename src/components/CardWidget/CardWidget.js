import React from 'react'
import cart from '../images/cart.png'
import './CardWidget.css'
import Counter from '../Counter/Counter'

function Carrito() {
    return(

        <div className='carrito'>
            <a href='#'><img className='cart' src={cart}/></a>
            <h2>8</h2>

        </div>


    )};

export default Carrito;




