import React from 'react';

function TextArea({
    placeholder='',
    onChange
}){
    return(
        <textarea 
            placeholder={placeholder}
            style={{
                width: '100%',
                height: '80px',
                borderRadius: '8px',
                border: 'solid black 1px',
                outline: 'none',
                paddingLeft: '10px',
                fontSize: "1em",
                paddingTop: '10px'
            }}
            onChange={onChange}
        ></textarea>
    )
}

export default TextArea;