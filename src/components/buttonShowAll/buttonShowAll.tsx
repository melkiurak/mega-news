import { IoIosArrowForward } from "react-icons/io";

export const ButtonShowAll = () => {
    return <button className="bg-[#F5F5F5] rounded-xl flex justify-center items-center gap-2 py-2.5 px-4">
        <span className="text-btn text-[#3E3232]/75">Show All</span>
        <IoIosArrowForward className="text-[#3E3232]/50 text-base"/>
    </button>
}