import React from 'react';
import './CV.css';

const CV = ({
    info
}) => {
    return(
        <div className='cv'>
            <div className='doc-container'>
                <div className='cv-doc'>
                    <h1>
                        {info.firstname}
                    </h1>
                    <p style={{
                        fontSize: '1.5em'
                    }}>
                        {info.lastname}
                    </p>

                    <div>
                        <br/>
                        <b>Birthdate: </b>
                        {info.birthdate}
                    </div>

                    <div>
                        <b>Address: </b>
                        {info.address}
                    </div>

                    <div>
                        <br/>
                        <b>Description: </b>
                        <br/>
                        <p style={{textAlign: 'justify'}}>
                            {info.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV;