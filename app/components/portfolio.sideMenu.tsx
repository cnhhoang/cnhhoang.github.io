import { NavLink, useLocation } from "@remix-run/react";
import { 
    useEffect, 
    useState,
} from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
} from "~/components/ui/sheet";
import StatusIndicator from "~/lib/status-indicator";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

// ====================================================================================================
export const menuWidth: string = "w-full lg:w-72";
export const wScreenFit: string = "w-[calc(100vw-17rem)]";
const backgroundSetting: string = " bg-gradient-to-b from-slate-900 via-sky-900 to-blue-950 border-zinc-700 border-2 rounded-lg border-emerald-800 ";

const portfolioMenuItems = [  
    {
        title: "Profile",
        link: "profile",
        children: [
            {
                title: "Achievements",
                link: "/portfolio/profile/achievements",
                                                 },
            {
                title: "Skills",
                link: "/portfolio/profile/skills",
            },
        ],
    },
    {
        title: "This Website",
        link: "website",
        children: [
            {
                title: "About",
                link: "/portfolio/website",
            },
            {
                title: "Tech stack",
                link: "/portfolio/website/techstack",
            },
        ],
        status: "active",
    },
    {
        title: "Algorithms Library",
        link: "cp-lib",
        children: [
            {
                title: "C++",
                link: "/portfolio/cp-lib/cpp",
            },
        ],
        status: "queued",
    },
    {
        title: "Web App Pentesting",
        link: "pentest-web",
        children: [
            {
                title: "Dashboard",
                link: "/portfolio/pentest-web",
            },
            {
                title: "Security topics",
                link: "/portfolio/pentest-web/topics",
            },                       
        ],
        status: "active",
    }
];

// ****************************************************************************************************
export default function PortfolioSideMenu()
{
    const [openState, setOpenState] = useState(true);
    const [activeTab, setActiveTab] = useState("");
    const [activeChild, setActiveChild] = useState("");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/portfolio")
            setActiveTab("");
        setOpenState(true);
      }, [location]);

    /// Handle Mobile/Vertical screen
    const MenuClose = ({ className }: { className: string }) => (
        <Button 
            variant="outline" 
            size="icon" 
            className={className}
            onClick={handleClick}
        >
            <div className={`transform ${rotate}`}>
                <ChevronRight className={`text-green-500 animate-bounce-right`} />
            </div>
        </Button>  
    );
    const [rotate, setRotate] = useState("");
    function handleClick()
    {
        setOpenState(!openState);
        setRotate(rotate==="" ? "rotate-180" : "");
    }

    return (
        <Sheet modal={false} open={openState}>  
            <MenuClose className="absolute fixed z-20 right-0 bottom-0 border-green-500 lg:hidden"/>

            <SheetContent 
                side={"right"} 
                className={`h-fit lg:h-[calc(100vh-3rem)] ${menuWidth} z-10 
                            mt-auto lg:mt-12 ${backgroundSetting}
                            ${openState ? 'animate-slideIn' : 'animate-slideOut'}`
                }
            >
                <SheetTitle/><SheetDescription/>
                { portfolioMenuItems.map((entry, index) => (
                    <div key={index} className="mb-5">
                        <NavLink 
                            to={entry.link} 
                            className={({ isActive, isPending  }) =>
                                `px-2.5 py-1.5 relative transition-all transform ease-in-out duration-500
                                border-2 border-transparent rounded-full
                                after:absolute after:inset-0 after:border-2 after:border-green-500 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 
                                hover:text-green-300 hover:font-bold  active:text-green-600 active:font-bold
                                ${isActive || isPending
                                  ? "text-green-500 font-bold border-green-500 after:scale-x-100 after:bg-gradient-to-r after:from-blue-950 after:to-blue-900 after:from-70% after:-z-10"
                                  : "text-white border-transparent after:scale-x-0"}
                                `}          
                            onClick={() => {
                                setActiveTab(entry.title);
                                if (entry.children)
                                    setActiveChild(entry.children[0].title);
                            }}
                        >                    
                            {entry.title}
                            {entry.status && 
                                <span className="absolute top-1/2 -translate-y-1/2 left-1 -translate-x-6">
                                    <StatusIndicator status={entry.status} size={"3"}/>
                                </span>
                            }
                        </NavLink>

                        {activeTab===entry.title && entry.children && (
                            <div className="ml-4 mt-2">
                                {entry.children.map((child, childIndex) => (
                                <NavLink
                                    key={childIndex}
                                    to={child.link}
                                    className={`block px-2 py-1 transition-colors duration-300
                                                hover:text-emerald-200 active:text-emerald-400
                                                ${activeChild===child.title 
                                                ? "text-emerald-400 before:border-2 before:rounded-full before:border-emerald-400 before:mr-1" 
                                                : "text-gray-300"}
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

                {/* Status legend */}
                <div className="absolute top-3 lg:top-auto lg:bottom-3 right-3 text-sm text-gray-300">
                    {[
                        {
                            status: "active",
                            description: "In Progress",
                        },
                        {
                            status: "queued",
                            description: "To Be Updated",
                        },
                        {
                            status: "pending",
                            description: "Pending",
                        },
                    ].map((entry, index) => (
                        <div className="flex" key={index}>
                            <div className="flex items-center mr-1">
                                <StatusIndicator status={entry.status} size="3"/>
                            </div>
                            : {entry.description}
                        </div>                        
                    ))}
                </div>
            </SheetContent>
        </Sheet>    
    );
}