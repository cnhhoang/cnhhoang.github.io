import { LoaderCircle } from "lucide-react";

// ====================================================================================================
const skeletonColor = " bg-emerald-600 ";

//****************************************************************************************************
export default function LoadingPage()
{
    return (
        <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
            <div className={`text-6xl text-emerald-500 flex items-center justify-center`}>
                <span>Page L</span>
                <LoaderCircle className="h-10 w-10 relative top-[0.3rem] animate-spin" />
                <span>ading...</span>
            </div>

            <div className="h-28 w-96 space-y-3">
                <div className="h-fit w-full flex">
                    <div className={`h-12 w-12 rounded-full ${skeletonColor} animate-pulse`} />
                    <div className={`h-12 w-80 rounded-lg ml-auto ${skeletonColor} animate-pulse`}/>
                </div>

                <div className={`h-5 w-full rounded-md ${skeletonColor} animate-pulse`}/>
                <div className={`h-5 w-full rounded-md ${skeletonColor} animate-pulse`}/>

            </div>
        </div>
    );
}