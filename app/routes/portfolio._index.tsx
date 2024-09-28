import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================

// ****************************************************************************************************
export default function PortfolioIndex()
{
    return (
        <div className="p-10 space-y-6
                        flex flex-col justify-center"
        >
            <Typewriter text="$ man cnhhoang.github.io" textSetting="text-green-500"/>

            <FadeIn delay={1.25}>
                <div className="text-xl text-gray-400 space-y-5">
                    <div>
                        This website reflects my journey as a software engineer and penetration tester, serving as an interactive resume and highlighting my achievements, skills, and the technologies I’ve mastered.
                    </div>
                    <div>
                        Whether you’re a potential collaborator, recruiter, or fellow enthusiast, please feel free to reach out via email - I would be happy to connect.
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}