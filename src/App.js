import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Multiplier from './components/Multiplier';
import Banner from './components/Banner';
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
                    <Banner image="kara-eads-1297635-unsplash.jpg" offsetLayout>
                        <h3>What Would I Ever Use This For?</h3>
                        <p>Well, cooking with recipes written for US measures is a nightmare. Instead of using a mishmash of jar, cup and spoon sizes, I find a large graduated cylinder or pitcher much easier to work with. The problem is figuring out how many fluid ounces are in all those mixed cups and spoons.</p>
                        <p>This tool will take your recipe, try and find any measurements it recognizes and convert them to fluid ounces (volume) or pounds (mass) so you have one unit to work from.</p>
                        <p>For fun (if you're that kind of person - I'm not judging), you can check the conversions list for the optimized equivalent using cups, gallons, drams and all the other clowns in our weird little fun-car of defined quantities.</p>
                    </Banner>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
