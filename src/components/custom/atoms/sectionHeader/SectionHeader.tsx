import { Minus } from 'lucide-react';
import { ReactNode } from 'react';

type SectionHeaderProps= {

    title: string;
    children: ReactNode,
    styles?:string
} 

const SectionHeader = ({title,  children, styles}:SectionHeaderProps) => {
  return (
    <div className={`my-2 sm:my-5 text-center sm:text-start ${styles}`}>
      <h3 className='flex justify-center sm:justify-start items-center gap-1 text-xl sm:text-3xl font-bold'> <Minus className='text-xl text-secondary mr-3'/> {title}</h3>
      <p className='text-2xl sm:text-4xl mt-1'>
      {children}
      </p>
    </div>
  )
}

export default SectionHeader
