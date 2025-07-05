import { useState } from "react"
import type { CreateUser } from "../../types"
import  Parse  from '../../lib/parseClient';
import { FaRegUser } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
export const Login = () => {
    const [formData, setFormData] = useState<CreateUser>({
        name: '',
        password: '',
        avatar: null,
    });
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await Parse.User.signUp(formData.name, formData.password, {avatar: formData.avatar}); 
        console.log(formData.name, formData.password)
    };
    if (Parse.User.current()) {
        console.log("✅ Пользователь вошёл:", Parse.User.current()?.getUsername());
    } else {
        console.log("❌ Никто не вошёл");
    } 
    const handelExit = async () => {
        return await Parse.User.logOut();
    }
    return <div className="flex items-center justify-center h-[100vh]">
        <div className="flex flex-col text-center gap-5 border-[#E6E6E6] border-2 px-7 py-10 rounded-2xl max-w-[500px] w-full">
            <h1>login</h1>
            <form className="flex flex-col text-start gap-5">
                <div className="flex flex-col gap-2">
                    <label>Enter the name</label>
                    <div className="h-10 relative">
                        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
                        <FaRegUser className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Enter the password</label>
                    <div className="h-10 relative">
                        <input  type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                        <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Repeat the password</label>
                    <div className="h-10 relative">
                        <input className="border-2 border-blue-700" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                        <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <button onClick={handelExit}>Exit</button>
        </div>
    </div>
}