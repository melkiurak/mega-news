import { Link, Outlet, useNavigate } from "react-router-dom"
import { BreadCrumb } from "../../components/breadcrumb/breadCrumb"
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { storeType } from "src/redux/store";
import { Avatar } from "@components/avatar/avatar";
export const Profile = () => {
    const { user } = useSelector((state:storeType) => state.user);
    const navigation = useNavigate()
    return <div className="flex flex-col gap-11">
        <BreadCrumb/>
        <div className="flex flex-col gap-[15px] bg-[#E6E6E6] p-1.5 sm:p-2.5 rounded-xl">
            <div className={`h-[150px] w-full rounded-xl bg-cover bg-no-repeat bg-center ${user?.banner ? "block" : "hidden"}`} style={{backgroundImage: `url(${user?.banner})`}}></div>
            <div className="flex lg:justify-between items-center gap-2 w-full relative">
                <div className="flex items-center gap-3">
                    <Avatar avatar={user?.avatar} username={user?.username || ''}/>
                    <h5 className="text-h5 hidden lg:block">{user?.username}</h5>
                </div>
                <nav className="flex flex-col gap-[17px]">
                    <h5 className="text-h5 lg:hidden">Louis Hoebregts</h5>
                    <ul className="flex items-center gap-5 whitespace-nowrap">
                        <li className="text-h5">
                            <Link to="/">Marked</Link>
                        </li>
                        <li className="text-h5">
                            <Link to="Send-Post">Send Post</Link>
                        </li>
                        <li className="text-h5">
                            <Link to="/">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <button className="bg-[#E6E6E6] px-4 py-3 rounded-xl shadow flex items-center gap-2 absolute lg:static right-2.5 top-0 sm:top-auto sm:bottom-0 text-[#F81539BF]" onClick={() => navigation('/ProfileEdit')}>
                    <FaUserEdit/>
                    <span className="hidden sm:block text-btn">Edit Profile</span>
                </button>
            </div>
        </div>
        <Outlet/>
    </div>
}