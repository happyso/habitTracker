import React, { Component } from 'react';

class Addform extends Component {
    handleAdd = () => {
        this.props.onAdd(this.props.habit);
    };
    render() {
        return (
            <div className='add-form'>
                <input type="text" placeholder='Habit'/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default Addform;