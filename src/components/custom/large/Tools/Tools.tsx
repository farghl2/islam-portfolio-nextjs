
import { Tool } from './ToolCard';
import SectionHeader from '../../atoms/sectionHeader/SectionHeader';
import { toolsData } from '@/lib/data';

export const Tools = () => {
  return (
    <section className="bg-primary min-h-[300px] px-2 py-8 sm:py-20">
        <div className='w-11/12 mx-auto'>
        <SectionHeader title='My Favorite Tools' styles='text-white'>
        Exploring the tools 
        Behind my work

        </SectionHeader>
     
      <div className='flex flex-wrap gap-3 justify-center my-5 sm:my-8 '>
        {toolsData.map((tool)=><Tool img={tool.img} title={tool.title} key={tool.title} />)}
        
      </div>
      </div>
    </section>
  );
};
