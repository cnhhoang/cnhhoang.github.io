import { NavLink } from "@remix-run/react";

import { LogoCodeforces, LogoGmail, LogoGoogleScholar, LogoLinkedIn } from "~/assets/logos";

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
                      bg-gradient-to-r from-slate-900 via-slate-950 via-75% to-violet-900`}
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
                className={({ isActive, isPending }) =>
                  `text-lg mx-5 py-1.5 px-1 relative transition-all transform duration-300 
                  hover:scale-110 hover:text-sky-300 active:text-sky-600
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-sky-500 after:w-full after:origin-left after:transition-transform after:duration-500 
                  ${isActive || isPending 
                  ? 'font-bold text-sky-500 after:scale-x-100 hover:text-sky-400' 
                  : 'text-white after:scale-x-0'}`
                }>
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