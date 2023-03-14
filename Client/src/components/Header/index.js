import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={"/"} className="brand-logo">Full Plate</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link>Saved Recipes</Link></li>
                    <li><Link>Add Recipe</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                    <li><Link to={"/signup"}>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;