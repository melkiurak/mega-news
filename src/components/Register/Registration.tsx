import { useState } from "react";
import { FaRegUser } from "react-icons/fa"
import { RxLockClosed } from "react-icons/rx"
import type { CreateUser } from "../../types";
import { useDispatch } from "react-redux";
import { logIn, setUser } from "../../redux/reducers/users-reducer";

interface RegisterProps {
    Parse: any,
    validateUser: any,
}

export const Registration = ({Parse, validateUser}: RegisterProps) => {
    const [formData, setFormData] = useState<CreateUser>({
        name: '',
        password: '',
        avatar: null,
    });
    const dispatch = useDispatch();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const user = await Parse.User.signUp(formData.name, formData.password, {avatar: formData.avatar}); 
            console.log(formData.name, formData.password);
            dispatch(logIn());
            dispatch(setUser({
                username: user.get('username'),
                avatar: user.get('avatar'),
            }))
        } catch( error){
            console.error('Error register', error)
        }
    };
    return <div>
        <h1>Registration</h1>
         <form className="flex flex-col text-start gap-5">
            <label className="flex flex-col gap-2">
                <span>Enter the name</span>
                <div className="h-10 relative">
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name:e.target.value})}/>
                    <FaRegUser className="absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
            </label>
            <label className="flex flex-col gap-2">
                <span>Enter the password</span>
                <div className="h-10 relative">
                    <input  type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                    <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
            </label>
            <label className="flex flex-col gap-2">
                <span>Repeat the password</span>
                <div className="h-10 relative">
                    <input className="border-2 border-blue-700" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/>
                    <RxLockClosed className="absolute top-1/2 -translate-y-1/2 right-3"/>
                </div>
            </label>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    </div>
}