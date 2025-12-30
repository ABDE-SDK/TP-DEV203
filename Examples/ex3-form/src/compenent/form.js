import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        alert('Welcome to our site ${name}')
    }
    return (
        <>
            <from onSubmit={handleSubmit}>
                <label>nom : <input type='text'></input></label>
            </from>
        </>

    )
}
export default Form;