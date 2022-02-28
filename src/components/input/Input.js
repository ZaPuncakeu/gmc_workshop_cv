import React from 'react';

function Input({
    type='text',
    placeholder='',
    onChange
}){
    return(
        <input 
            type={type} 
            placeholder={placeholder}
            style={{
                width: '100%',
                height: '50px',
                borderRadius: '8px',
                border: 'solid black 1px',
                outline: 'none',
                paddingLeft: '10px',
                fontSize: "1em"
            }}
            onChange={onChange}
        />
    )
}

export default Input;