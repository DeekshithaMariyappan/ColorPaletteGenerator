import "./css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/colorPalette' className="link">ColorPalette</Link></li>
                <li><Link to='/savedPalette' className="link">Saved Palettes</Link></li>
                <li><Link to='/applyPalette' className="link">Apply Palette</Link></li>
            </ol>
        </nav>
        </header>
    )
}
export default Navbar;