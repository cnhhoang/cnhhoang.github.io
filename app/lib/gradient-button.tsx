export default function GradientButton({ children }: { children: React.ReactNode })
{
    return (
        <div className={`bg-gradient-to-b from-blue-800 to-sky-500 text-white  hover:text-amber-300
            rounded-md sm:rounded-sm hover:rounded-full font-bold
            flex items-center justify-center px-3 py-1 
        `}>
            {/* Give it a <Star className="ml-2"/> */}
            { children }
        </div>
    );
}