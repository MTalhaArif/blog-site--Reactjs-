import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1> First blog </h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create" style={{
                    color : "white",
                    backgroundColor : "#f1356d",
                    borderRadius : "8px"

                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;