import react from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'




function NavBarComponent(props){
    return ( 
  
		<div class="menu">
		<li><a href="#">Inicio</a></li>
		<li><a href="#">Nosotros</a></li>
		<li><a href="#">Servicios</a>
			<ul class="submenu">
				<li><a href="#">Servicio #1</a></li>
				<li><a href="#">Servicio #2</a></li>
				<li><a href="#">Servicio #3</a></li>
			</ul>
		</li>
		<li><a href="#">Contacto</a></li>
	</div >

		
		
    ) 
}
export default NavBarComponent;