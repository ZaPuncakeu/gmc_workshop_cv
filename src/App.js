import React, {useState} from 'react';
import './styles/App.css';

import Form from './components/form/Form';
import CV from './components/cv/CV';

const App = () => 
{
    const [info, setInfo] = useState({
        description: '',
        firstname: '',
        lastname: '',
        birthDate: '',
        address: ''
    })
    
    

    return(
        <div className='body'>
            <Form 
                setInfo={setInfo}
                info={info}
            />
            <CV 
                info={info}
            />
        </div>
    )
}

export default App;