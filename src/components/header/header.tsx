import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import rectangle from '@icons/rectangle.png'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { storeType } from "../../redux/store";
import  Parse  from '../../lib/parseClient';
import { logOut } from "../../redux/reducers/users-reducer";

export const Header = () => {
    const [burger, setBurger] = useState(false);
    const dispacth = useDispatch();
    const { isLogin, username, avatar } = useSelector((state:storeType) => state.user);

    const handelExit = async () => {
        await Parse.User.logOut();
        dispacth(logOut());
    };
    return <header className=" mt-[45px] mb-[58px]">
        <div className="container flex items-center justify-between phone:flex-wrap gap-2.5 h-full">
            {burger && (
                <div className="fixed top-0 left-0 bg-white w-full h-full z-10 px-5 py-[15px] flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h4 className="font-roboto font-bold text-[22px] text-[#FC4308]">Mega.news</h4>
                        <button className="w-12 h-12" onClick={() => setBurger(false)}><IoCloseSharp className="w-full h-full" /></button>
                    </div>
                    <div>
                        <button className="bg-[#F5F5F5] rounded-xl flex items-center justify-between w-full p-[15px]">
                            <div className="flex items-center gap-2">
                                <img src={rectangle} alt="" />
                                <span className="text-h5">Categories</span>
                            </div>
                            <MdKeyboardArrowRight className="w-6 h-6"/>
                        </button>
                    </div>
                    <nav>
                        <ul>
                            <li className="py-[15px] px-2 flex justify-between items-center" >
                                <a href="#d" className="text-h5">Pages</a>
                                <IoIosArrowDown className="w-5 h-5"/>
                            </li>
                            <li className="py-[15px] px-2"><a href="#s" className="text-h5">Contact Us</a></li>
                            <li className="py-[15px] px-2"><a href="#s" className="text-h5">About Us</a></li>
                        </ul>
                    </nav>
                </div>
            )}
            <div className="h-full flex items-center gap-8 lg:flex-1">
                <button className='xl:hidden w-12 h-12 relative z-[2] overflow-hidden bg-[#F5F5F5] rounded-2xl' onClick={() =>  setBurger(true)}>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl'></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% - 5px)" }}></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% + 5px)" }}></span>
                </button>
                <h4 className="font-roboto font-bold text-[22px] text-[#FC4308] hidden phone:block">Mega.news</h4>
                <nav className="xl:block hidden">
                    <ul className="flex items-center gap-[34px]">
                        <li >
                            <button>
                                <span className="text-h5">Categories</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="text-h5">Pages</span>
                            </button>
                        </li>
                        <li><a href="" className="text-h5">contact us</a></li>
                        <li><a href="" className="text-h5">about us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="items-center gap-[50px] phone:flex hidden lg:order-2">
                <button onClick={handelExit}>Exit</button>
                <div>
                    {isLogin ? (
                        <div className="flex items-center gap-2">
                            {avatar ? (
                                <div>аватарка есть</div>
                            ) : (
                                <div className="bg-[#F5F5F5] rounded-xl w-12 h-12 flex items-center justify-center">
                                    <h5 className="text-h5">{username?.charAt(0).toLocaleUpperCase()}</h5>
                                </div>
                            )}
                            <h5 className="text-h5">{username}</h5>
                        </div>
                        
                    ) : (
                        <NavLink to='/login' end>
                            Login
                        </NavLink>
                    )}
                </div>
                <div><span>save</span></div>
            </div>
            <div className="relative text-[#3E3232] w-full lg:w-[465px] lg:order-1">
                <button className="absolute  rotate-90 top-3.5 left-1 text-xl"><GoKebabHorizontal/></button>
                <input className="bg-[#F5F5F5] rounded-2xl w-full pl-9 inputText py-[17px]" type="text" placeholder="Search anything" />
                <button className="absolute right-4 top-3.5 text-xl"><FaSearch/></button>
            </div>
        </div>
    </header>
}