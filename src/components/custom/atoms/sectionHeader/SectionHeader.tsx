import { Minus } from 'lucide-react';

type SectionHeaderProps= {

    title: string;
    desc:string;

} 

const SectionHeader = ({title, desc}:SectionHeaderProps) => {
  return (
    <div className="my-2 sm:my-5">
      <h3 className='flex items-center gap-1 text-xl sm:text-3xl font-bold'> <Minus className='text-xl text-secondary mr-3'/> {title}</h3>
      <p className='text-4xl mt-1'><span className='text-secondary'>{desc.split(' ')[0]}</span> {desc.split(' ').slice(1).join(' ')}</p>
    </div>
  )
}

export default SectionHeader
