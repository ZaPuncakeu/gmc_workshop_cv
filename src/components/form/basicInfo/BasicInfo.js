import React from 'react';
import Input from '../../input/Input';
import TextArea from '../../textArea/TextArea';
import './BasicInfo.css';

export default function BasicInfo({
    setInfo,
    info
})
{
    return(
        <div className='basic'>
            <div className='oneLine'>
                <div>
                    <Input
                        type='text'
                        placeholder='Enter your first name'
                        onChange={(e) => setInfo({...info, firstname: e.target.value})}
                    />
                </div>

                <div>
                    <Input
                        type='text'
                        placeholder='Enter your last name'
                        onChange={(e) => setInfo({...info, lastname: e.target.value})}
                    />
                </div>
            </div>

            <div className='oneLine'>
                <div>
                    <label>Birthdate</label>
                    <Input
                        type='date'                        
                        onChange={(e) => setInfo({...info, birthdate: e.target.value})}
                    />
                </div>

                <div>
                    <label style={{opacity: '0'}}>s</label>
                    <Input
                        type='text'
                        placeholder='Address'
                        onChange={(e) => setInfo({...info, address: e.target.value})}
                    />
                </div>
            </div>

            <div className='description'>
                <TextArea
                    placeholder='Enter a description'
                    onChange={(e) => setInfo({...info, description: e.target.value})}
                />
            </div>
        </div>
    )
} 