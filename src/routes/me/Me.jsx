import React from "react";
import { Buttons, Timeline } from "../../components";
import { Footer, Navbar } from "../../containers";
import './me.css';


const Me = () => {
    return(
        <div className="me">
            <div className="return">
                <Buttons
                    text={"Retour"}
                    link="/"
                />
            </div>

            <Timeline />
            <Footer />
        </div>
    )
}
export default Me;