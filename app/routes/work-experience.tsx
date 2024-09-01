import { LogoPromithic, LogoPromithicWithText } from "~/assets/promithic-logo";
import FlippingLogo from "~/lib/flipping-logo";
// ====================================================================================================

//****************************************************************************************************
export default function WorkExperience()
{

    return (
            <div className="relative w-full p-5">
                <div className="flex jusity-center items-center 
                                text-4xl text-white">
                    Experience
                </div>

                <div className="mt-10 w-full">
                    <div id="logo1" className="h-10 w-10">
                        <LogoPromithic/>
                    </div>
                </div>
                
                <FlippingLogo id="logo1" flipCount={3}/>
            </div>            
    );
    
}