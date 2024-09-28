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
        textSettings: "text-white font-extralight",
        category: "UI Component Library",
        logo: <LogoSHADCN/>,
    },
];

//****************************************************************************************************
export default function Website()
{
    return (
        <div className="h-full w-full flex flex-col p-10 space-y-3">
            <div className="flex flex-cols text-green-500">
                <Typewriter text="$ ps aux | grep technology" speed={40}/>
            </div>

            <div className="flex flex-col items-center space-y-3">
                {techStack.map((entry, index) => (
                    <FadeIn key={index} delay={1+index/3} asChild>
                        <div className="border rounded-lg border-zinc-800
                                        w-1/2 p-3 bg-gray-950
                                        flex items-center"
                        >
                            <div className="text-sm text-gray-500">
                                {entry.category}
                            </div>

                            <div className="flex items-center ml-auto space-x-3">
                                <div className={`text-xl ${entry.textSettings}`}>
                                    {entry.tech}
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center">
                                    {entry.logo}
                                </div>

                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}