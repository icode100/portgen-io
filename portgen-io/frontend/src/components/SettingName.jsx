import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
export default function AnimatedText() {
    const [displayText, setDisplayText] = useState('');
    let index = 0;
    
    
    const [props,setprops] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const token = Cookies.get('token');
            //   (token)
              if (!token) {
                throw new Error('Invalid token');
              }
              const config = {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };
              const data = await (await fetch('http://localhost:5000/portapi/v1/reglog/getdetails', config)).json();
            //   (data)
              setprops(data);
            //   (props)
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          };
          
          fetchData();
          
      }, [props]);

      
      let text = `+HELLO ${props.name}`;
    useEffect(() => {
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev.slice(0, prev.length - 1) + text.charAt(index) + "|");
                (displayText);
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




