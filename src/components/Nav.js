import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/procedures">Procedures</Link></li>
            </ul>
        </div>
    )
}

export default Nav;