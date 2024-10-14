import { useContext, useEffect } from "react";
import { useTerminal } from "./portfolio";

// ====================================================================================================
const skills = [
    {
        category: "Programming Languages",
        entries: [
            "C", 
            "C++",
            "Python",
            "Java",
            "JavaScript", 
            "TypeScript",
            "Bash",
        ],
    },
    {
        category: "Web Development",
        categorySetting: "text-emerald-500",
        entries: [
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "TailwindCSS",
            "Remix",
            "React",
            "NodeJS",
            "Github",
            "Github Action",
            "Prisma",
            "MongoDB",
            "PostGreSQL",
            "MySQL",
        ],
    },
    {
        category: "Cybersecurity",
        categorySetting: "w-fit font-bold bg-gradient-to-r from-red-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent",
        entries: [
            "Burpsuite",
            "JWT.io",
            "FTK Imager",
            "John Ripper",
        ],
    },
];
//****************************************************************************************************
export default function Skills()
{
    const setTerminalDisabled = useTerminal();
    useEffect(() => {
        setTerminalDisabled(true);
        return () => { setTerminalDisabled(false); };
      }, [setTerminalDisabled]);

    return (
        <div className="flex flex-col items-center space-y-5">
        {
            skills.map((entry, index) => (
                <div key={index} 
                    className={`w-11/12 p-5 bg-zinc-950 
                                border-2 border-slate-500 rounded-lg`}
                >
                    <h1 className={`text-2xl pb-5 ${entry.categorySetting ? entry.categorySetting : ""}`}
                    >
                        {entry.category}
                    </h1>

                    <div className="text-lg flex flex-wrap gap-3">
                        { entry.entries.map((skill, index) => (
                            <div key={index} className="bg-gray-900 px-1 border border-gray-800 rounded-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))
        }
        </div>
    );
}