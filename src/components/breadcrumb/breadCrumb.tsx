import { useLocation } from "react-router-dom"

export const breadCrubm = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return <nav>

    </nav>
}