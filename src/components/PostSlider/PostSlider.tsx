import rectangle from '@icons/rectangle.png'
import { ButtonSwitch } from '../buttonSwitch/ButtonSwitch'

export const PostSlider = (title) => {
    return <div className="flex flex-col gap-5">
        <div className='flex justify-between w-full'>
            <div className='flex items-center gap-2'> 
                <img src={rectangle} alt="" />
                <h4>{title}</h4>
            </div>
            <ButtonSwitch/>
        </div>
        <div className='flex flex-col'>
            <div></div>
            <h5></h5>
            <p></p>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <button></button>
            </div>
        </div>
    </div>
}