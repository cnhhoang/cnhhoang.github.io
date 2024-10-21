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
                sm:bg-gray-900 sm:rounded-md sm:border sm:border-gray-700 ${className}`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Terminal header */}
      <div className="z-10 flex flex-col">
        <div className="hidden sm:flex absolute bg-gray-900 w-full space-x-2 pb-2 mb-2 border-b border-gray-700">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="sm:hidden absolute self-center w-1/2 h-6 bg-black rounded-b-full top-0">
          <div className="w-full "/>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="overflow-auto z-0 mt-10 text-slate-400">
        {children}
      </div>
    </ScrollArea>
  );
};

export default Terminal;
