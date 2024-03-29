import './Navbar.css'
import image from '../../images/logo.png'

const Navbar = () => {
     return(
        <div className='navbar'>
            <img src={image} /> 
            <h1 className='logo'>Notes</h1>
        </div>
     )
}


export default Navbar