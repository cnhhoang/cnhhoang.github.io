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
                <div className="space-y-5 flex">
                    Select an option from the side menu on the right to navigate.
                    <StepForward className="ml-4 animate-bounce-right"/>    
                </div>
            </FadeIn>
        </div>
    );
}