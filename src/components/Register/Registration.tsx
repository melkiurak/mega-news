import { useState } from "react";
import { FaRegUser } from "react-icons/fa"
import { RxLockClosed } from "react-icons/rx"
import type { CreateUser } from "../../types";
import { useDispatch } from "react-redux";
import { logIn, setUser } from "../../redux/reducers/users-reducer";
import  Parse  from '@lib/parseClient';
import { useForm, type SubmitHandler } from "react-hook-form"

export const Registration = () => {
    const [iconVisibleUsername, setIconVisibleUsername] = useState(false);
    const [iconVisiblePassword, setIconVisiblePassword] = useState(false);
    const [iconVisibleRepeat, setIconVisibleRepeat] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateUser>();    

    const dispatch = useDispatch();
    const password = watch("password");
    
    const onSubmit: SubmitHandler<CreateUser> =  async (data) => {
        if(data.password !== data.repeatPassword){
            alert('Password do not match');
            return;
        }
        try{
            const user = await Parse.User.signUp(data.username, data.password, {avatar: data.avatar}); 
            dispatch(logIn());
            dispatch(setUser({
                username: user.get('username'),
                avatar: user.get('avatar'),
            }))
        } catch(error){
            console.error('Error register', error);
        }
    }
    
    return <div className="flex flex-col text-center gap-5 border-[#E6E6E6] border-2 px-7 py-10 rounded-2xl w-full">
        <h1>Registration</h1>
         <form className="flex flex-col text-start gap-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col gap-2">
                <h5>Enter the name</h5>
                <div className="h-10 relative">
                    <input type="text"  className=" h-full" {...register("username", { required: "Username is required" })} onFocus={() => setIconVisibleUsername(true)} onBlur={() => setIconVisibleUsername(false)}/>
                    <FaRegUser className={`absolute top-1/2 -translate-y-1/2 right-3 ${iconVisibleUsername ? 'hidden' : 'block'}`}/>
                </div>
                {errors.username && <span className="text-btn text-red-500">{errors.username.message}</span>}
            </label>
            <label className="flex flex-col gap-2">
                <h5>Enter the password</h5>
                <div className="h-10 relative">
                    <input  type="password"  className=" h-full" {...register("password", { required: "Password is required", minLength: 6 })} onFocus={() => setIconVisiblePassword(true)} onBlur={() => setIconVisiblePassword(false)} />
                    <RxLockClosed className={`absolute top-1/2 -translate-y-1/2 right-3 ${iconVisiblePassword ? 'hidden' : 'block'}`}/>
                </div>
                {errors.password && <span className="text-btn text-red-500">{errors.password.message || "Password is too short"}</span>}
            </label>
            <label className="flex flex-col gap-2">
                <h5>Repeat the password</h5>
                <div className="h-10 relative">
                    <input className="h-full" type="password"   {...register("repeatPassword", {required: "Repeat password is required",validate: value =>value === password || "Passwords do not match",})} onFocus={() => setIconVisibleRepeat(true)} onBlur={() => setIconVisibleRepeat(false)} />
                    <RxLockClosed className={`absolute top-1/2 -translate-y-1/2 right-3 ${iconVisibleRepeat ? 'hidden' : 'block'}`}/>
                </div>
                {errors.repeatPassword && <span className="text-btn text-red-500">{errors.repeatPassword.message}</span>}
            </label>
            <button type="submit">Registration</button>
        </form>
    </div>
}