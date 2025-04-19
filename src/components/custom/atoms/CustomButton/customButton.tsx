
import { Play } from 'lucide-react';
type CustomButtonProps =  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styles?:string,
    title:string
}
function CustomButton({styles, title, ...props}:CustomButtonProps) {

  return (
    <button  className={`rounded-3xl bg-secondary w-[12rem] h-11 ${styles} `}   {...props} >
        <div className='flex justify-between items-center mx-[.1rem] relative '>
            <span className={`bg-primary text-white capitalize rounded-3xl  h-10 flex justify-center items-center w-[9rem] transition-all duration-300 absolute ease-in-out z-10 hover:translate-x-11 } `}>

        {title}
            </span>
            <span className='flex justify-center items-center h-10 w-10 rounded-full  bg-white absolute z-0 right-0'>
            <Play className='w-6' />
            </span>
        </div>
    </button>
  )
}

export default CustomButton
