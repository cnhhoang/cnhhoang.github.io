
import { useEffect, useState } from "react";

import Terminal from "~/lib/terminal";
import { hScreenFit, terminalSize } from "~/lib/utils";
import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const paragraphs = [
    "A former competitive programmer who participated in and won awards at numerous prestigious programming competitions, most notably the Vietnam Olympiad in Informatics, ACM-ICPC Regional, and Monash MCPC. This journey expanded into research, resulting in three publications on Encrypted Databases presented at international conferences in Vietnam and Australia.",
    "At present, I still find great fascination in discovering patterns and brilliant solutions. I also take satisfaction in seeing the visualization of my code on screen. This combination of interests has led me to pursue both software engineering and penetration testing, allowing me to approach development and security from two complementary angles.",
    "Software engineering experience gives me the developer’s perspective, providing a better understanding of potential weaknesses in an application. On the other hand, a penetration testing background equips me with the knowledge to implement secure code, ensuring that vulnerabilities are addressed early in the development process.",
    "My background and blend of skills allow me to build applications that are not only functional and high-performance but also secure against potential security threats.",
];

const effectTime = 1500;

// ****************************************************************************************************
export default function About()
{
  const [screenSettings, setscreenSettings] = useState("scale-50 skew-x-6 -skew-y-1");
  const [textSetting, setTextSetting] = useState("text-green-500 text-[60px] sm:text-[90px]");
  useEffect(() => {
    const timer = setTimeout(() => {
        setscreenSettings("h-full w-full");
        setTextSetting("text-green-500 text-[24px]");
    }, effectTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${hScreenFit} w-full flex items-center justify-center`}>
        <Terminal className={`${screenSettings} ${terminalSize} transform transition-transform duration-1000 ease-in-out`}>
            <div className={`transform transition-all duration-1000`}>
                <Typewriter text="$ whoami" textSetting={`${textSetting} transition-all duration-1000`}/>
            </div>
            
            {paragraphs.map((entry, index) => (
                <FadeIn key={index} delay={effectTime*1.5/1000} asChild>
                    <div className="text-lg mt-5">
                        {entry}
                    </div>
                </FadeIn>
            ))}
        </Terminal>
    </div>
  );
}