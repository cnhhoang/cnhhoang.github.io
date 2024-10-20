import { LoaderCircle } from "lucide-react";

// ====================================================================================================
const skeletonColor = " bg-gray-600 ";

//****************************************************************************************************
export default function LoadingPage()
{
    return (
        <div className="h-full w-full flex flex-col justify-center items-center space-y-6">
            <div className={`text-5xl sm:text-6xl text-gray-600 flex items-center justify-center`}>
                <span>Page L</span>
                <LoaderCircle className="h-10 w-8 sm:w-10 relative top-[0.3rem] sm:top-[0.35rem] animate-spin" />
                <span>ading...</span>
            </div>

            <div className="h-28 w-80 sm:w-96 space-y-3">
                <div className="h-fit w-full flex">
                    <div className={`h-12 w-12 rounded-full ${skeletonColor} animate-pulse`} />
                    <div className={`h-12 w-9/12 sm:w-10/12 rounded-lg ml-auto ${skeletonColor} animate-pulse`}/>
                </div>

                <div className={`h-5 w-full rounded-md ${skeletonColor} animate-pulse`}/>
                <div className={`h-5 w-full rounded-md ${skeletonColor} animate-pulse`}/>
            </div>
        </div>
    );
}