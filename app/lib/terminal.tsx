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
      className={`relative bg-gray-900 rounded-md text-white p-4 shadow-lg border border-gray-700 ${className}`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Terminal header */}
      <div className="absolute z-10 bg-gray-900 w-full flex space-x-2 pb-2 mb-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      {/* Terminal content */}
      <div className="overflow-auto z-0 mt-10 text-slate-400">
        {children}
      </div>
    </ScrollArea>
  );
};

export default Terminal;
