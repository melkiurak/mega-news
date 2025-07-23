import { Link, Outlet } from "react-router-dom"
import { BreadCrumb } from "../../components/breadcrumb/breadCrumb"
import { FaUserEdit } from "react-icons/fa";
export const Profile = () => {
    return <div className="flex flex-col gap-11">
        <BreadCrumb/>
        <div className="flex flex-col gap-[15px] bg-[#E6E6E6] p-2.5 rounded-xl">
            <div className="hidden sm:block bg-purple-600 h-[150px] w-full rounded-xl"></div>
            <div className="flex lg:justify-between items-center  w-full relative">
                <div className="flex items-center">
                    <div className="bg-amber-500 w-[50px] phone:w-[75px] aspect-square rounded-xl mr-2.5"></div>
                    <h5 className="text-h5 hidden lg:block">Louis Hoebregts</h5>
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
                <button className="bg-[#E6E6E6] px-4 py-3 rounded-xl shadow flex items-center gap-2 absolute lg:static right-2.5 top-0 sm:top-auto sm:bottom-0 text-[#F81539BF]">
                    <FaUserEdit/>
                    <Link className="hidden sm:block text-btn" to={'/ProfileEdit'}>Edit Profile</Link>
                </button>
            </div>
        </div>
        <Outlet/>
    </div>
}