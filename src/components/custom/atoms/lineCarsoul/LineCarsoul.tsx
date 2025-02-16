import { carsoulData } from '@/lib/data'
import styles from './lineCarsoul.module.css';
import { Star } from 'lucide-react';

const LineCarsoul = () => {
  return (
    <section className='overflow-hidden w-full h-[50px] sm:h-[70px] bg-secondary my-8 py-4'>
        <div  className={`${styles.line} text-l sm:text-2xl font-semibold`}>
     {carsoulData.map((val)=><p
      className=' w-full flex  items-center justify-evenly'
     key={val}><span>
      
      {val} 
      </span>
      <Star /></p>)} 

        </div>
        
    </section>
  )
}

export default LineCarsoul
