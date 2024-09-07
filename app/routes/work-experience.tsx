
import LogoHCMUS from "~/assets/images/HCMUS.png";
import { LogoPromithic, LogoPromithic2, LogoPromithicWithText } from "~/assets/promithic-logo";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "~/components/ui/carousel"

// ====================================================================================================
const history = [
    {
        logo: () => (
            <div id="promithic" className="w-96 h-fit mr-2 none-select ">
                <LogoPromithicWithText />
            </div>
        ),
        organization: "Promithic",
        title: "Junior Software Developer - Penetration Tester",
        duration: "July 2024 - Present",
        description: [
            "Constructed a full web stack, with ongoing upgrades and data migration under the supervision of a senior lead. Developed a web platform as the only full-stack developer, ensuring high performance, maintainability, scalability, and reusability. Maintained thorough documentation and comprehensive history throughout the process. Additional details are confidential under an NDA.",
            "Performed penetration testing following the standards outlined in the OWASP Testing Guide. Solved more than 100 PortSwigger labs, progressing towards Burp Suite Certified Practitioner certification."
        ],
    },
    {
        logo: () => (
            <div id="selab" className="h-fit w-12 none-select">
                <img src={LogoHCMUS} />
            </div>
        ),
        organization: "SELAB",
        title: "Research Intern",
        duration: "May 2019 – September 2020",
        description: [
            "Conducted research and published two papers on Encrypted Database. The works were peer-reviewed and accepted in international conferences. Honored with the Best Paper Award at SoICT2019.",
            "Optimized the algorithm’s performance by approximately 20 times by applying Lazy Propagation into Segment Tree data structure."
        ],
    },

];

//****************************************************************************************************
export default function WorkExperience()
{   
    // return (
    //         <div className="relative w-full p-5 text-white">
    //             <div className="flex jusity-center items-center 
    //                             text-4xl text-white">
    //                 Experience
    //             </div>

    //             <Accordion type="multiple" className="mt-10 w-full none-select">
    //                 {history.map((job) => (
    //                     <AccordionItem value={job.organization}>
    //                         <AccordionTrigger className="none-select">
    //                             <div className="flex none-select">
    //                                 {job.logo()}
    //                                 <div className="flex flex-col items-start none-select">
    //                                     <div className="text-2xl">
    //                                         {job.organization}
    //                                     </div>
    //                                     <div className="">
    //                                         {job.title}
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className="ml-auto mr-5">
    //                                 {job.duration}
    //                             </div>
    //                         </AccordionTrigger>

    //                         <AccordionContent>
    //                             {job.description.map((content, index) => (
    //                                 <li key={index}>
    //                                     {content}
    //                                 </li>
    //                             ))}
    //                         </AccordionContent>
    //                     </AccordionItem>
    //                 ))}
    //             </Accordion>                
                
    //             <FlippingLogo id="promithic" flipCount={4}/>
    //             <FlippingLogo id="selab" flipCount={4}/>
    //         </div>            
    // );

    // CHANGING TO CAROUSEL
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Carousel className="w-full max-w-lg h-full border flex">
                <CarouselContent className="border-2">
                { history.map((entry, index) => (
                    <CarouselItem className="" key={index}>
                        <div className="w-full flex items-center justify-center">
                            {entry.logo()}
                        </div>
                        
                    </CarouselItem>
                ))
                }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}