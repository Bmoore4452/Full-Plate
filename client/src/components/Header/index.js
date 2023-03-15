import React from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={"/"} className="brand-logo">Full Plate</Link>
                    {auth.loggedIn() ? (
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link>Saved Recipes</Link></li>
                        <li><Link to={`user/${auth.getProfile().data._id}`}>Add Recipe</Link></li>
                        <li><Link onClick={auth.logout}>Logout</Link></li>
                        </ul>
                    ) : (
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link>Saved Recipes</Link></li>
                            <li><Link to={"/user:userID"}>Add Recipe</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/signup"}>Sign Up</Link></li>
                        </ul>    
                    )}
            </div>
        </nav>
    );
};

export default Header;