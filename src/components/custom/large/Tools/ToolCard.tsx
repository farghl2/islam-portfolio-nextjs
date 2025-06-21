import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
type ToolProps = {
  title: string, 
  img:string
}
export const Tool = ({title, img}:ToolProps) => {
  return (
    <Card className={`${cn(`bg-slate-50 hover:bg-slate-200 transition
     rounded-full min-w-[8.75rem] lg:w-[13%]  flex items-center justify-center flex-col gap-11 py-4`)}`}>
      <Image
        alt="tool logo"
        height={62}
        width={62}
        src={img}
        className="rounded-full"
      />
      <h5 className="font-semibold text-2xl mb-4 dark:text-black">{title}</h5>
    </Card>
  );
};
