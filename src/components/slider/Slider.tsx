import sliderImg from '@img/slider.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch';
import singleContent1 from '@img/SingleContent.png' 
import singleContent2 from '@img/SingleContent2.png' 
export const Slider = () => {
    return <div className='flex justify-between gap-5 items-center h-[367px] lg:h-[452px]'>
        <div className='w-full h-full hidden lg:flex items-end flex-1 bg-no-repeat rounded-xl bg-cover bg-center ' style={{backgroundImage: `url("${singleContent1}")`}}>
            <div className='bg-[#FFFFFFBF] rounded-xl m-[10px] w-full'>
                <div className='p-[16px] overflow-hidden'>
                    <h4 className='text-h4'>Why I Stopped Using Multiple Monitor </h4>
                    <p className="truncate">Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them. </p>
                </div>
            </div>
        </div> 
        <div className='w-full h-full hidden lg:flex flex-1 bg-no-repeat rounded-xl bg-cover bg-center' style={{backgroundImage: `url("${singleContent2}")`}}>
             <div className='bg-[#FFFFFFBF] rounded-xl m-[10px] w-full'>
                <div className='p-[16px]'>
                    <h4 className='text-h4'>Why I Stopped Using Multiple Monitor </h4>
                </div>
            </div>
        </div>
        <div className='sm:flex flex-2 items-end hidden w-full h-full bg-no-repeat rounded-xl bg-cover bg-center relative' style={{backgroundImage: `url("${sliderImg}")`}}>
            <div className='px-2.5 absolute top-1/2 left-1/2  w-full transform -translate-x-1/2 -translate-y-1/2'>
                <ButtonSwitch/>
            </div>
            <div className='bg-[#FFFFFFBF] rounded-xl m-[10px] w-full'>
                <div className='p-[16px]'>
                    <h4 className='text-h4'>Why I Stopped Using Multiple Monitor </h4>
                </div>
            </div>
        </div>
    </div>
}