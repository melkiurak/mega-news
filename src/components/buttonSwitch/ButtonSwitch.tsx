import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

interface Button {
    next: () => void ,
    prev: () => void,
}

export const ButtonSwitch = ({next, prev}: Button) => {
    return <div className="flex justify-between items-center w-full absolute">
        <button className='bg-[#F5F5F5] rounded-xl w-10 h-10 flex items-center justify-center' onClick={next}><IoIosArrowBack className="text-[#3E3232] text-2xl"/></button>
        <button className='bg-[#F5F5F5] rounded-xl w-10 h-10 flex items-center justify-center' onClick={prev}><IoIosArrowForward className="text-[#3E3232] text-2xl"/></button>
    </div>
}