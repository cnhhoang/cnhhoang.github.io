import { redirect } from "@remix-run/react";

// ====================================================================================================
export const clientLoader = async () => {
    return redirect("/portfolio/profile/achievements");
};

//****************************************************************************************************

export default function Profile()
{    
    return (
        <div className="h-full w-full flex items-center justify-center">
            Profile: Under development!
        </div>
    );
}