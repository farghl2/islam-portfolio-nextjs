
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import {  buttonVariants } from "../../../ui/button";
import { navData } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import { Contrast, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
const MobileSidbar = () => {
  // const {setTheme, theme} = useTheme()
  return (
    <Sheet >
      <SheetTrigger>
        <AlignJustify className={`text-white block sm:hidden rounded-md`} />
      </SheetTrigger>
      <SheetContent >
        
        <ul className=" flex flex-col justify-center items-center gap-6 pt-16">
          {navData.map((item) => (
            <li className="w-full" key={item.title}>
              <SheetClose asChild>
                <Link
                  className={`${cn(` ${buttonVariants({
                    variant: "ghost",
                  })} w-full text-[1.06rem] transition-all flex items-center justify-between `)}`}
                  href={item.url}
                >
                  <span>{item.title}</span>
                

                  {<item.icon className={`${cn('text-muted-foreground')}`}/>}
               
                </Link>
              </SheetClose>
            </li>
          ))}
          {/* <li><Button variant={'outline'} className="shadow-none" onClick={()=>theme === 'light'?setTheme('dark'):setTheme('light')}>
            {theme === 'dark'&& <Sun/>}
           {theme === 'light'&& <Moon />}
           {theme === 'system'&& <Contrast/>}
          </Button></li> */}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidbar;
