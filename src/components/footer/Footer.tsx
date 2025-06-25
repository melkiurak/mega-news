import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
            <div className="bg-white flex phone:hidden justify-around items-center rounded-t-2xl py-[15px]  ">
                <button className="flex items-center gap-2 bg-[#f8153bd7] text-white rounded-xl px-6 py-2.5">
                    <IoMdHome className="text-xl"/>
                    <span className="font-roboto font-medium text-sm">Home</span>
                </button>
                <button className="footer__btn">
                    <FaBookmark className="footer__icon"/>
                </button>
                <button className="footer__btn">
                    <FaUser className="footer__icon"/>
                </button>
                <button className="footer__btn">
                    <MdOutlineKeyboardDoubleArrowUp className="footer__icon"/>
                </button>
            </div>
        </footer>
    )
}