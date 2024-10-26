export default function GradientButton({ children }: { children: React.ReactNode })
{
    return (
        <div className={`bg-gradient-to-b from-sky-800 to-cyan-500  text-white
            rounded-md sm:rounded-sm hover:rounded-full hover:font-bold
            flex items-center justify-center px-3 py-1 
        `}>
            {/* Give it a <Star className="ml-2"/> */}
            { children }
        </div>
    );
}