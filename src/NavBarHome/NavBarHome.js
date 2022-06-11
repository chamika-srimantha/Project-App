import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import { Route, Routes } from "react-router-dom";
import './NavBarHome.css'

function NavBarHome() {
    return (


        <div>
            
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand yyyy">React App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active xxxx" to={"/"} aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link xxxx" to={"/login"} href="#">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  xxxx" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chamika
                                </a>
                                
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active xxxx" to={"/login"} href='#'>Log In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active xxxx" to={"/register"} href='#'>Register</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarHome;