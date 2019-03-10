import React, { Component } from 'react';
import '../styles/components/Subheader.scss';

class Subheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headline: props.headline || ''
        }
    }

    render() {
        return (
            <div className="subheader-container col-md-12">
                <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8 col-md-12">
                        <h2>{this.state.headline}</h2>
                    </div>
                    <div className="col-lg-2" />
                </div>
            </div>
        )
    }
}

export default Subheader;