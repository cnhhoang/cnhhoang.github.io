import { useState, useEffect } from 'react';
import PromithicLogo from '~/assets/promithic-logo';
// ====================================================================================================
export const useTypewriter = (text: string, speed = 50, erase = false, id: number, nextId: number, active: number, setActive: (id: number) => void) => {
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
  
    return displayText;
};
// --------------------------
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

export const Typewriter = ({ text, speed = 50, textSetting = "text-4xl", erase = false, id, nextId, active, setActive }: TypewriterProps) => {
    const displayText = useTypewriter(text, speed, erase, id, nextId, active, setActive);
  
    return (
      <p className={`${textSetting}`}>
        {displayText}
      </p>
    );
};

//****************************************************************************************************
export default function LandingPage() {
    const [active, setActive] = useState(0);
    const careers = [
        "programmer",
        "software developer",
        "penetration tester",
        "researcher"
    ]
  
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center focus:border-transparent select-none">
        <div className = "grid grid-rows-2">
            <div className="flex justify-center items-center">
                <Typewriter text="Unlocking potential as a " textSetting="text-4xl text-white" id={0} nextId={1} setActive={setActive} active={active} />
            </div>
            <div className="flex justify-center items-center">
                {
                    careers.map((text, index) => (
                        <Typewriter key={index} text={text} textSetting="text-4xl text-red-500" erase={true} id={index+1} nextId={index+1===careers.length ? 1 : index+2} setActive={setActive} active={active} />
                    ))
                }
            </div>
        </div>
      </div>
    );
  }