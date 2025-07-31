import type React from "react";
import { FaRegUser } from "react-icons/fa";
import { RxLockClosed } from "react-icons/rx";
import  Parse  from '@lib/parseClient';
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CreateUser } from "src/types";
interface LoginProps {
    setRegistrationShow: (value: boolean) => void,
}

export const Login = ({setRegistrationShow}: LoginProps) => {
    const {register, handleSubmit, watch, formState: { errors } } = useForm<CreateUser>();    
    const [authError, setAuthError] = useState<string | null>(null);
    
    const onSubmit: SubmitHandler<CreateUser> =  async (data) => {
        try{
            const user = await Parse.User.logIn(data.username, data.password);
            console.log("Успешный логин", user);
        } catch (error:any) {
            setAuthError(error.message || "Ошибка авторизации");
            console.error('Error of auth', error)
        }
    }
    return <div className="flex flex-col text-center gap-5 border-[#E6E6E6] border-2 px-7 py-10 rounded-2xl w-full">
        <h1>login</h1>
        <form className="flex flex-col text-start gap-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col gap-2">
                <span>Enter the name</span>
                <div className="h-10 relative">
                    <input type="text" className="h-full"  {...register("username", {required: 'Username is required'})}/>
                    <FaRegUser className="absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
                {errors.username && (<span className="text-btn text-red-500">{errors.username.message}</span> )}
            </label>
            <label className="flex flex-col gap-2">
                <span>Enter the password</span>
                <div className="h-10 relative">
                    <input  type="password" className="h-full" {...register("password", { required: "Password is required" })}/>
                    <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
                {authError && (<span className="text-btn text-red-500">{authError}</span> )}
            </label>
            <button type="submit">Login</button>
        </form>
        <p className="text-btn">У вас вже є аккаунт? <button className="text-btn text-blue-400" onClick={() => setRegistrationShow(true)}>Реєстрація</button></p>
    </div>
}