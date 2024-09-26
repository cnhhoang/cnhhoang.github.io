import { Link, Outlet } from "@remix-run/react";
import { 
    useEffect, 
    useState,
} from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "~/components/ui/sheet";

import { backgroundColor } from "~/root";
import { hScreenFit } from "~/root";

// ====================================================================================================

export const menuWidth: string = "w-68";
export const wScreenFit: string = "w-[calc(100vw-17rem)]"
// ****************************************************************************************************
export default function Portfolio()
{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true); // Trigger the slide-in effect upon component mount

    }, []);

    return (
        <div>
            <Sheet modal={false} open={true}>
            <SheetContent side={"right"} className={`${menuWidth} mt-12 ${isVisible ? 'animate-slideIn' : ''} ${backgroundColor} border-0`}>
                <SheetHeader className="mb-8">
                    <SheetTitle>Achievements & Projects</SheetTitle>
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

            <div className={`${hScreenFit} ${wScreenFit} border-green-800 border rounded-lg`}>
                <Outlet/>
            </div>
        </div>
    );
}