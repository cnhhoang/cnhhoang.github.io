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
                            className={({ isActive, isPending  }) =>
                                `px-2.5 py-1.5 relative transition-all transform ease-in-out duration-500
                                border-2 border-transparent rounded-full
                                after:absolute after:inset-0 after:border-2 after:border-green-500 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 
                                hover:text-green-300 hover:font-bold  active:text-green-600 active:font-bold
                                ${isActive || isPending? 'text-green-500 font-bold border-green-500 after:scale-x-100' : 'text-white border-transparent after:scale-x-0'}
                            `}          
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
                                    hover:text-emerald-400 active:text-emerald-500
                                    ${activeChild===child.title ? "text-emerald-400" : "text-gray-300"}
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