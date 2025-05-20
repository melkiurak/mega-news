import { FaSearch } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";

export const Header = () => {
    return <header>
        <div className="container flex justify-between">
            <div className="flex-1">
                <div>
                    <h2 className="text-[22px] text-[#FC4308] font-roboto font-bold">MEGA.news</h2>
                </div>
                <nav>
                    <ul className="flex gap-[34px] ">
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="flex-1">
                <div>
                    <button><GoKebabHorizontal/></button>
                    <input type="text" />
                    <button><FaSearch/></button>
                </div>
                <div>
                    <button>Log In</button>
                    <button>Sign Up </button>
                </div>
            </div>
        </div>
    </header>
}