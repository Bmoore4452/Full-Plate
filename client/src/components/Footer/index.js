import React from "react";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Full Plate</h5>
                        <p className="grey-text text-lighten-4">Here are the collaborators that worked on this application</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/Bmoore4452">Brian Moore</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/harljos">Joseph Harley</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/Noahwberg">Noah Berg</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/NickFierke">Nick Fierke</a></li>
                        </ul>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer;