import { useState } from 'react';

import Typewriter from '~/lib/typewriter';

//====================================================================================================

//====================================================================================================
export default function Index() {
  const [active, setActive] = useState(0);
  const careers = [
      {
        text: "programmer",
        setting: "text-4xl text-green-600"
      },
      {
        text: "software developer",
        setting: "text-4xl text-sky-600"
      },
      {
        text: "penetration tester",
        setting: "text-4xl text-red-600"
      },
      {
        text: "researcher",
        setting: "text-4xl text-purple-500"
      },
  ];

//****************************************************************************************************  
  return (
    // <div className={`min-h-screen bg-gradient-to-b from-sky-950 via-cyan-900 to-blue-950`}>
      <div className="h-full w-full flex flex-col justify-center items-center focus:border-transparent select-none">
        <div className = "grid grid-rows-2">
            <div className="flex justify-center items-center">
                <Typewriter text="Unlocking potential as a " textSetting="text-4xl text-white" id={0} nextId={1} setActive={setActive} active={active} />
            </div>
            <div className="flex justify-center items-center">
                {
                    careers.map((career, index) => (
                        <Typewriter key={index} text={career.text} textSetting={career.setting} erase={true} id={index+1} nextId={index+1===careers.length ? 1 : index+2} setActive={setActive} active={active} />
                    ))
                }
            </div>
        </div>
    </div>
  );
}
