import type React from "react";
import { FaRegUser } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
import  Parse  from '@lib/parseClient';
import { useState } from "react";
interface LoginProps {
    setRegistrationShow: (value: boolean) => void,
}

export const Login = ({setRegistrationShow}: LoginProps) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
            const user = await Parse.User.logIn(formData.name, formData.password);
            console.log("Успешный логин", user);
        } catch (error) {
            console.error('Error of auth', error)
        }
    }
    return <div className="flex flex-col text-center gap-5 border-[#E6E6E6] border-2 px-7 py-10 rounded-2xl w-full">
        <h1>login</h1>
        <form className="flex flex-col text-start gap-5">
                <label className="flex flex-col gap-2">
                    <span>Enter the name</span>
                    <div className="h-10 relative">
                        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
                        <FaRegUser className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                    <span></span>
                </label>
                <label className="flex flex-col gap-2">
                    <span>Enter the password</span>
                    <div className="h-10 relative">
                        <input  type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                        <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                    </div>
                </label>
                <button onClick={ handleSubmit}>Login</button>
        </form>
        <p className="text-btn">У вас вже є аккаунт? <button className="text-btn text-blue-400" onClick={() => setRegistrationShow(true)}>Реєстрація</button></p>
    </div>
}