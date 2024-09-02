import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import FixedHeader from "~/components/fixed-header";
import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import NavBar from "./components/navbar";

// ====================================================================================================
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

//****************************************************************************************************
export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="min-h-screen h-screen">
        <NavBar/>
        <div className="min-h-[calc(100vh-3rem)] h-[calc(100vh-3rem)] bg-gradient-to-b from-slate-900 to-blue-800">
          <Outlet />
        </div>
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
