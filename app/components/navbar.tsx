import { NavLink } from "@remix-run/react";

import { LogoCodeforces } from "~/assets/logo-codeforces";
import { LogoLinkedIn } from "~/assets/logo-linkedin";

export default function NavBar()
{
const profileLinks = [
  {
    "icon": <LogoCodeforces/>,
    "href": "https://codeforces.com/profile/BlueHya",
  },
  {
    "icon": <LogoLinkedIn/>,
    "href": "https://www.linkedin.com/in/hoang-chung-8932a2325/",
  },
];
const routes = [
  {
    display: "Home",
    link: "/"
  },
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

return (
    <div className={`relative sticky top-0 h-12 w-full 
                    flex items-center px-5
                    focus:border-transparent select-none
                    bg-gradient-to-r from-slate-900 via-slate-900 via-75% to-indigo-900`}
    >
      {/* -------------------------- */}
      <NavLink  
        to="/" 
        className={({ isActive }) =>
          `text-2xl font-serif px-2 py-1 relative transition-colors duration-300
          ${isActive ? 'text-blue-500' : 'text-white'}`
        }>
        Hoang Chung
      </NavLink>
   

      {/* -------------------------- */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl`}>
        { routes.map((route, index) => (
          <NavLink  
              key={index}
              to={route.link} 
              className={({ isActive }) =>
                `mx-3 px-3 pb-1 relative transition-all duration-300 transform 
                border-2 border-transparent rounded-full
                after:absolute after:inset-0 after:border-2 after:border-green-500 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 
                hover:text-green-500
                ${isActive ? 'text-green-500 border-green-500 after:scale-x-100' : 'text-white border-transparent after:scale-x-0'}
                `
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