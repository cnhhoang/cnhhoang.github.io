import { Outlet } from "@remix-run/react";
import { createContext, useContext, useState } from "react";
import PortfolioSideMenu from "~/components/portfolio.sideMenu";

import Terminal from "~/lib/terminal";
import { hScreenFit, terminalSize } from "~/lib/utils";

// ====================================================================================================
export const wScreenFit: string = "w-[calc(100vw-17rem)]";
const TerminalContext = createContext((status: boolean)=>{});

// ****************************************************************************************************
export default function Portfolio()
{
    const [terminalDisabled, setTerminalDisabled] = useState(false);

    return (
        <>
            <PortfolioSideMenu/>
            
            <div className={`relative min-${hScreenFit} ${wScreenFit} 
                            ${terminalDisabled ? "flex p-5"
                            : "flex items-center justify-center"
                            }`}
            >
                <TerminalContext.Provider value={setTerminalDisabled}>
                    <Terminal className={`${terminalSize} text-xl`} disabled={terminalDisabled}>
                        <Outlet/>
                    </Terminal>
                </TerminalContext.Provider>
            </div>
        </>
    );
}

export const useTerminal = () => useContext(TerminalContext);