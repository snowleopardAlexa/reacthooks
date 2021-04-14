// We created the useFormState.js custom hook and now
// we can call its logic in this component.
// We don't repeate the logic, and we can add as many
// inputs as we want

import React from 'react';
import useFormState from './hooks/useFormState';

function FormInputHooks() {
    const [email, updateEmail, resetEmail] = useFormState("");
    return (
        <div>
            <h1>The value is...{email}</h1>
            <input type='text' value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
    );
}

export default FormInputHooks;