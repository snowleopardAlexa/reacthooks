// call useState
// return piece of state and a function to toggle it
import React, { useState } from 'react';

function useToggle(initialVal = false) {
// call useState, "reserve piece of state"
const [state, setState] = useState(initialVal);
const toggle = () => {
    setState(!state);
};

    return [state, toggle];
}


export default useToggle;