import { LogoMonash } from "~/assets/logo-monash";
import LogoHCMUS from "~/assets/images/HCMUS.png";
import LogoPTNK from "~/assets/images/LogoPTNK.jpg";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion";
import FlippingLogo from "~/lib/flipping-logo";

// ====================================================================================================
const history = [
    {
        id: "monash",
        logo: () => (
            <div id="monash" className="h-fit w-12 mr-2 none-select ">
                <LogoMonash/>
            </div>),
        organization: "Monash University",
        title: "Master of Cybersecurity",
        duration: "July 2022 - July 2024",
        description: [
            "Master degree awarded with distinction (WAM above 80).",
            "Thesis accepted and presented as a full paper at ProvSec2024 (acceptance rate 33%).",
            "Runner-up in MCPC 2022, Monash's largest Competitive Programming Contest.",
            "Commendation letter for earning the highest mark in FIT5129 - Cyber Operations.",
            "Commendation letter for excellent academic performance.",
        ],
    },
    {
        id: "hcmus",
        logo: () => (
            <div id="hcmus" className="h-fit w-14 -translate-x-0.5 -translate-y-1 none-select">
                <img src={LogoHCMUS} />
            </div>
        ),
        organization: "Ho Chi Minh University of Science",
        title: "Bachelor of Computer Science",
        duration: "2016 - 2020",
        description: [
            "First-class honours awarded (WAM above 80).",
            "Research awarded with Best paper award in SoICT2019.",
            "Another research paper accepted and presented as a full paper at FDSE2019.",
            "3rd prize in Collegiate Information Security (CTF), South Vietnam, 2019.",
            "2nd prize in Vietnam National Collegiate Programming Contest, 2018.",
            "Ranked 48th (148 teams) in ACM-ICPC Asia HCMC Regional Contest, 2017.",
            "2nd prize (ranked 15/188) in ACM-ICPC Vietnam National Contest, 2017.",
            "3rd prize in Vietnam National Collegiate Programming Contest, 2016.",
            "Scholarships for excellent academic performance.",
        ],
    },    
    {
        id: "ptnk",
        logo: () => (
            <div id="ptnk" className="translate-y-1.5 h-fit w-12 mr-2 none-select">
                <img src={LogoPTNK} />
            </div>
        ),
        organization: "VNU-HCM High School for the Gifted",
        title: "Majoring in Information Technology",
        duration: "2013 - 2016",
        description: [
            "Valedictorian of Ho Chi Minh City's academic excellence competition in computer science, 2016.",
            "Prize in Vietnam National Olympiad in Informatics, 2016.",
            "Gold medal in the April 30th Olympic competition for computer science, 2015.",
            "Gold medal in the April 30th Olympic competition for computer science, 2014.",
            "Scholarships for excellent academic performance.",
        ],
    },    
];

//****************************************************************************************************
export default function Education()
{
    return (
        <div className="relative w-full p-5 text-white">
            <div className="flex jusity-center items-center 
                            text-4xl text-white">
                Education
            </div>

            <Accordion type="multiple" className="mt-10 w-full none-select">
                {history.map((entry) => (
                    <AccordionItem value={entry.organization}>
                        <AccordionTrigger className="none-select">
                            <div className="flex none-select">
                                {entry.logo()}
                                <FlippingLogo id={entry.id} flipCount={4}/>
                                <div className="flex flex-col items-start none-select">
                                    <div className="text-2xl">
                                        {entry.organization}
                                    </div>
                                    <div className="">
                                        {entry.title}
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto mr-5">
                                {entry.duration}
                            </div>
                        </AccordionTrigger>

                        <AccordionContent>
                            {entry.description.map((content, index) => (
                                <li key={index}>
                                    {content}
                                </li>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>            
    );
}