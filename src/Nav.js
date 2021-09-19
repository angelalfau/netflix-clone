import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://occ-0-448-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYbN2li_u3UMH4coDfBhqybOKYFnffjNB-tZ4qANwBa5drVi9_-Wr3sHmibY6gxM_Uizr856wW0cFLkDdGBSRnwpo7ij.png?r=2ca"
                alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav;
