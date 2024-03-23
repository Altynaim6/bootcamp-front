import React from 'react';
import classes from "./Cart.module.css";
import peach from "../../assets/peach.png";

const Cart = () => {
    return (
        <div className={classes.form}>
            <div className={classes.flex_container}>
                <h3 className={classes.text_form_name}>Purchase name</h3>
                <div className={classes.text_block}>
                    <img className={classes.peach} src={peach} alt="peach" />
                    <p className={classes.text_form}>
                        Purchase description
                        Purchase description
                        Purchase description
                        Purchase description
                        Purchase description
                        Purchase description
                    </p>
                </div>
                </div>
            </div>
        );
    };

    export default Cart;
