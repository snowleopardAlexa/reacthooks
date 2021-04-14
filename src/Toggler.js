import React, { useState } from 'react';
import useToggle from './hooks/useToggle';


function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "{>" : "{/>"}</h1>
        </div>
    );
}

export default Toggler;



// two pieces of state - this is redundant 
// follow DRY - do not repeat yourself.

// function Toggler() {
//    const [isHappy, setIsHappy] = useState(true);
//    const [isHeartbroken, setIsHeartbroken] = useState(false);

    // identical to toggleIsHeartbroken - repeated logic
//    const toggleIsHappy = () => {
//        setIsHappy(!isHappy);
//    };

//    const toggleIsHeartbroken = () => {
//        setIsHeartbroken(!isHeartbroken);
//    }; 

//    return (
//       <div>
//          <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
//          <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "{>" : "{/>"}</h1>
//       </div>
//    );
// }



// export default Toggler;
