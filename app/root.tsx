import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { backgroundColor, hScreenFit } from "./lib/utils";

import NavBar from "./components/navbar";
import LoadingPage from "./components/loading-page";
import InfoLogger from "./components/info-logger";
import { useEffect, useState } from "react";
import { postInfo } from "./lib/log-info";

// ====================================================================================================
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

//****************************************************************************************************
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen h-screen">
        <NavBar/>
        <div className={`min-h-[calc(100vh-3rem)] ${backgroundColor}`}>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// **************************
export default function App() {
  const [data, setData] = useState(null);
  const location = useLocation(); // Hook to get the current location
  const [currentURL, setCurrentURL] = useState<string>(location.pathname);

  /// POST data
  // useEffect(() => {
  //   async function loadData() {
  //     data = postInfo()
  //     .then((data) => console.log(data));
  //   }
  //   if (data === undefined)
  //     loadData();
  // }, []);  

  /// Get URL
  useEffect(() => {
    async function loadData() {
      const currentData = postInfo()
      .then((currentData) => setData(currentData))
      .then((data) => console.log(data));
    }
    if (data === null)
      loadData();

    setCurrentURL(location.pathname);
    console.log("Current URL: ", location.pathname);
  }, [location]); 

  /// Render
  return (
    <div>
      <Outlet />
    </div>
  );
}


// **************************
export function HydrateFallback() {
  return (
    <div className={`text-6xl text-emerald-500 ${hScreenFit} w-full flex items-center justify-center`}>
      <LoadingPage/>
    </div>
  );
}

