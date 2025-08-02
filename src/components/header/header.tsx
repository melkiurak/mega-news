import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import type { storeType } from "../../redux/store";
import  Parse  from '../../lib/parseClient';
import { logOut } from "../../redux/reducers/users-reducer";


import { FaSearch, FaRegUser } from "react-icons/fa";
import { GoKebabHorizontal, GoBookmark } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import rectangle from '@icons/rectangle.png'
import { Avatar } from "@components/avatar/avatar";


export const Header = () => {
    const [burger, setBurger] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const dispacth = useDispatch();
    const { isLogin, user } = useSelector((state:storeType) => state.user);

    const handelExit = async () => {
        await Parse.User.logOut();
        setUserMenu(false);
        dispacth(logOut());
    };
    return <header className=" mt-[45px] mb-[58px]">
        <div className="container flex items-center justify-between phone:flex-wrap gap-2.5 h-full">
            {burger && (
                <div className="fixed top-0 left-0 bg-white w-full h-full z-10 px-5 py-[15px] flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h4 className="font-roboto font-bold text-[22px] text-[#FC4308]"><Link to="/">Mega.news</Link></h4>
                        <button className="w-7 h-7" onClick={() => setBurger(false)}><IoCloseSharp className="w-full h-full" /></button>
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
                                <h5  className="text-h5">Pages</h5>
                                <IoIosArrowDown className="w-5 h-5"/>
                            </li>
                            <li className="py-[15px] px-2"><h5>Contact Us</h5></li>
                            <li className="py-[15px] px-2"><h5><Link to={'/About'}>About Us</Link></h5></li>
                        </ul>
                    </nav>
                </div>
            )}
            <div className="h-full flex items-center gap-3 lg:gap-8 lg:flex-1">
                <button className='xl:hidden w-12 h-12 relative z-[2] overflow-hidden bg-[#F5F5F5] rounded-2xl' onClick={() =>  setBurger(true)}>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl'></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% - 5px)" }}></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% + 5px)" }}></span>
                </button>
                <h4 className="font-roboto font-bold text-[22px] text-[#FC4308] hidden phone:block cursor-pointer "><Link to="/">Mega.news</Link></h4>
                <nav className="xl:block hidden">
                    <ul className="flex items-center gap-[34px]">
                        <li >
                            <button>
                                <h5>Categories</h5>
                            </button>
                        </li>
                        <li>
                            <button>
                                <h5>Pages</h5>
                            </button>
                        </li>
                        <li><h5 className="text-h5">contact us</h5></li>
                        <li><h5><Link to={'/About'}>About Us</Link></h5></li>
                    </ul>
                </nav>
            </div>
            <div className="items-center gap-[30px] sm:flex hidden lg:order-2">
                <div className="relative max-w-[134px] w-full">
                    <div className="w-full">
                        {isLogin ? (
                            <div className="flex items-center gap-2">
                                <Avatar avatar={user?.avatar} username={user?.username || ''} />
                                <h5 className="text-h5 max-w-[54px] truncate">{user?.username}</h5>
                                <button type="button" onClick={() => setUserMenu(prev => !prev) }><IoIosArrowDown className="text-xl text-[#3E323280]"/></button>
                            </div>   
                        ) : (
                            <NavLink to='/Auth' end>
                                Login
                            </NavLink>
                        )}
                    </div>
                    {userMenu && (
                        <div className="bg-white absolute top-14 shadow-lg w-full rounded-lg flex flex-col gap-5 pl-[15px] py-5 z-10">
                            <NavLink to='/Profile' className="flex items-center gap-1.5">
                                <FaRegUser/>
                                <h6 className="text-h6">Profile</h6>
                            </NavLink>
                            <NavLink to='/' className="flex items-center gap-1.5">
                                <GoBookmark/>
                                <h6 className="text-h6">Marked</h6>
                            </NavLink>
                            <button className="flex items-center gap-1.5" onClick={handelExit}>
                                <RxExit/>
                                <h6 className="text-h6">Exit</h6>
                            </button>
                        </div>
                    )}
                </div>
                <button className="bg-[#F5F5F5] rounded-xl p-3.5">
                    <GoBookmark className="text-xl text-[#3E3232]"/>
                </button>
            </div>
            <div className="relative text-[#3E3232] w-full lg:w-[399px] lg:order-1">
                <button className="absolute  rotate-90 top-3.5 left-1 text-xl"><GoKebabHorizontal/></button>
                <input className="bg-[#F5F5F5] rounded-2xl w-full pl-9 inputText py-[17px]" type="text" placeholder="Search anything" />
                <button className="absolute right-4 top-3.5 text-xl"><FaSearch/></button>
            </div>
        </div>
    </header>
}