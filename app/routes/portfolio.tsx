import { Outlet } from "@remix-run/react";
import PortfolioSideMenu from "~/components/portfolio.sideMenu";

import Terminal from "~/lib/terminal";
import { hScreenFit, terminalSize } from "~/lib/utils";

// ====================================================================================================
export const wScreenFit: string = "w-[calc(100vw-17rem)]";

// ****************************************************************************************************
export default function Portfolio()
{
    return (
        <>
            <PortfolioSideMenu/>
            
            <div className={`${hScreenFit} ${wScreenFit} 
                            flex items-center justify-center`}
            >
                <Terminal className={`${terminalSize} text-xl`}>
                    <Outlet/>
                </Terminal>
            </div>
        </>
    );
}