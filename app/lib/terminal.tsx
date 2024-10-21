import React from "react";

import { ScrollArea } from "~/components/ui/scroll-area";

// ====================================================================================================
interface TerminalProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;    
}
    
// ****************************************************************************************************
const Terminal: React.FC<TerminalProps> = ({ children, className = "", disabled = false }) => {
  if (disabled)
    return (
      <>
        {children}
      </>
    );

  return (
    <ScrollArea
      className={`relative text-white p-4 shadow-lg 
                bg-gray-800 rounded-2xl  border-8 border-b-24 border-black
                lg:bg-gray-900 lg:rounded-md lg:border lg:border-gray-700 ${className}`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Terminal header */}
      <div className="flex flex-col">
        <div className="hidden lg:flex absolute z-10 bg-gray-900 w-full space-x-2 pb-2 mb-2 border-b border-gray-700">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="lg:hidden absolute z-10 self-center w-1/2 h-6 bg-black rounded-b-full top-0"/>
      </div>
      
      {/* Terminal content */}
      <div className="overflow-auto z-0 p-2 mt-5 lg:mt-8 text-slate-400">
        {children}
      </div>
    </ScrollArea>
  );
};

export default Terminal;
