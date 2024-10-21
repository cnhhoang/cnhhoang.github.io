import { Outlet } from "@remix-run/react";
import { createContext, useContext, useState } from "react";
import PortfolioSideMenu from "~/components/portfolio.sideMenu";

import Terminal from "~/lib/terminal";
import { hScreenFit, terminalSize } from "~/lib/utils";

// ====================================================================================================
export const wScreenFit: string = "w-full lg:w-[calc(100vw-17rem)]";
const TerminalContext = createContext((status: boolean)=>{});

// ****************************************************************************************************
export default function Portfolio()
{
    const [terminalDisabled, setTerminalDisabled] = useState(false);

    return (
        <>
            <PortfolioSideMenu/>
            
            <div className={`hidden lg:flex
                            relative min-${hScreenFit} ${wScreenFit} 
                            ${terminalDisabled ? "p-5"
                            : "items-center justify-center"
                            }`}
            >
                <TerminalContext.Provider value={setTerminalDisabled}>
                    <Terminal className={`${terminalSize} text-xl`} disabled={terminalDisabled}>
                        <Outlet/>
                    </Terminal>
                </TerminalContext.Provider>
            </div>

            <div className={`lg:hidden 
                            relative min-${hScreenFit} ${wScreenFit} 
                            p-5
                        `}
            >
                <Outlet/>
            </div>            
        </>
    );
}

export const useTerminal = () => useContext(TerminalContext);