import '../css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="navbar">
            <Link to="/"><h1>Abuela's Recipies 👵🏼 </h1></Link>
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create"><button className="add-recipe">Add Recipe</button></Link> 
            </div>   
        </div>
    )
}

export default Navbar