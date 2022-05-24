import React, { memo } from 'react';

const Addform = memo(
    (props) => {
        const formRef = React.createRef();
        const inputRef = React.createRef();
        const onSubmit = (event) => {
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            formRef.current.reset();
        };
    
        return(
            <form ref={formRef} className='add-form' onSubmit={onSubmit}>
                <input ref={inputRef} type="text" placeholder='Habit' />
                <button>Add</button>
            </form>
        )
    }
)

export default Addform;