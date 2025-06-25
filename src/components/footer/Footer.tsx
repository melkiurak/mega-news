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
            <div className="bg-[#F5F5F5] hidden phone:flex">
                <div className="">
                    <div className="flex items-center pb-5">
                        <h4 className="text-h4">Mega News</h4>
                    </div>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin</p>
                </div>
                <div>
                    <div>
                        <h4 className="text-h4">Categories</h4>
                    </div>
                    <ul className="flex flex-col gap-1">
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Culture </a></li>
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Fashion </a></li>
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Featured </a></li>
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Food </a></li>
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Healthy Living</a></li>
                        <li><a href="" className="text-[#3E3232] font-roboto text-xs">Technology</a></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h4>Newsletters</h4>
                    </div>
                    <div>
                        <input type='email' />
                    </div>
                </div>
            </div>
        </footer>
    )
}