import { FaSearch } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";

export const Header = () => {
    return <header className="h-[48px] mt-[45px]">
        <div className="container flex items-center justify-between phone:flex-wrap gap-2.5 h-full">
            <div className="h-full flex items-center gap-8">
                <button className='lg:hidden w-12 h-12 relative z-[2] overflow-hidden bg-[#F5F5F5] rounded-2xl'>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl'></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% - 5px)" }}></span>
                    <span className=' w-5 h-[2px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3E3232] transition-all duration-500 rounded-2xl' style={{ top: "calc(50% + 5px)" }}></span>
                </button>
                <h4 className="font-roboto font-bold text-[22px] text-[#FC4308] max-phone:hidden">Mega.news</h4>
                <nav className="max-lg:hidden">
                    <ul className="flex items-center lg:gap-[34px]">
                        <li><a href="">Categories</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">contact us</a></li>
                        <li><a href="">about us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-[50px] max-phone:hidden lg:order-2">
                <div><span>userName</span></div>
                <div><span>save</span></div>
            </div>
            <div className="relative h-full text-[#3E3232] w-full lg:w-[390px] lg:order-1">
                <button className="absolute  rotate-90 top-3.5 left-1 text-xl"><GoKebabHorizontal/></button>
                <input className="bg-[#F5F5F5] rounded-2xl h-full w-full pl-9 inputText" type="text" placeholder="Search anything" />
                <button className="absolute right-4 top-3.5 text-xl"><FaSearch/></button>
            </div>
        </div>
    </header>
}