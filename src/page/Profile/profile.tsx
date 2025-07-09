import { Link } from "react-router-dom"
import { BreadCrumb } from "../../components/breadcrumb/breadCrumb"
import { FaUserEdit } from "react-icons/fa";
export const Profile = () => {
    return <div>
        <BreadCrumb/>
        <div className="flex  items-center  w-full bg-[#E6E6E6] p-2.5 rounded-xl h-[95px] relative">
            <div className="bg-amber-500 max-w-[75px] w-full aspect-square rounded-xl mr-2.5"></div>
            <nav className="flex flex-col gap-[17px]">
                <h5 className="text-h5">Louis Hoebregts</h5>
                <ul className="flex items-center gap-5 whitespace-nowrap">
                    <li className="text-h5">
                        <Link to="/">Marked</Link>
                    </li>
                    <li className="text-h5">
                        <Link to="/">Send Post</Link>
                    </li>
                    <li className="text-h5">
                        <Link to="/">Posts</Link>
                    </li>
                </ul>
            </nav>
            <button className="bg-[#E6E6E6] px-4 py-3 rounded-xl shadow h-10 absolute right-2.5 top-1.5"><FaUserEdit className="text-[#F81539BF]"/></button>
        </div>
    </div>
}