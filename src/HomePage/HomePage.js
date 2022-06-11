import NavBarHome from "../NavBarHome/NavBarHome";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <NavBarHome />
            <div className="dd1">
                <div  className="dd2">
                    <h2 className="hh1">React Web App 1.0</h2>
                    <h3 className="hh2">React JS + Firebase</h3>
                    <ul className="hh3">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>JSX</li>
                        <li>Bootstrap</li>
                    </ul>
                    <p className="hh4">React Web App 1.0 developed using modern technology
                        like React JS. <br/>
                        React is a popular and widely used programming language at present
                        developed by Facebook Company. <br/>
                        This Web App used React Routing Feature for navigation & Firebase for
                        the database.
                    </p>
                    <p className="hh5">&copy; 2022 Demo Web App by Chamika Srimantha</p>
                </div>
            </div>
            <div className='fff1'>
                <p className='fff2'>&copy; 2022 React App Pvt Ltd</p>
            </div>
        </div>
    );
}

export default HomePage;