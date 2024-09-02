import { LogoPromithic, LogoPromithic2, LogoPromithicWithText } from "~/assets/promithic-logo";
import LogoHCMUS from "~/assets/images/HCMUS.png";
import FlippingLogo from "~/lib/flipping-logo";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion";
import { Content } from "@radix-ui/react-accordion";
// ====================================================================================================

//****************************************************************************************************
export default function WorkExperience()
{   
    const history = [
        {
            logo: () => (
                <div id="promithic" className="h-fit w-10 mr-2 none-select">
                    <LogoPromithic/>
                </div>),
            company: "Promithic",
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
            company: "SELAB",
            title: "Research Intern",
            duration: "May 2019 – September 2020",
            description: [
                "Conducted research and published two papers on Encrypted Database. The works were peer-reviewed and accepted in international conferences. Honored with the Best Paper Award at SoICT2019.",
                "Optimized the algorithm’s performance by approximately 20 times by applying Lazy Propagation into Segment Tree data structure."
            ],
        },

    ];

    return (
            <div className="relative w-full p-5 text-white">
                <div className="flex jusity-center items-center 
                                text-4xl text-white">
                    Experience
                </div>

                <Accordion type="multiple" className="mt-10 w-full none-select">
                    {history.map((job, index) => (
                        <AccordionItem value={job.company}>
                            <AccordionTrigger className="none-select">
                                <div className="flex none-select">
                                    {job.logo()}
                                    <div className="flex flex-col items-start none-select">
                                        <div className="text-2xl">
                                            {job.company}
                                        </div>
                                        <div className="">
                                            {job.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto mr-5">
                                    {job.duration}
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                {job.description.map((content, index) => (
                                    <li key={index}>
                                        {content}
                                    </li>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>                
                
                <FlippingLogo id="promithic" flipCount={3}/>
                <FlippingLogo id="selab" flipCount={4}/>
            </div>            
    );
    
}