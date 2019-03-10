import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Multiplier from './components/Multiplier';
import './styles/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localization: 'en_us',
        }
    }

    render() {
        return (
            <div className="App container-fluid">
                <div className="row page-head">
                    <Header />
                </div>
                <div className="row page-body">
                    <Multiplier localization={this.state.localization} />
                </div>
                <div className="row page-foot">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
