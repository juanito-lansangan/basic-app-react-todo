import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
          <NavLink className={"navbar-brand"} to="/" exact>React</NavLink>
          <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"navbar-toggler-icon"}></span>
          </button>

          <div className={"collapse navbar-collapse"} id="navbarColor01">
            <ul className={"navbar-nav mr-auto"}>
              <li className={"nav-item"}>
                <NavLink className={"nav-link"} to="/" exact>Home</NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink className={"nav-link"} to="/blog" exact>Blog</NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink className={"nav-link"} to="/todos" exact>Todos</NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink className={"nav-link"} to="/about" exact>About</NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink className={"nav-link"} to="/contact" exact>Contact</NavLink>
              </li>
            </ul>
            <form className={"form-inline my-2 my-lg-0"}>
              <input className={"form-control mr-sm-2"} type="text" placeholder="Search" />
              <button className={"btn btn-secondary my-2 my-sm-0"} type="submit">Search</button>
            </form>
          </div>
        </nav>
    );
}

export default Navigation;
