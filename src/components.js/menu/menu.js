import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Menu=()=>{
    return(
        <header>
        <nav className="navbar navbar-light navbar-expand-md border rounded-0 shadow-sm sticky-top">
        <div className="container-fluid"><NavLink className="navbar-brand" to="#">Brand</NavLink><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" activeClassName to="/home">First Item</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" activeClassName to="/">Second Item</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" activeClassName to="/">Third Item</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
    );
}
export default Menu;