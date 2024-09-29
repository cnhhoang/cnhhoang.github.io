import LogoNodeJS from "~/assets/images/logo-nodejs.png";
import { LogoReact, LogoRemix, LogoSHADCN, LogoTailwindCSS, LogoTypeScript } from "~/assets/logos";
import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const techStack = [
    {
        tech: "TypeScript",
        textSettings: "text-sky-600 font-bold",
        category: "Programming Language",
        logo: <LogoTypeScript/>,
    },
    {
        tech: "Node.js",
        textSettings: "font-bold bg-gradient-to-r from-green-600 via-green-300 to-green-700 bg-clip-text text-transparent",
        category: "Runtime Environment",
        logo: <img src={LogoNodeJS} className="transform scale-125"/>,
    },
    {
        tech: "Remix",
        textSettings: "text-blue-200 drop-shadow-remix-glow font-bold",
        category: "Full-stack Framework",
        logo: <LogoRemix/>,
    },
    {
        tech: "React",
        textSettings: "text-cyan-300 font-light",
        category: "Frontend Library",
        logo: <LogoReact/>,
    },
    {
        tech: "TailwindCSS",
        textSettings: "text-sky-400 font-bold italic",
        category: "CSS Framework",
        logo: <LogoTailwindCSS/>,
    },
    {
        tech: "shadcn/ui",
        textSettings: "text-white font-thin italic",
        category: "UI Component Library",
        logo: <LogoSHADCN/>,
    },
];

//****************************************************************************************************
export default function Website()
{
    return (
        <div className="h-full w-full flex flex-col space-y-3">
            <Typewriter text="$ man cnhhoang.github.io" textSetting="text-green-500"/>

            <FadeIn delay={1.25}>
                <div className="space-y-5">
                    <div>
                        This website reflects my journey as a software engineer and penetration tester, serving as an interactive resume and highlighting my achievements, skills, and the technologies I’ve mastered.
                    </div>
                    <div>
                        Whether you’re a potential collaborator, recruiter, or fellow enthusiast, please feel free to reach out via email - I would be happy to connect.
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}