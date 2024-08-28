import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "~/components/ui/sheet";

export default function FixedHeader()
{
  return (
    <Sheet open={true} modal={false}>
      <SheetContent side={"top"}  
                    className = {`h-10 w-full flex items-center focus:border-transparent select-none	
                                 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600`}>
        <div className="text-2xl text-white">
          Hoang Chung
        </div>
      </SheetContent>
    </Sheet>
  );
}