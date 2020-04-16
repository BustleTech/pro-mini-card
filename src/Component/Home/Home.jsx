import React, { Component } from 'react';

// inner Components
import About from "../About/About"
import Education from "../Education/Education"
import Social from "../Social/Social"
import NameCard from "../NameCard/NameCard"
import Technical from '../Technical/Technical';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCardOpen: false
        }
    }

    openCard(isCardOpen) {
        this.setState({ isCardOpen })
    }

    render() {
        const { isCardOpen } = this.state;
        return (
            <div className="main">
                <div className="main-card">
                    <div className={isCardOpen ? " hide " : " card "} onClick={() => this.openCard(true)}>
                        <div className="img-card">
                            <div className="img-name-card">Madhan Kumar S</div>
                        </div>
                        <div className="name-details">

                        </div>
                    </div>
                    <div className={isCardOpen ? "show-card" : "hide"}>
                        <NameCard />
                        <About />
                        <Education />
                        <Technical />
                        <Social />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;