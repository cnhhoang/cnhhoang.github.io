import { LogoMonash } from "~/assets/logo-monash";
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
            <div id="promithic" className="h-fit w-10 mr-2 none-select ">
                <LogoMonash/>
            </div>),
        organization: "Promithic",
        title: "Junior Software Developer - Penetration Tester",
        duration: "July 2024 - Present",
        description: [
            "Constructed a full web stack, with ongoing upgrades and data migration under the supervision of a senior lead. Developed a web platform as the only full-stack developer, ensuring high performance, maintainability, scalability, and reusability. Maintained thorough documentation and comprehensive history throughout the process. Additional details are confidential under an NDA.",
            "Performed penetration testing following the standards outlined in the OWASP Testing Guide. Solved more than 100 PortSwigger labs, progressing towards Burp Suite Certified Practitioner certification."
        ],
    },
];

//****************************************************************************************************
export default function Education()
{
    return (
        <div className="h-full w-full">
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}