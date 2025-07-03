import { useState } from "react"
import type { CreateUser } from "../../types"

export const Login = () => {
    const [formData, setFormData] = useState<CreateUser>({
        name: '',
        email: '',
        password: '',
    });
    return <div className="">
        <h1>login</h1>
        <form className="flex flex-col gap-2.5 max-w-[200px] w-full">
            <input className="border-2 border-blue-700" type="text" value={formData.password} onChange={(e) => setFormData(e.target.value)}/>
            <input className="border-2 border-blue-700" type="email" value={formData.password} onChange={(e) => setFormData(e.target.value)}/>
            <input className="border-2 border-blue-700" type="password" value={formData.password} onChange={(e) => setFormData(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
}