import { useState, useEffect } from 'react';

// ====================================================================================================

type TypewriterProps = {
  text: string;
  speed?: number;
  textSetting?: string;
  erase?: boolean;
  id: number;
  nextId?: number;
  active: number;
  setActive: (id: number) => void;
};
// --------------------------

export default function Typewriter({ text, speed = 50, textSetting = "text-4xl", erase = false, id, nextId, active, setActive }: TypewriterProps)
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
            console.log("Done " + id);
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
