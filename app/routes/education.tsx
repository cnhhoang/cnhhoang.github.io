import { useEffect, useState } from "react";
import LogoHCMUS from "~/assets/images/logo-hcmus.png";
import LogoPTNK from "~/assets/images/logo-ptnk.jpg";
import { LogoMonash } from "~/assets/logos";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion";
import FadeIn from "~/lib/fade-in";
import FlippingLogo from "~/lib/flipping-logo";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const history = [
    {   id: "monash",
        logo: () => (
            <div id="monash" className="h-fit w-12 mr-2 none-select ">
                <LogoMonash/>
            </div>),
        organization: "Monash University",
        title: 
            <div className="rounded-sm sm:rounded-md px-2 bg-white text-black">
                Master of Cybersecurity
            </div>,
        duration: "July 2024",
        description: [
            "Master degree awarded with distinction (WAM above 80).",
            "Thesis accepted and presented as a full paper at ProvSec2024 (acceptance rate 33%).",
            "Runner-up in MCPC 2022, Monash's largest Competitive Programming Contest.",
            "Commendation letter for earning the highest mark in FIT5129 - Cyber Operations.",
            "Commendation letter for excellent academic performance.",
        ],
    },
    {   id: "hcmus",
        logo: () => (
            <div id="hcmus" className="h-fit w-14 -translate-x-0.5 -translate-y scale-[105%] none-select">
                <img src={LogoHCMUS} />
            </div>
        ),
        organization: <div className="text-sky-500">Ho Chi Minh University of Science</div>,
        title:             
            <div className="rounded-sm sm:rounded-md px-2 bg-blue-900 text-white">
                Bachelor of Computer Science
            </div>,
        duration: "2020",
        description: [
            "First-class honours awarded (WAM above 80).",
            "Research paper awarded with Best paper award in SoICT2019.",
            "Another research paper accepted and presented as a full paper at FDSE2019.",
            "3rd prize in Collegiate Information Security (CTF), South Vietnam, 2019.",
            "2nd prize in Vietnam National Collegiate Olympiad in Informatics, 2018.",
            "Ranked 48th (148 teams) in ACM-ICPC Asia HCMC Regional Contest, 2017.",
            "2nd prize (ranked 15/188) in ACM-ICPC Vietnam National Contest, 2017.",
            "3rd prize in Vietnam National Collegiate Olympiad in Informatics, 2016.",
            "Scholarships for excellent academic performance.",
        ],
    },    
    {   id: "ptnk",
        logo: () => (
            <div id="ptnk" className="h-fit w-14 scale-110 mr-2 none-select">
                <img src={LogoPTNK} />
            </div>
        ),
        organization:   <div className="text-sky-100 flex">
                            <span className="hidden sm:block mr-1"> VNU-HCM </span>
                            High School for the Gifted
                        </div>,
        title:  <div className="rounded-sm sm:rounded-md px-2 bg-sky-100 text-blue-800 flex">
                    <span className="mr-1"> Majoring in  </span>
                    <span className="hidden sm:block"> Information Technology </span> 
                    <span className="sm:hidden"> IT </span>
                </div>,
        duration: "2016",
        description: [
            "Valedictorian of Ho Chi Minh City's Olympiad in Informatics, 2016.",
            "Vietnam National Olympiad in Informatics, 2016.",
            "Gold medal in the April 30th Olympic competition for computer science, 2015.",
            "Gold medal in the April 30th Olympic competition for computer science, 2014.",
            "Scholarships for excellent academic performance.",
        ],
    },    
];

//****************************************************************************************************
export default function Education()
{
    /// Handle flip upon click
    const [flipCounts, setFlipCounts] = useState<Record<string, number>>({}); 

    /// Init 4 flips, taking fade-in delay into account
    useEffect(() => {
      const initialFlipCounts: Record<string, number> = {};
      history.forEach((entry) => {
        initialFlipCounts[entry.id] = 4;
      });
      setFlipCounts(initialFlipCounts);
    }, []);
    
    const handleClick = (id: string) => {
        /// Set flip count to 0 then 2 to make React re-render
        setFlipCounts((prevFlipCounts) => ({
        ...prevFlipCounts,
        [id]: 0,
        }));
        /// Delay instead of await
        setTimeout(() => {
        setFlipCounts((prevFlipCounts) => ({
            ...prevFlipCounts,
            [id]: 2,
        }));
        }, 1);
    };

    /// RENDER
    return (
        <div className="relative w-full p-4 text-white">
            <Typewriter text="$history | grep education" textSetting="text-xl text-green-500"/>

            <FadeIn delay={1.5}>
                <Accordion type="multiple" className="w-full none-select">
                    {history.map((entry, index) => (
                        <AccordionItem value={entry.id} key={index}>
                            <AccordionTrigger className="none-select">
                                <div className="flex none-select">
                                    <div onClick={() => handleClick(entry.id)}>
                                        {entry.logo()}
                                        <FlippingLogo id={entry.id} flipCount={flipCounts[entry.id]}/>
                                    </div>
                                    <div className="flex flex-col items-start none-select">
                                        <div className={`text-base`}>
                                            {entry.organization}
                                        </div>
                                        <div className="text-base sm:text-2xl font-bold">
                                            {entry.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-xl text-emerald-400 ml-auto mr-5">
                                    {entry.duration}
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                {entry.description.map((content, index) => (
                                    <li key={index} className="text-gray-300">
                                        {content}
                                    </li>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </FadeIn>
        </div>            
    );
}