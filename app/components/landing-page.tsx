import { useState, useEffect } from 'react';

// ====================================================================================================
const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i+1));
        i++;
      } else {
        console.log("Done");
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

//****************************************************************************************************
type TypewriterProps = {
  text: string;
  speed?: number;
};
// --------------------------
export const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default function LandingPage() {
  return (
    <div className="">
        <Typewriter text="Hello there" />
    </div>
  );
}
