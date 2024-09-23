
import { hScreenFit } from "~/root";

// ====================================================================================================


//****************************************************************************************************
export default function About()
{
  return (
    <div className = {`w-full ${hScreenFit} p-10 
                      flex flex-col justify-between
                      text-xl text-justify text-gray-300`
    }>
      <div>
        A former competitive programmer who participated in and won awards in numerous prestigious programming competitions, most notably the Vietnam Olympiad in Informatics, ACM-ICPC Regional, and Monash MCPC. 
        This journey expanded into research, resulting in three publications on Encrypted Databases presented at international conferences in Vietnam and Australia.
      </div>

      <div>
        At present, I still find great fascination in uncovering patterns and designing brilliant solutions.
        While my main interest lies in problem solving, I also take immense satisfaction in seeing the visualization of my code on screen. 
        This combination of interests has led me to pursue both software engineering and penetration testing, where I am dedicated to honing my skills.
      </div>

      <div>
        Being both a software engineer and a penetration tester has allowed me to approach development and security from two complementary angles. 
        My software engineering experience gives me the developer’s perspective, providing a better understanding of potential weaknesses in an application. 
        On the other hand, my penetration testing background equips me with the knowledge to implement secure code, ensuring that vulnerabilities are addressed early in the development process. 
        My background and blend of skills allow me to build applications that are not only functional and high-performance but also secure against potential security threats.      
      </div>
    </div>
  );
}