import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================
const achievements = [
    "Monash University, Master of Cybersecurity degree awarded with distinction.",
    "Master's Thesis accepted and presented as a full paper at ProvSec2024.",
    "Runner-up in MCPC 2022, Monash's largest Competitive Programming Contest.",
    "Commendation letter for excellent academic performance.",
    "HCMUS, Bachelor of Computer Science, graduated with First-class honours.",
    "Research paper awarded with Best paper award in SoICT2019.",
    "Research paper accepted and presented as a full paper at FDSE2019.",
    "3rd prize in Collegiate Information Security (CTF), South Vietnam, 2019.",
    "2nd prize in Vietnam National Collegiate Olympiad in Informatics, 2018.",
    "Ranked 48th (148 teams) in ACM-ICPC Asia HCMC Regional Contest, 2017.",
    "2nd prize (ranked 15/188) in ACM-ICPC Vietnam National Contest, 2017.",
    "3rd prize in Vietnam National Collegiate Olympiad in Informatics, 2016.",
    "Scholarships for excellent academic performance from HCMUS.",
    "Valedictorian of Ho Chi Minh City's Olympiad in Informatics, 2016.",
    "Vietnam National Olympiad in Informatics, 2016.",
    "Gold medal in the April 30th Olympiad in Informatics, 2015.",
    "Gold medal in the April 30th Olympiad in Informatics, 2014.",
    "Scholarships for excellent academic performance from HSG.",

];
//****************************************************************************************************
export default function Achievements()
{
    return (
        <div className="h-full w-full flex flex-col space-y-3">
            <Typewriter text="$ ls achievements/" textSetting="text-green-500"/>

            <FadeIn delay={1}>
                {
                    achievements.map((entry, index) => (
                        <li key={index} className="text-lg">
                            {entry}
                        </li>
                    ))
                }
            </FadeIn>
        </div>
    );
}