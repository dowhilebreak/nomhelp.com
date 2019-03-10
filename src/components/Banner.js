import React, { Component } from 'react';
import '../styles/components/Banner.scss';

class Banner extends Component {
    render() {
        let container_style = {};
        if(this.props.image && this.props.image.length > 0) {
            container_style.backgroundImage = "url('/images/" + this.props.image + "')";
        }

        let container_classes = ['banner-container', 'col-md-12'];
        if(this.props.offsetLayout) {
            container_classes.push('offset-layout');
        }

        return (
            <div className={container_classes.join(' ')} style={container_style}>
                <div className="row opacity-filter">
                    <div className="col offset-wrapper">
                        <div className="row content-container">
                            <div className="col-md-1 col-lg-1 col-xl-2" />
                            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-8">
                                {this.props.children}
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;