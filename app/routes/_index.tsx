import { useState } from 'react';

import Typewriter from '~/lib/typewriter';

//====================================================================================================
const typeWriterSize = "text-4xl sm:text-5xl md:text-6xl ";
const careers = [
  {
    text: "programmer",
    setting: typeWriterSize + "text-green-500"
  },
  {
    text: "software developer",
    setting: typeWriterSize + "text-sky-600"
  },
  {
    text: "penetration tester",
    setting: typeWriterSize + "text-red-600"
  },
  {
    text: "researcher",
    setting: typeWriterSize + "text-violet-700"
  },
];

//****************************************************************************************************  
export default function Index() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-[calc(100vh-3rem)] w-full flex flex-col justify-center items-center focus:border-transparent select-none">
      <div className = "grid grid-rows-3">
        <div className="flex justify-center items-center">
          <Typewriter text="Unlocking potential as a " textSetting="text-2xl sm:text-3xl md:text-4xl text-white" id={0} nextId={1} setActive={setActive} active={active} />
        </div>
        <div className="row-span-2 flex justify-center items-center">
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
