import LogoSelab from "~/assets/images/logo-selab.png";
import LogoCloudgo from "~/assets/images/logo-cloudgo.png";
import LogoAnz from "~/assets/images/logo-anz.png";

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
            <div id="anz" className="w-1/2 h-fit mr-2 none-select flex justify-center items-center none-select">
                <img src={LogoAnz} />
            </div>
        ),
        organization: "ANZ",
        title: "Software Engineer",
        duration: "Oct 2025 - Now",
        description: [
            "Consolidated and optimized GitHub Actions CI/CD pipelines using concurrency grouping, conditional job triggering, and reusable containerized actions, and implemented OIDC-based zero-trust authentication, improving maintainability and security, and decreasing execution time by approximately 30%.",
            "Collaborated with teams to safely migrate active microservices from GKE (Kubernetes) to Cloud Run with zero downtime.",
            "Developed and deployed a Temporal workflow in Go to automate task sequencing for 5,000,000 monthly active users.",
            "Applied AI-powered development and knowledge tools, including Claude Code, Cursor, and Rovo MCP Server, to accelerate coding, improve documentation discovery, and enhance overall developer productivity.",
            "Technologies: Go, GitHub Actions, Docker, Go Testing, Terraform, GCP, Temporal, Splunk."
        ],
    },      
    {
        logo: () => (
            <div id="cloudgo" className="w-2/3 h-fit mr-2 none-select flex justify-center items-center none-select">
                <img src={LogoCloudgo} />
            </div>
        ),
        organization: "CloudGO",
        title: "Fullstack Software Engineer",
        duration: "Dec 2024 – Oct 2025",
        description: [
            "Developed, customized, and deployed a CRM web application using the LAMP (Linux, Apache, MySQL, PHP) stack and the Vtiger framework to support core operations and meet the strategic needs of a 1,000-employee organization, ensuring reliable performance for hundreds of frequent users.",
            "Designed and implemented automated data synchronization between systems using a self-built, SQL-backed data processing queue to store and process API data. Identified and resolved a critical race condition during development by implementing minimal row-level locking and retry logic, ensuring data integrity while processing over 1,000,000 records.",
            "Optimized SQL database performance by using table sharding, Redis caching, temporary tables, batch inserts, and prepared statements, achieving up to 70% faster query performance.",
            "Technologies: PHP, MySQL, JavaScript, HTML, CSS, Redis, Vtiger."
        ],
    },    
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
    }
];

//****************************************************************************************************
export default function WorkExperience()
{   
    return (
        <div className={`relative w-full p-4 text-white`}>
            <Typewriter text="$history | grep experience" textSetting="text-xl text-green-500"/>

            <FadeIn delay={1.5}>
                <div className="h-full w-full flex items-center justify-center">
                    <Carousel className="w-full max-w-xl h-full flex flex-col justify-center items-center">
                        <CarouselContent className="h-full">
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
                                            ● {description}
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