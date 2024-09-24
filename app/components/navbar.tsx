import { NavLink } from "@remix-run/react";

import { LogoCodeforces } from "~/assets/logo-codeforces";
import { LogoGmail } from "~/assets/logo-gmail";
import { LogoGoogleScholar } from "~/assets/logo-googlescholar";
import { LogoLinkedIn } from "~/assets/logo-linkedin";

//====================================================================================================
const profileLinks = [
  {
    "icon": <LogoLinkedIn/>,
    "href": "https://www.linkedin.com/in/hoang-chung-8932a2325/",
  },
  {
    "icon": <LogoCodeforces/>,
    "href": "https://codeforces.com/profile/BlueHya",
  },
  {
    "icon": <LogoGoogleScholar/>,
    "href": "https://scholar.google.com/citations?user=MGOtLrMAAAAJ&hl=en",
  },
  {
    "icon": <LogoGmail/>,
    "href": "mailto:cnhhoang.sec@gmail.com",
  },
];

// --------------------------
const routes = [
  {
    display: "About",
    link: "about"
  },
  {
    display: "Experience",
    link: "work-experience"
  },
  {
    display: "Education",
    link: "education"
  },
  {
    display: "Portfolio",
    link: "portfolio"
  },
];

//****************************************************************************************************
export default function NavBar()
{
  return (
      <div className={`relative sticky top-0 h-12 w-full
                      flex items-center px-5 z-10
                      focus:border-transparent select-none shadow-2xl
                      bg-gradient-to-r from-slate-900 via-slate-900 via-75% to-indigo-900`}
      >
        {/* -------------------------- */}
        <NavLink  
          to="/" 
          className={({ isActive }) =>
            `text-2xl font-serif px-2 py-1 relative transition-colors duration-300
            hover:text-blue-400 active:text-blue-600
            ${isActive ? 'text-blue-500' : 'text-white'}`
          }>
          Hoang Chung
        </NavLink>

        {/* -------------------------- */}
        <div className={`absolute top-1/2 left-1/2 flex
                        transform -translate-x-1/2 -translate-y-1/2 
                        text-white text-xl`}>
          { routes.map((route, index) => (
            <NavLink  
                key={index}
                to={route.link} 
                className={({ isActive, isPending  }) =>
                  `mx-3 px-3 pb-1 relative transition-all duration-300 transform 
                  border-2 border-transparent rounded-full
                  after:absolute after:inset-0 after:border-2 after:border-green-500 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 
                  hover:text-green-400 active:text-green-600
                  ${isActive || isPending? 'text-green-500 border-green-500 after:scale-x-100' : 'text-white border-transparent after:scale-x-0'}
                `}>
                {route.display}
            </NavLink>
          ))}
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