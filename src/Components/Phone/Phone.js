import React from "react";
import "./Phone.css"
import face from './assets/face.png'


const Phone = () => {


    return (
        <div className="phone">
            <div className="inner-skin">
                <div className="notch"></div>
                <h1 className="hello">Hello</h1>
                <h1>There, <br/>Stranger!</h1>
                <div className="phone-img">
                    <img src={face} alt=""/>
                </div>
                <p className="phone-text">Let's build together...</p>
                <button className='phone-btn'>SMASH</button>
                <div className="bottom-notch"></div>

            </div>

        </div>
    )

}

export default Phone;