import { useState, useEffect } from 'react';

// ====================================================================================================

// ****************************************************************************************************
interface TypewriterProps {
  text: string;
  speed?: number;
  textSetting?: string;
  erase?: boolean;
  id?: number;
  nextId?: number;
  active?: number;
  setActive?: (id: number) => void;
}

export default function Typewriter({ 
  text, 
  speed = 50, 
  textSetting = "", 
  erase = false, 
  id = 0, nextId, 
  active = 0, 
  setActive = () => {}
}: TypewriterProps) 
{    
  const [displayText, setDisplayText] = useState('');    
  useEffect(() => {
    if (active === id) {
      let i = 0, forward = true;
      const typingInterval = setInterval(() => {
        if ((forward && i < text.length) || (!forward && i >= -1)) {
          setDisplayText(text.substring(0, i + 1));
          i += (forward ? 1 : -1);
        } else {
          if (!erase) {
            if (nextId) {
              setActive(nextId);
            }
            clearInterval(typingInterval);
          } else {
            setTimeout(() => {
              erase = false;
              forward = false;
            }, 2000);
          }
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    } 
  }, [text, speed, id, nextId, active]);
  
  return (
    <p className={`${textSetting}`}>
      {displayText}
    </p>
  );
}
