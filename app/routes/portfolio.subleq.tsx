// ====================================================================================================
import { Link } from "@remix-run/react";
import { Star } from "lucide-react";
import GradientButton from "~/lib/gradient-button";

//****************************************************************************************************
export default function Subleq()
{
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div>
                SUBLEQ (Subtract and Branch if Less Than or Equal to Zero) is a special assembly language - a One Instruction Set Computer (OISC), meaning it uses only one instruction to perform all operations. The SUBLEQ instruction subtracts the contents of one memory location from another and branches to a specified address if the result is negative. 
            </div>
            <div>
                Despite its simplicity, SUBLEQ can be used to implement complex programs, including conditional structures like "if-then-else" and loops such as "for" and "while." This project demonstrates how minimalist computing concepts can still achieve practical programming logic.
            </div>
                
            <Link to="https://github.com/cnhhoang/SUBLEQ" className="mt-2">
                <GradientButton>
                    Give it a <Star className="ml-2"/>
                </GradientButton>
            </Link>
        </div>
    );
}