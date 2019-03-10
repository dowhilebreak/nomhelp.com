import React, { Component } from 'react';
import '../styles/components/Menu.scss';

/* TODO: Only one tool so no need for a menu yet. */

class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <div className="menu row align-items-end">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tools</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;