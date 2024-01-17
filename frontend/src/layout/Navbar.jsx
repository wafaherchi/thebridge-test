// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { ToastContainer, toast } from 'react-toastify'
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        toast.info("you are logged out")
        navigate('/login')

    }
    return (
        <nav className={styles.navbar}>
            <ToastContainer />
            <ul className={styles.navList}>
                {localStorage.getItem('token') ? <>
                                      <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/courses_list" className={styles.navLink}>Courses Management</Link>
                    </li>
                    <li className={styles.navItem}>

                        <button onClick={handleLogout} style={{ backgroundColor: 'red' }} > se deconnecter </button>
                    </li>
                </>
                    :
                    <>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>Home</Link>
                        </li>
                        
                        <li>                        <button onClick={() => navigate('/login')} style={{ backgroundColor: 'green' }} > espace admin </button>
                        </li>

                    </>
                }


            </ul>
        </nav >
    );
};

export default Navbar;
