import { useState, useEffect } from "react";

// ====================================================================================================
interface IncrementingNumberProps {
  number: number; 
  delay: number;  
}

const easeOutQuad = (t: number): number => {
  return t * (2 - t); 
};

// ****************************************************************************************************
export default function IncrementingNumber({ number, delay }: IncrementingNumberProps)
{
    const [currentNumber, setCurrentNumber] = useState(0);

        useEffect(() => {
        const startTime = performance.now(); 
        const duration = delay;

        const step = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); 
            const easedProgress = easeOutQuad(progress); 

            setCurrentNumber(Math.floor(easedProgress * number));

            if (progress < 1) {
            requestAnimationFrame(step); 
            }
        };

        requestAnimationFrame(step); 

        return () => setCurrentNumber(0);
    }, [number, delay]);

    // **************************
    return (
        <div>
            {currentNumber}
        </div>
    );
};
