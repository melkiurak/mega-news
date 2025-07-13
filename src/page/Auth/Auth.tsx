import { Login } from "@components/Login/Login"
import { Registration } from "@components/Register/Registration"
import  Parse  from '@lib/parseClient';
import * as z from 'zod'

export const Auth = () => {
    const user = z.object({
        username: z.string().min(1, "Ім'я обов’язкове"),
        password: z.string().min(8, 'Пароль повинен містити не менше 8 символів'),
    });
    return <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-xl p-3">
        <Login/>
        <Registration Parse={Parse} validate={user}/>
    </div>
}