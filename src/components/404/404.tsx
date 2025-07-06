import { Link } from "react-router"

export const NotFoundPage = () => {
    return <div className="flex flex-col items-center justify-center"> 
        <h1 className="text-[162px] sm:text-[192px] text-[#FC4308] font-roboto font-medium text-shadow-md text-shadow-[#FC4308]">404</h1>
        <p className="text-h5 text-center">OOPS! Page you're looking for doesn't exist. Please use search for help</p>
        <Link to={'/'}>
            <button>Go back home</button>
        </Link>
    </div>
}