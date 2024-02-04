import React, { useState, useEffect } from 'react';

export default function AnimatedText() {
    const [displayText, setDisplayText] = useState('');
    let index = 0;
    let text = `H+ELLO NAME`;

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev.slice(0, prev.length - 1) + text.charAt(index) + "|");
                console.log(displayText);
                index++;
            }
        }, 200); // 200ms delay

        return () => clearInterval(timer); // Clean up on unmount
    }, [text]);

    return ( 
        <div className='displayName'>
         <h1 class = "text-setting">{displayText}</h1>
        </div>
    )
}




