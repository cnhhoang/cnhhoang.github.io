import { VN, GB } from 'country-flag-icons/react/3x2';

// ====================================================================================================
const languageOptions = [
    {
        id: "vi",
        flag: <VN/>,
        language: "VIE",
        textColor: "text-yellow-500",
        backgroundColor: "bg-red-500",
    },
    {
        id: "en",
        language: "ENG",
        flag: <GB/>,
        textColor: "text-red-500",
        backgroundColor: "bg-white",
    },
];

// --------------------------
interface LanguageSwitchProps {
    className?: string;
    lan: string;
}
  
  export default function LanguageSwitch({ className="", lan }: LanguageSwitchProps) {
  
    return (
      <div
        className={`grid grid-cols-2 justify-center items-center hover:cursor-pointer ${className}`}
        // onClick={() => setLan(lan === "vi" ? "en" : "vi")}
      >
        {languageOptions.map((item, index) => (
          <div
            className={`h-full flex items-center justify-center font-bold 
                        transition ${item.id === lan ? "" : "grayscale opacity-50"}`}
            key={index}
          >
            {item.flag}
          </div>
        ))}
      </div>
    );
  }