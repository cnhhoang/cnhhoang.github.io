import LogoHCMUS from "~/assets/images/logo-hcmus.png";
import LogoSelab from "~/assets/images/logo-selab.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "~/components/ui/carousel"
import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const history = [
    {
        logo: () => (
            <div>

            </div>
        ),
        organization: "Promithic",
        title: "Junior Security Consultant",
        duration: "July 2024 - October 2024",
        description: [
            "Developed a full-stack web platform using React, Remix, Tailwind CSS, Prisma, PostgreSQL.",
            "Improved performance and ensured maintainability, scalability by writing reusable modules.",
            "Utilized Git techniques to maintain detailed documentation and version control.",
            "Performed web penetration testing using Burp Suite to identify vulnerabilities."
        ],
    },
    {
        logo: () => (
            <div id="selab" className="w-full h-fit mr-2 none-select flex justify-center items-center none-select">
                <img src={LogoSelab} />
            </div>
        ),
        organization: "SELAB",
        title: "Researcher",
        duration: "May 2019 – September 2020",
        description: [
            "Conducted research on Encrypted Database",
            "Published two papers, which were peer-reviewed and accepted at international conferences",
            "Honored with the Best Paper Award at SoICT2019.",
            "Optimized the algorithm’s performance by applying Lazy Propagation into Segment Tree data structure."
        ],
    },
];

//****************************************************************************************************
export default function WorkExperience()
{   
    return (
        <div className={`relative w-full p-4 text-white`}>
            <Typewriter text="$history | grep experience" textSetting="text-xl text-green-500"/>

            <FadeIn delay={1.5}>
                <div className="h-full w-full flex items-center justify-center">
                    <Carousel className="w-full max-w-lg h-full flex flex-col justify-center items-center">
                        <CarouselContent className="h-full items-center">
                            { history.map((entry, index) => (
                                <CarouselItem className="p-5 w-full h-full flex flex-col" key={index}>
                                    <div className="w-full flex justify-center">
                                        {entry.logo()}
                                    </div>
                                    <div className="mt-3 text-white text-xl">
                                        {entry.title}
                                    </div>
                                    <div className="mt-1 mb-5 text-gray-400 text-xl">
                                        {entry.duration}
                                    </div>

                                    {entry.description.map((description, index) => (
                                        <div key={index} className="text-slate-400">
                                            - {description}
                                        </div>
                                    ))}                            
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="hidden lg:flex">
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </div>
                        <div className="lg:hidden relative">
                            <CarouselPrevious className="absolute bottom-5 left-0"/>
                            <CarouselNext className="absolute bottom-5 right-0"/>
                        </div>                        
                    </Carousel>
                </div>
            </FadeIn>
        </div>
    );
}