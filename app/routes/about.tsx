
import { useEffect, useState } from "react";

import Terminal from "~/lib/terminal";
import { hScreenFit, terminalSize } from "~/lib/utils";
import FadeIn from "~/lib/fade-in";
import Typewriter from "~/lib/typewriter";
import LanguageSwitch from "~/lib/language-switch";

import { languageSwitchStyle } from "~/lib/utils";

// ====================================================================================================
const paragraphs: { [key: string]: string[] } = {};

paragraphs['en'] = [
    "A former competitive programmer who participated in and won awards at numerous prestigious programming competitions, most notably the Vietnam Olympiad in Informatics, ACM-ICPC Regional, and Monash MCPC. This journey expanded into research, resulting in three publications on Encrypted Databases presented at international conferences in Vietnam and Australia.",
    "At present, I still find great fascination in discovering patterns and brilliant solutions. I also take satisfaction in seeing the visualization of my code on screen. This combination of interests has led me to pursue both software engineering and penetration testing, allowing me to approach development and security from two complementary angles.",
    "Software engineering experience gives me the developer’s perspective, providing a better understanding of potential weaknesses in an application. On the other hand, a penetration testing background equips me with the knowledge to implement secure code, ensuring that vulnerabilities are addressed early in the development process.",
    "My background and blend of skills allow me to build applications that are not only functional and high-performance but also secure against potential security threats.",
];

paragraphs['vi'] = [
    "Cựu học sinh chuyên Tin trường Phổ Thông Năng Khiếu, tốt nghiệp loại giỏi Cử nhân Khoa học Máy tính tại Đại học Khoa Học Tự Nhiên - TPHCM, và loại giỏi Thạc sĩ Bảo mật tại Đại Học Monash, Úc.",
    "Thành tích nổi bật bao gồm giải thưởng tại các kỳ thi lập trình như Học sinh giỏi Quốc gia môn Tin học, Olympic Tin học Sinh viên Việt Nam, ACM-ICPC vòng Quốc gia/Khu vực châu Á, và Monash MCPC. Đồng tác giả của ba bài báo khoa học về Cơ sở dữ liệu mã hóa được công bố tại các hội nghị quốc tế ở Việt Nam và Úc.",
    "Hiện đang tập trung phát triển sự nghiệp trong lĩnh vực kỹ sư lập trình phần mềm và bảo mật, đặc biệt hứng thú trong việc xây dựng các hệ thống an toàn và hiệu quả"
];

const effectTime = 1500;

// ****************************************************************************************************
export default function About()
{
  const [screenSettings, setscreenSettings] = useState("scale-50 skew-x-6 -skew-y-1");
  const [textSetting, setTextSetting] = useState("text-green-500 text-[60px] sm:text-[90px]");
  const [lan, setLan] = useState("en");

  useEffect(() => {
    const timer = setTimeout(() => {
        setscreenSettings("h-full w-full");
        setTextSetting("text-green-500 text-[24px]");
    }, effectTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${hScreenFit} w-full flex items-center justify-center relative`}>
        <div className={languageSwitchStyle}
            onClick={() => setLan(lan === "vi" ? "en" : "vi")}
        >
            <LanguageSwitch lan={lan}/>
        </div>

        <Terminal className={`${screenSettings} ${terminalSize} transform transition-transform duration-1000 ease-in-out`}>
            <div className={`transform transition-all duration-1000`}>
                <Typewriter text="$ whoami" textSetting={`${textSetting} transition-all duration-1000`}/>
            </div>
            
            {paragraphs[lan].map((entry, index) => (
                <FadeIn key={index} delay={effectTime*1.5/1000} asChild>
                    <div className="text-lg mt-5">
                        {entry}
                    </div>
                </FadeIn>
            ))}
        </Terminal>
    </div>
  );
}