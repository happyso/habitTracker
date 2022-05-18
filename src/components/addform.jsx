import React, { PureComponent } from 'react';

class Addform extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };
    render() {
        return (
            <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" placeholder='Habit' />
                <button>Add</button>
            </form>
        );
    }
}

export default Addform;