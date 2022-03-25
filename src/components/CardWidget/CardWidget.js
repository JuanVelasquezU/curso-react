import React from 'react'
import cart from '../images/cart.png'
import './CardWidget.css'

function Carrito() {
    return(

        <div className='carrito'>
            <a href='#'><img className='cart' src={cart}/></a>
            <h2>5</h2>

        </div>


    )};

export default Carrito;




