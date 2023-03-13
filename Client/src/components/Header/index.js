import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link>Saved Recipes</Link></li>
                    <li><Link>Add Recipe</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;