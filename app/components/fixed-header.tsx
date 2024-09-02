import { NavLink } from "@remix-run/react";
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
const routes = [
  {
    display: "Home",
    link: "/"
  },
  {
    display: "Experience",
    link: "work-experience"
  },
  {
    display: "Education",
    link: "education"
  },
];

return (
    <div className={`relative sticky top-0 h-12 w-full 
                    flex items-center px-5
                    focus:border-transparent select-none
                    bg-gradient-to-r from-slate-900 via-slate-900 to-blue-800 `}
    >
      {/* -------------------------- */}
      <div className="text-2xl text-white font-serif	">
        Hoang Chung
      </div>
      {/* -------------------------- */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                        text-white text-xl`}>
        { routes.map((route, index) => (
          <NavLink  key={index}
                    to={route.link} 
                    className="mx-3 text-white"
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "white",
                      };
                    }}>
            {route.display}
          </NavLink>
        ))
        }
      </div>
      {/* -------------------------- */}
      <div className="ml-auto flex items-center space-x-3">
        { profileLinks.map((profile, key) => (
            <a  href={profile.href}  key={key}
                className={`h-10 w-10 flex items-center justify-center
                            grayscale transition hover:grayscale-0 focus:grayscale-0`}>
              { profile.icon }
            </a>
          ))
        }
      </div>
    </div>
);
}