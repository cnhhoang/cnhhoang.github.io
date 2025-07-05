import { useEffect, useState } from "react";
import LogoHCMUS from "~/assets/images/logo-hcmus.png";
import LogoPTNK from "~/assets/images/logo-ptnk.jpg";
import { LogoMonash } from "~/assets/logos";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion";
import FadeIn from "~/lib/fade-in";
import FlippingLogo from "~/lib/flipping-logo";
import LanguageSwitch from "~/lib/language-switch";
import Typewriter from "~/lib/typewriter";

import { languageSwitchStyle } from "~/lib/utils";

// ====================================================================================================
type HistoryItem = {
    id: string;
    logo: () => JSX.Element;
    organization: string | JSX.Element;
    title: JSX.Element;
    duration: string;
    description: string[];
};

const history: { [key: string]: HistoryItem[] } = {};

// --------------------------
history['en'] = [
    {   id: "monash",
        logo: () => (
            <div id="monash" className="h-fit w-12 mr-2 none-select ">
                <LogoMonash/>
            </div>),
        organization: "Monash University",
        title: 
            <div className="rounded-sm sm:rounded-md px-2 bg-white text-black">
                Master of Cybersecurity
            </div>,
        duration: "2024",
        description: [
            "Master degree awarded with distinction (WAM above 80).",
            "Thesis accepted and presented as a full paper at ProvSec2024 (acceptance rate 33%).",
            "Runner-up in MCPC 2022, Monash's largest Competitive Programming Contest.",
            "Commendation letter for earning the highest mark in FIT5129 - Cyber Operations.",
            "Commendation letter for excellent academic performance.",
        ],
    },
    {   id: "hcmus",
        logo: () => (
            <div id="hcmus" className="h-fit w-14 -translate-x-0.5 -translate-y scale-[105%] none-select">
                <img src={LogoHCMUS} />
            </div>
        ),
        organization: <div className="text-sky-500">Ho Chi Minh University of Science</div>,
        title:             
            <div className="rounded-sm sm:rounded-md px-2 bg-blue-900 text-white">
                Bachelor of Computer Science
            </div>,
        duration: "2020",
        description: [
            "First-class honours awarded (WAM above 80).",
            "Research paper awarded with Best paper award in SoICT2019.",
            "Another research paper accepted and presented as a full paper at FDSE2019.",
            "3rd prize in Collegiate Information Security (CTF), South Vietnam, 2019.",
            "2nd prize in Vietnam National Collegiate Olympiad in Informatics, 2018.",
            "Ranked 48th (148 teams) in ACM-ICPC Asia HCMC Regional Contest, 2017.",
            "2nd prize (ranked 15/188) in ACM-ICPC Vietnam National Contest, 2017.",
            "3rd prize in Vietnam National Collegiate Olympiad in Informatics, 2016.",
            "Scholarships for excellent academic performance.",
        ],
    },    
    {   id: "ptnk",
        logo: () => (
            <div id="ptnk" className="h-fit w-14 scale-110 mr-2 none-select">
                <img src={LogoPTNK} />
            </div>
        ),
        organization:   <div className="text-sky-100 flex">
                            <span className="hidden sm:block mr-1"> VNU-HCM </span>
                            High School for the Gifted
                        </div>,
        title:  <div className="rounded-sm sm:rounded-md px-2 bg-sky-100 text-blue-800 flex">
                    <span className="mr-1"> Majoring in  </span>
                    <span className="hidden sm:block"> Information Technology </span> 
                    <span className="sm:hidden"> IT </span>
                </div>,
        duration: "2016",
        description: [
            "Valedictorian of Ho Chi Minh City's Olympiad in Informatics, 2016.",
            "Vietnam National Olympiad in Informatics, 2016.",
            "Gold medal in the April 30th Olympic competition for computer science, 2015.",
            "Gold medal in the April 30th Olympic competition for computer science, 2014.",
            "Scholarships for excellent academic performance.",
        ],
    },    
];

// --------------------------
history['vi'] = [
    {   id: "monash",
        logo: () => (
            <div id="monash" className="h-fit w-12 mr-2 none-select ">
                <LogoMonash/>
            </div>),
        organization: "Đại học Monash",
        title: 
            <div className="rounded-sm sm:rounded-md px-2 bg-white text-black">
                Thạc sĩ An toàn Thông tin
            </div>,
        duration: "2024",
        description: [
            "Tốt nghiệp loại giỏi với điểm trung bình trên 80",
            "Luận văn tốt nghiệp được kiểm duyệt và công bố tại Hội nghị ProvSec2024 (tỉ lệ 33%).",
            "Hạng nhì Monash MCPC 2022, cuộc thi lập trình thi đấu lớn nhất tại Đại học Monash.",
            "Thư khen cho thành tích học tập xuất sắc.",
        ],
    },
    {   id: "hcmus",
        logo: () => (
            <div id="hcmus" className="h-fit w-14 -translate-x-0.5 -translate-y scale-[105%] none-select">
                <img src={LogoHCMUS} />
            </div>
        ),
        organization:   
            <div className="text-sky-500 flex">
                Đại học Khoa học Tự nhiên
                <span className="hidden sm:block ml-1"> - ĐHQG TPHCM </span>
            </div>,
        title:             
            <div className="rounded-sm sm:rounded-md px-2 bg-blue-900 text-white">
                Cử nhân Khoa học Máy tính
            </div>,
        duration: "2020",
        description: [
            "Tốt nghiệp loại giỏi với điểm trung bình trên 80.",
            "Bài báo khoa học xuất sắc nhất tại Hội nghị SoICT2019.",
            "Bài báo khoa học được công bố tại Hội nghị FDSE2019.",
            "Giải ba Sinh viên An toàn Thông tin Miền Nam, 2019",
            "Giải nhì Olympic Tin học Sinh viên Việt Nam, 2018",
            "Hạng 48 (tổng số 148 đội) trong kì thi ACM-ICPC Khu vực Châu Á, 2017.",
            "Giải nhì (hạng 15 trên tổng số 188 đội) trong kì thi ACM-ICPC Việt Nam, 2017.",
            "Giải ba Olympic Tin học Sinh viên Việt Nam, 2016.",
            "Các học bổng theo học kỳ của Đại học Khoa học Tự nhiên.",
        ],
    },    
    {   id: "ptnk",
        logo: () => (
            <div id="ptnk" className="h-fit w-14 scale-110 mr-2 none-select">
                <img src={LogoPTNK} />
            </div>
        ),
        organization:   <div className="text-sky-100 flex">
                            Trường Phổ Thông Năng Khiếu 
                            <span className="hidden sm:block ml-1"> - ĐHQG TPHCM </span>
                        </div>,
        title:  <div className="rounded-sm sm:rounded-md px-2 bg-sky-100 text-blue-800 flex">
                    Khối Chuyên Tin
                </div>,
        duration: "2016",
        description: [
            "Thủ khoa Học sinh giỏi Thành phố môn Tin học, 2016",
            "Đội tuyển tham dự Học sinh giỏi Quốc gia, 2016.",
            "Huy chương Vàng Olympic 30/4 môn Tin học, 2015.",
            "Huy chương Vàng Olympic 30/4 môn Tin học, 2014.",
            "Học bổng trường Phổ Thông Năng Khiếu.",
        ],
    },    
];

//****************************************************************************************************
export default function Education()
{
    const [language, setLanguage] = useState("en");

    /// Handle flip upon click
    const [flipCounts, setFlipCounts] = useState<Record<string, number>>({}); 

    /// Init 4 flips, taking fade-in delay into account
    useEffect(() => {
      const initialFlipCounts: Record<string, number> = {};
      history[language].forEach((entry) => {
        initialFlipCounts[entry.id] = 4;
      });
      setFlipCounts(initialFlipCounts);
    }, []);
    
    const handleClick = (id: string) => {
        /// Set flip count to 0 then 2 to make React re-render
        setFlipCounts((prevFlipCounts) => ({
        ...prevFlipCounts,
        [id]: 0,
        }));
        /// Delay instead of await
        setTimeout(() => {
        setFlipCounts((prevFlipCounts) => ({
            ...prevFlipCounts,
            [id]: 2,
        }));
        }, 1);
    };

    /// RENDER
    return (
        <div className="relative w-full p-4 text-white">
            <div className={languageSwitchStyle}
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            >
                <LanguageSwitch language={language}/>
            </div>

            <Typewriter text="$history | grep education" textSetting="text-xl text-green-500"/>

            <FadeIn delay={1.5}>
                <Accordion type="multiple" className="w-full none-select">
                    {history[language].map((entry, index) => (
                        <AccordionItem value={entry.id} key={index}>
                            <AccordionTrigger className="none-select">
                                <div className="flex none-select">
                                    <div onClick={() => handleClick(entry.id)}>
                                        {entry.logo()}
                                        <FlippingLogo id={entry.id} flipCount={flipCounts[entry.id]}/>
                                    </div>
                                    <div className="flex flex-col items-start none-select">
                                        <div className={`text-base`}>
                                            {entry.organization}
                                        </div>
                                        <div className="text-base sm:text-2xl font-bold">
                                            {entry.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-xl text-emerald-400 ml-auto mr-5">
                                    {entry.duration}
                                </div>
                            </AccordionTrigger>

                            <AccordionContent>
                                {entry.description.map((content, index) => (
                                    <li key={index} className="text-gray-300">
                                        {content}
                                    </li>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </FadeIn>
        </div>            
    );
}