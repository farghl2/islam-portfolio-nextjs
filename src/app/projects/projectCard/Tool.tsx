import { Tooltip, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type toolProps ={
  title: string
}
export const Tool = ({title}:toolProps) => {
  return (
    <TooltipProvider >
        <Tooltip >
          <TooltipTrigger asChild>
            <Button className={`${cn(`bg-secondary rounded-2xl tracking-wider capitalize`)}`}>{title}</Button>
          </TooltipTrigger>
         
        </Tooltip>
        </TooltipProvider>
        
  )
}
