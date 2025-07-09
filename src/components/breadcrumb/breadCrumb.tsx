import { Link, useLocation } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
export const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return <nav>
        <ul className="flex items-center">
            <li className="text-Input text-[#3E3232]">
                <Link to="/">Home</Link>
            </li>
            {pathnames.map((path,index) => (
                <li key={index} className={`text-Input flex items-center ${index === pathnames.length - 1 ? 'text-[#3E323280]' : 'text-[#3E3232'}`}>
                    <span className="px-1"><IoIosArrowForward className="text-lg text-[#3E323280]"/></span>
                    <Link to={path}>{path}</Link>
                </li>
            ))}
        </ul>
    </nav>
}