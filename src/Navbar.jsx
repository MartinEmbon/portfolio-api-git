import logo from ".//img/github-logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="navbar">            
            <header className="App-header">
                <img src={logo} alt="" />
            </header>
                        
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
     );
}
 
export default Navbar;