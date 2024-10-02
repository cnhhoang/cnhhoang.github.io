import { NavLink } from "@remix-run/react";
import { 
    useEffect, 
    useState,
} from "react";

import { backgroundColor } from "~/lib/utils";

import {
    Sheet,
    SheetContent,
} from "~/components/ui/sheet";

// ====================================================================================================
export const menuWidth: string = "w-72";
export const wScreenFit: string = "w-[calc(100vw-17rem)]";

// ****************************************************************************************************
export default function PortfolioSideMenu()
{
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("");
    const [activeChild, setActiveChild] = useState("");
    useEffect(() => {
        setIsVisible(true);
      }, []);

    return (
        <Sheet modal={false} open={true}>
            <SheetContent side={"right"} className={`${menuWidth} mt-12 ${isVisible ? 'animate-slideIn' : ''} ${backgroundColor} border-0`}>
                {[  {
                        title: "This Website",
                        link: "website",
                        children: [
                            {
                                title: "About",
                                link: "/portfolio/website"
                            },
                            {
                                title: "Tech stack",
                                link: "/portfolio/website/techstack"
                            },
                        ]
                    },
                    {
                        title: "Achievements",
                        link: "achievements",
                    },
                    {
                        title: "Web App Pentesting",
                        link: "pentest-web",
                        children: [
                            {
                                title: "Dashboard",
                                link: "/portfolio/pentest-web"
                            },
                            {
                                title: "Security topics",
                                link: "/portfolio/pentest-web/topics"
                            },                       
                        ]
                    }
                ].map((entry, index) => (
                    <div key={index} className=" mt-5">
                        <NavLink 
                            to={entry.link} 
                            className={({ isActive, isPending }) =>
                                `text-lg mx-3 pr-1.5 py-1.5 relative transition-all duration-300 transform 
                                 hover:text-sky-300 hover:font-bold active:text-sky-600
                                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-sky-500 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 
                                 ${isActive || isPending ? 'font-bold text-sky-500 after:scale-x-100' : 'text-white after:scale-x-0'}`
                            }              
                            onClick={() => {
                                setActiveTab(entry.title);
                                if (entry.children)
                                    setActiveChild(entry.children[0].title);
                            }}
                        >                    
                            {entry.title}
                        </NavLink>

                        {activeTab===entry.title && entry.children && (
                            <div className="ml-4 mt-2">
                                {entry.children.map((child, childIndex) => (
                                <NavLink
                                    key={childIndex}
                                    to={child.link}
                                    className={({ isActive }) =>
                                    `block px-2 py-1 transition-colors duration-300
                                    hover:text-cyan-300 active:text-cyan-400
                                    ${activeChild===child.title ? "text-cyan-300" : "text-gray-300"}
                                    `}
                                    onClick={() => setActiveChild(child.title)}
                                >
                                    {child.title}
                                </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </SheetContent>
        </Sheet>        
    );
}