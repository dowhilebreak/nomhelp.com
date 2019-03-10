import React, { Component } from 'react';
import '../styles/components/Footer.scss';
import Measurements from '../common/Measurements';

class Footer extends Component {
    /**
     * Takes the labels of all defined measurements and returns them as an array.
     * @returns {Array}
     */
    getSupportedMeasurements() {
        let labels = [];
        Object.keys(Measurements.all).forEach((key) => {
            labels.push(Measurements.all[key].label.en_us.plural);
        });
        return labels;
    }

    render() {
        return (
            <div className="footer-container col-md-12">
                <div className="row">
                    <div className="col-xl-1" />
                    <div className="col-sm-12 col-lg-4 col-xl-3">
                        <h5>Supports the following measurements:</h5>
                        <div className="row">
                            {
                                this.getSupportedMeasurements().map((label, i) => {
                                    return (<div key={i} className="col-sm-12 col-md-6">{label}</div>);
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-xl-4">
                        <h5>A Warning on Increasing the Quantity...</h5>
                        <p><em>Not all recipes can be effectively increased by basic multiplication.</em></p>
                        <p>Rice, for instance, will cook in less water per cup the more cups you start with.</p>
                        <p>Try any increased recipe prior to using it for a big event... You don't want to ruin Thanksgiving dinner over the quirkiness of some starch or protein.</p>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-xl-3">
                        <h5>Limitations...</h5>
                        <ul>
                            <li>Inexact measurements like "cans", "packets" or "medium onions" can't be automatically increased.</li>
                            <li>Common measurement abbreviations are accepted, but not all shorthand has been accounted for. </li>
                            <li>Conversions are currently for US-customary measurements only. Imperial measurements are not yet supported.</li>
                        </ul>
                        <hr />
                        <h5>Disclaimer...</h5>
                        <p>This tool is provided freely "as-is" without any warranty or guarantee of accuracy. Use any converted numbers at your own risk.</p>
                        <hr />
                        <p><small>Measuring Spoons and Cups Image by <a href="https://unsplash.com/@karaeads" target="_blank" rel="noopener noreferrer">Kara Eads</a> on <a href="https://unsplash.com/photos/xrEvYhgQZWI" target="_blank" rel="noopener noreferrer">Unsplash</a></small></p>
                        <p><small>NOM Help is a product of <a href="https://github.com/dowhilebreak" target="_blank" rel="noopener noreferrer">dowhilebreak</a>. Copyright 2019. This website does not track you or make use of any personal information.</small></p>
                    </div>
                    <div className="col-xl-1" />
                </div>
            </div>
        )
    }
}

export default Footer;