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
                {[
                    {
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
                ].map((entry, index) => (
                    <div key={index} className=" mt-5">
                        <NavLink 
                            to={entry.link} 
                            className={({ isActive }) =>
                                `px-2 py-1 relative transition-colors duration-300
                                hover:text-blue-400 active:text-blue-600
                                ${isActive ? 'text-blue-500' : 'text-white'}`}
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
                                    hover:text-blue-300 active:text-blue-500
                                    ${activeChild===child.title ? "text-blue-400" : "text-gray-300"}
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