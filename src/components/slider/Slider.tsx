import sliderImg from '@img/slider.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch';

export const Slider = () => {
    return <div className='sm:flex items-end hidden w-full h-[367px] bg-no-repeat rounded-xl bg-cover bg-center relative' style={{backgroundImage: `url("${sliderImg}")`}}>
        <div className='px-2.5 absolute top-1/2 left-1/2  w-full transform -translate-x-1/2 -translate-y-1/2'>
            <ButtonSwitch/>
        </div>
        <div className='bg-[#FFFFFFBF] rounded-xl m-[10px] w-full'>
            <div className='p-[16px]'>
                <h4 className='text-h4'>Why I Stopped Using Multiple Monitor </h4>
            </div>
        </div>
    </div>
}