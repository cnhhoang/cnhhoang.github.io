import type { MetaFunction } from "@remix-run/node";
// ====================================================================================================
export const meta: MetaFunction = () => [{ title: "Hoang Chung - About" }];

//****************************************************************************************************
export default function About()
{
    return (
        <div>
            Under development!
        </div>
    );
}