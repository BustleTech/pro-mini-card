import React, { Component } from 'react';

class NameCard extends Component {
    render() {
        return (
            <div className="name-card">
                <div className="name-card-img">
                    <img src={require("../../Assets/images/Madhan-pro.jpg")}/>
                </div>
                <div className="name-card-text">
                    Madhan Kumar S
                    <p>
                        Full Stack Web Developer
                    </p>
                </div>
            </div>
        );
    }
}

export default NameCard;