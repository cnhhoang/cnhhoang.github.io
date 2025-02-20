import { Link } from "@remix-run/react";
import { Star } from "lucide-react";
import FadeIn from "~/lib/fade-in";
import GradientButton from "~/lib/gradient-button";
import Typewriter from "~/lib/typewriter";

// ====================================================================================================

//****************************************************************************************************
export default function Website()
{
    return (
        <div className="h-full w-full flex flex-col space-y-3">
            <Typewriter text="$ cat cnhhoang.github.io/README" textSetting="text-green-500"/>

            <FadeIn delay={1.75}>
                <div className="space-y-5">
                    <div>
                        This website reflects my journey as a software engineer and penetration tester, serving as an interactive resume and highlighting my achievements, skills, and the technologies I’ve mastered.
                    </div>
                    <div>
                        Whether you’re a potential collaborator, recruiter, or fellow enthusiast, please feel free to reach out via email - I would be happy to connect.
                    </div>

                    <Link to="https://github.com/cnhhoang/cnhhoang.github.io" className="flex items-center justify-center">
                        <GradientButton>
                            Give me a <Star className="ml-2"/>
                        </GradientButton>
                    </Link>
                </div>
            </FadeIn>
        </div>
    );
}