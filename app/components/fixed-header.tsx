import {
    Sheet,
    SheetContent,
  } from "~/components/ui/sheet";
import { Link } from "@remix-run/react";
import CodeforcesLogo from "~/assets/codeforces-logo";
import LinkedInLogo from "~/assets/linkedn-logo";

export default function FixedHeader()
{
  const profileLinks = [
    {
      "icon": <CodeforcesLogo/>,
      "href": "https://codeforces.com/profile/BlueHya",
    },
    {
      "icon": <LinkedInLogo/>,
      "href": "https://www.linkedin.com/in/hoang-chung-8932a2325/",
    },
  ];

  return (
    <Sheet open={true} modal={false}>
      <SheetContent side={"top"}  
                    className = {`h-10 w-full flex items-center 
                                  focus:border-transparent select-none	
                                  bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-400`}
      >
        <div className="text-2xl text-white font-serif	">
          Hoang Chung
        </div>
        {/* -------------------------- */}
        <div className="ml-auto flex items-center space-x-3">
          { profileLinks.map((profile, key) => (
              <a  href={profile.href} 
                  className={`h-10 w-10 flex items-center justify-center
                              grayscale transition hover:grayscale-0 focus:grayscale-0`}>
                { profile.icon }
              </a>
            ))
          }
        </div>
      </SheetContent>
    </Sheet>
  );
}