import { useState } from 'react';

import Typewriter from '~/lib/typewriter';

//====================================================================================================
const careers = [
  {
    text: "programmer",
    setting: "text-4xl text-emerald-500"
  },
  {
    text: "software developer",
    setting: "text-4xl text-sky-500"
  },
  {
    text: "penetration tester",
    setting: "text-4xl text-red-500"
  },
  {
    text: "researcher",
    setting: "text-4xl text-violet-500"
  },
];

//****************************************************************************************************  
export default function Index() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-[calc(100vh-3rem)] w-full flex flex-col justify-center items-center focus:border-transparent select-none">
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
