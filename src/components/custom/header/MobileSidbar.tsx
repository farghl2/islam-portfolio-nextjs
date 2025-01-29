import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { buttonVariants } from "../../ui/button";
import { navData } from "@/lib/data";
import Link from "next/link";

const MobileSidbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className={`text-white block sm:hidden rounded-md`} />
      </SheetTrigger>
      <SheetContent>
        <ul className=" flex flex-col justify-center items-center gap-6 pt-16">
          {navData.map((item) => (
            <li className="w-full" key={item.title}>
              <SheetClose asChild>
                <Link
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} w-full text-[1.06rem] transition-all flex items-center justify-between `}
                  href={item.url}
                >
                  <span>{item.title}</span>
                  <item.icon />
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidbar;
