import { useState } from "react"
import type { CreateUser } from "../../types"
import  Parse  from '../../lib/parseClient';
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
    return <div className="">
        <h1>login</h1>
        <form className="flex flex-col gap-2.5 max-w-[200px] w-full">
            <input className="border-2 border-blue-700" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
            <input className="border-2 border-blue-700" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <button onClick={handelExit}>Exit</button>
    </div>
}