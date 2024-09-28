import { Link, Outlet } from "@remix-run/react";
import { 
    useEffect, 
    useState,
} from "react";
import { ScrollArea } from "~/components/ui/scroll-area";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "~/components/ui/sheet";

import { backgroundColor } from "~/root";
import { hScreenFit } from "~/root";

// ====================================================================================================
export const menuWidth: string = "w-68";
export const wScreenFit: string = "w-[calc(100vw-17rem)]";

// ****************************************************************************************************
export default function Portfolio()
{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true); // Trigger the slide-in effect upon component mount

    }, []);

    return (
        <div className={`${hScreenFit} ${wScreenFit} 
                        flex items-center justify-center`
        }>
            <Sheet modal={false} open={true}>
                <SheetContent side={"right"} className={`${menuWidth} mt-12 ${isVisible ? 'animate-slideIn' : ''} ${backgroundColor} border-0`}>
                    <SheetHeader className="mb-8">
                        <Link to="/portfolio">
                            <SheetTitle>Achievements & Projects</SheetTitle>
                        </Link>
                    </SheetHeader>

                    {[
                        {
                            title: "About this Website",
                            link: "website",
                        },
                        {
                            title: "Achievements",
                            link: "achievements",
                        },
                    ].map((entry, index) => (
                        <Link to={entry.link} key={index}>
                            <div className="mb-5">
                            {entry.title}
                            </div>
                        </Link>
                    ))}
                </SheetContent>
            </Sheet>

            <ScrollArea 
                className={`h-[calc(100vh-7rem)] w-[calc(100vw-20rem)]
                            flex items-center justify-center
                            border rounded-lg
                            border-gray-600 bg-black`}>
                <Outlet/>
            </ScrollArea>
        </div>
    );
}