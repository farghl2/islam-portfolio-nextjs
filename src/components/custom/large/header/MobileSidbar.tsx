
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowRight, Sun, Moon } from "lucide-react";
import { navData, socialData, callMeData } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CustomButton from "../../atoms/CustomButton/customButton";
import { useTheme } from "next-themes";

const MobileSidbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-2 sm:hidden rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Menu className="w-6 h-6 text-foreground" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full pt-16 pb-6">
            {/* Main Navigation */}
            <ul className="flex flex-col gap-2 flex-grow">
            {navData.map((item, index) => (
                <li key={item.title} className="w-full">
                <SheetClose asChild>
                    <Link
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300"
                    href={item.url}
                    >
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <item.icon size={20} />
                        </div>
                        <span className="text-xl font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                            {item.title}
                        </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                </SheetClose>
                </li>
            ))}
            </ul>

            {/* Bottom Actions */}
            <div className="mt-auto space-y-6 border-t border-slate-200 dark:border-slate-800 pt-6">
                
                {/* Socials & Theme Toggle */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all hover:scale-110 relative overflow-hidden"
                    >
                        <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute top-3 left-3 w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </button>
                    <div className="w-[1px] h-6 bg-slate-300 dark:bg-slate-700 mx-2" />
                    {socialData.map((item) => (
                         <Link
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all hover:scale-110"
                        >
                            <item.icon className="w-5 h-5" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link href={callMeData} target="_blank" className="block w-full">
                    <CustomButton title="Hire Me" styles="w-full" />
                </Link>
                
                <p className="text-center text-xs text-muted-foreground">
                    © 2026 Islam. All rights reserved.
                </p>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidbar;
