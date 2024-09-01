import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import LandingPage from "~/components/landing-page";
import WorkExperience from "~/components/work-experience";
import Footer from "~/components/footer";
// ====================================================================================================
export const meta: MetaFunction = () => [{ title: "Hoang Chung" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    // <div className={`min-h-screen bg-gradient-to-b from-sky-950 via-cyan-900 to-blue-950`}>
    <div className={`min-h-screen bg-gradient-to-b from-slate-900 to-blue-800`}>
      <LandingPage/>
      <WorkExperience/>
      <Footer/>
    </div>
  );
}
