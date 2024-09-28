import React from "react";

// ====================================================================================================
interface TerminalProps {
    children: React.ReactNode; // To render any content inside <Terminal> ... </Terminal>
    className?: string;        // Accepts custom class names
}
    
// ****************************************************************************************************
const Terminal: React.FC<TerminalProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-gray-900 rounded-md text-white p-4 shadow-lg border border-gray-700 ${className}`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Terminal header */}
      <div className="flex space-x-2 pb-2 mb-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {/* Terminal content */}
      <div className="overflow-auto">{children}</div>
    </div>
  );
};

export default Terminal;
