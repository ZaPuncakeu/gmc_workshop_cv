import React from 'react';
import Input from '../input/Input';
import BasicInfo from './basicInfo/BasicInfo';

import './Form.css';

function Form({
    setInfo,
    info
})
{
    return(
        <div className='form'>
            <BasicInfo
                setInfo={setInfo}
                info={info}
            />
        </div>
    )
}

export default Form;