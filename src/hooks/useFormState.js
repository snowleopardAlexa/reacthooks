// This is recommended - create a custom hook where you can
// define the state, and then you just call it in the other
// component - FormInputHooks.js 
// In this way you can re-use the logic.

import React, { useState } from 'react';

export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset]
};

