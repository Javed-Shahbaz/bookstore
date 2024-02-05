import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
return(
  <div className="navbar">
    <div className='header'>
    <h1>Bookstore CMS</h1>
    <NavLink to="Books">BOOKS</NavLink>
    <NavLink to="Categories" className='categories'>CATEGORIES</NavLink>
    </div>
    <div className="icon">
    <i class='bx bxs-user-circle'></i>
    </div>

  </div>
  
)
}
export default Navbar;

