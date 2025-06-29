import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowUp, MdEmail } from "react-icons/md";
import { FaInstagram, FaBookmark, FaTwitter   } from "react-icons/fa";
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
            <div className="bg-[#F5F5F5] hidden phone:flex flex-col gap-8 max-w-[696px] w-full rounded-r-[50px] py-10">
                <div className="container h-full flex flex-wrap gap-9">
                    <div className="max-w-[360px] w-full">
                        <div className="flex items-center pb-5">
                            <h4 className="text-h4">Mega News</h4>
                        </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin</p>
                    </div>
                    <div>
                        <div className="flex items-center pb-5">
                            <h4 className="text-h4">Categories</h4>
                        </div>
                        <ul className="flex flex-col gap-1 px-2.5">
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Culture </a></li>
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Fashion </a></li>
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Featured </a></li>
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Food </a></li>
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Healthy Living</a></li>
                            <li><a href="" className="text-[#3E3232] font-roboto text-xs">Technology</a></li>
                        </ul>
                    </div>
                    <div className="max-w-[368px] w-full">
                        <div className="flex items-center pb-5">
                            <h4 className="text-h4">Newsletters</h4>
                        </div>
                        <div className="relative w-full h-12">
                            <input type='email' className="w-full h-full rounded-xl bg-white" />
                            <MdEmail className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3E3232] text-xl"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center pb-5">
                            <h4 className="text-h4">Social Network</h4>
                        </div>
                        <div className="h-10 flex  items-center gap-4">
                            <button className="h-full flex items-center gap-2 px-4 text-white bg-[#F45C9F] bg-gradient-to-l from-[#F45C9F] to-[#FF7563] rounded-xl ">
                                <FaInstagram/>
                                <span className="text-btn">Instagram</span>
                            </button>
                            <button className="h-full bg-[#2CA5E0] bg-gradient-to-bl from-[#2CA5E0s] to-[#67C9F5] text-white rounded-xl p-2">
                                <FaTwitter className="text-2xl"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[97%] bg-[#3E32320D] h-12 rounded-r-xl">
                    <div className="container flex items-center justify-between py-[17px]">
                        <p className="text-Input">Privacy Policy | Terms & Conditions</p>
                        <p className="text-Input">All Copyright (C) 2022 Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}