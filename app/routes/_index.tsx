import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import LandingPage from "~/components/landing-page";
import Footer from "~/components/footer";
// ====================================================================================================
export const meta: MetaFunction = () => [{ title: "Hoang Chung" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className={`relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center
                      bg-gradient-to-b from-sky-950 via-cyan-900 to-blue-950`
    }>
      <LandingPage/>
      <Footer/>
    </main>
  );
}
