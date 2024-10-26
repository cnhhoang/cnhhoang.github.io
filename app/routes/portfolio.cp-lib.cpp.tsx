// ====================================================================================================

import { Link } from "@remix-run/react";
import { Star } from "lucide-react";
import FadeIn from "~/lib/fade-in";

//****************************************************************************************************
export default function CPLibCPP()
{
    return (
        <FadeIn duration={0.5}>
            <div className="h-full w-full flex flex-col items-center gap-5 justify-between">
                <div>
                    This project is an Algorithm and Data Structure Library optimized for competitive programming, written in C/C++, with a focus on optimal complexity. 
                </div>
                <div>
                    The library covers various topics from graph theory algorithms (Dijkstra, Kruskal, Bellman-Ford, Edmonds-Karp, Prim) to advanced data structures (2-3 Tree, Binary Indexed Tree, Segment Tree, RMQ).
                    Each algorithms are submitted to a variety of Online Judges (SPOJ, Codeforces, etc.) to ensure correctness and performance.
                </div>
                <Link to="https://github.com/cnhhoang/Data-Structures-and-Algorithms">
                    <div className={`bg-gradient-to-b from-sky-800 to-cyan-500  text-white
                                    rounded-md sm:rounded-sm hover:rounded-full hover:font-bold
                                    flex items-center justify-center px-3 py-1 
                    `}>
                        Give it a <Star className="ml-2"/>
                    </div>
                </Link>
            </div>
        </FadeIn>
    );
}