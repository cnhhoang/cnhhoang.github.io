import LogoNodeJS from "~/assets/images/logo-nodejs.png";
import { LogoGithub, LogoGithubAction, LogoMongoDB, LogoReact, LogoRemix, LogoSHADCN, LogoTailwindCSS, LogoTypeScript, LogoVercel } from "~/assets/logos";

import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const techStack = [
    // Frontend
    {
        tech: "TailwindCSS",
        textSettings: "text-sky-400 font-bold italic",
        category: "CSS Framework",
        logo: <LogoTailwindCSS />,
    },
    {
        tech: "shadcn/ui",
        textSettings: "font-sans text-gray-400 font-light italic",
        category: "UI Component Library",
        logo: <LogoSHADCN />,
    },
    {
        tech: "React",
        textSettings: "text-cyan-300 font-light",
        category: "Frontend Library",
        logo: <LogoReact />,
    },
    // Application Logic Layer
    {
        tech: "TypeScript",
        textSettings: "text-sky-600 font-bold",
        category: "Programming Language",
        logo: <LogoTypeScript />,
    },
    {
        tech: "Remix",
        textSettings: "text-blue-200 drop-shadow-remix-glow font-bold",
        category: "Full-stack Framework",
        logo: <LogoRemix />,
    },
    {
        tech: "Node.js",
        textSettings: "font-bold bg-gradient-to-r from-green-600 via-green-300 to-green-700 bg-clip-text text-transparent",
        category: "Runtime Environment",
        logo: <img src={LogoNodeJS} className="transform scale-125" />,
    },
    // Backend
    {
        tech: "Vercel",
        textSettings: "font-sans font-black text-white",
        category: "API Hosting Platform",
        logo: <LogoVercel />,
    },  
    {
        tech: "MongoDB",
        textSettings: "font-serif text-green-400",
        category: "Database",
        logo: <LogoMongoDB />,
    },
    // Deployment and Hosting
    {
        tech: "GitHub",
        textSettings: "text-gray-600 opacity-80",
        category: "Version Control",
        logo: <LogoGithub />,
    },
    {
        // tech: "GitHub Actions",
        tech: (
        <span>
            GitHub Acti<span className="font-mono text-2xl text-blue-300">o</span>n
        </span>
        ),
        textSettings: "font-sans text-blue-550",
        category: "CI/CD Tool",
        logo: <LogoGithubAction />,
    },
  ];

//****************************************************************************************************
export default function TechStack()
{
    return (
        <div className="h-full w-full flex flex-col space-y-3">
            <div className="flex flex-cols text-green-500">
                <Typewriter text="$ ps aux | grep technology" speed={40}/>
            </div>

            <div className="flex flex-col items-center space-y-3">
                {techStack.map((entry, index) => (
                    <FadeIn key={index} delay={1+index/3} asChild>
                        <div className="border rounded-lg border-zinc-800
                                        w-11/12 max-w-96 p-3 bg-gray-950
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