import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
return ( 

<div style={{backgroundColor:'#d4e4fb'}}> <header className="header"> <h1 style={{color:"black", fontSize:"40px", fontFamily:"noto sans"}}>My Portfolio</h1>
          
            <nav style={{color:"red", fontSize:"20px", fontFamily:"noto sans"}}>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/accordion">Accordion</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                
            </nav>
        </header>

        <div className="main">
            <Outlet />
        </div>

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-box">
                    <h3 style={{color:'red'}}>About Me</h3>
                    <p>
                        I am Parthi, a student and developer
                        interested in Java, Python and MERN Stack.
                        I enjoy building projects and learning
                        new technologies.
                    </p>


                </div>

                <div className="footer-box">
                    <h3 style={{color:'red'}}>Useful Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/skills">My Skills</Link>
                    <Link to="/projects">My Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>

                <div className="footer-box">
                    <h3 style={{color:'red'}}>My Skills</h3>
                    <p>Java</p>
                    <p>Python</p>
                    <p>MERN Stack</p>
                    <p>React</p>
                </div>

                <div className="footer-box">
                    <h3 style={{color:'red'}}>Contact Info</h3>
                    <p> Salem, Tamil Nadu</p>
                    <p> 9442612865</p>
                    <p>✉️ parthiband547@gmail.com</p>
                    <p>
                        <a href="https://github.com/">
                            GitHub Profile
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    </div>
);

}

export default Layout;