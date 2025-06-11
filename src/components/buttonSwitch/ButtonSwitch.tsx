import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

export const ButtonSwitch = () => {
    return <div className="flex justify-between items-center w-full">
        <button className='bg-[#F5F5F5] rounded-xl w-10 h-10 flex items-center justify-center'><IoIosArrowBack className="text-[#3E3232] text-2xl"/></button>
        <button className='bg-[#F5F5F5] rounded-xl w-10 h-10 flex items-center justify-center'><IoIosArrowForward className="text-[#3E3232] text-2xl"/></button>
    </div>
}