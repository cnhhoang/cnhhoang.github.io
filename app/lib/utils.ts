import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// ====================================================================================================
export const hScreenFit: string = "h-[calc(100vh-3rem)] ";
export const backgroundColor: string = "bg-gradient-to-b from-slate-900 to-sky-800";
export const terminalSize: string = "h-[calc(100vh-7rem)] w-11/12 lg:w-[calc(100vw-30rem)]";

// ----------------------------------------------------------------------------------------------------
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ----------------------------------------------------------------------------------------------------
