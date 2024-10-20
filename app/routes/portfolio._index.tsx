import Typewriter from "~/lib/typewriter";
import FadeIn from "~/lib/fade-in";
import { StepForward } from "lucide-react";

// ====================================================================================================
export const wScreenFit: string = "w-[calc(100vw-17rem)]";

// ****************************************************************************************************
export default function PortfolioIndex()
{
    return (
        <div className="h-full w-full flex flex-col space-y-3">
            <Typewriter text="$ man portfolio" textSetting="text-green-500"/>

            <FadeIn delay={1.25}>
                <div className="hidden sm:flex">
                    <div className="space-y-5 flex">
                        Select an option from the menu on the right to navigate.
                    </div>
                </div>
                <div className="sm:hidden">
                    Select an option from the bottom menu to navigate.
                </div>
            </FadeIn>
        </div>
    );
}