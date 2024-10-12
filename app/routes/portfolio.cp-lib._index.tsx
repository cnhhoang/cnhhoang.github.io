import { redirect } from "@remix-run/react";

// ====================================================================================================
export const clientLoader = async () => {
    return redirect("/portfolio/cp-lib/cpp");
};

//****************************************************************************************************
export default function CPLib()
{
    return (
        <div className="h-full w-full flex items-center justify-center">
            CPLib: Under development!
        </div>
    );
}