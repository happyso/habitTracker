import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <h1><i className="fa-solid fa-leaf"></i>Habit Tracker</h1>
                <span className="habit-all-count">{this.props.totalCount}</span>
            </header>
        );
    }
}

export default Navbar;