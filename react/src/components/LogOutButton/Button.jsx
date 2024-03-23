import React from 'react';
import classes from "./Button.module.css";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('token')
        setIsAuth(null)
        navigate('/login')
    }
    
    return (
        <section>
            <button className={classes.button_29} onClick={() => logOut()}>LogOut</button>
        </section>
        );
    };

    export default Button;
