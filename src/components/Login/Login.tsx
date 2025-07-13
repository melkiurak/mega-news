import { FaRegUser } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";

export const Login = () => {
    return <div className="flex items-center justify-center h-[100vh]">
        <div className="flex flex-col text-center gap-5 border-[#E6E6E6] border-2 px-7 py-10 rounded-2xl max-w-[500px] w-full">
            <h1>login</h1>
            <form className="flex flex-col text-start gap-5">
                <label className="flex flex-col gap-2">
                    <span>Enter the name</span>
                    <div className="h-10 relative">
                        <input type="text"/>
                        <FaRegUser className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </label>
                <label className="flex flex-col gap-2">
                    <span>Enter the password</span>
                    <div className="h-10 relative">
                        <input  type="password"/>
                        <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </label>
            </form>
        </div>
    </div>
}