import React from 'react'
import Logo from '../images/logo.png'
import './NavBar.css'


function NavBar(props) {
    return(

        <div className='navbar'>

            <a href='index.html'> <img className='logo' src={Logo}></img></a>

            <ul className='categorias'>
                <a href='#'>Inicio</a>
                <a href='#'>Paquetes</a>
                <a href='#'>Comunidades</a>
                <a href='#'>Sobre Nosotros</a>
             </ul>
        </div>


    )}

export default NavBar;