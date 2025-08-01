import { Login } from "@components/Login/Login"
import { Registration } from "@components/Register/Registration"
import { useState } from "react";
import * as z from 'zod'

export const Auth = () => {
    const [registrationShow, setRegistrationShow] = useState(false);
    const [iconShow, setIconShow] = useState(true);
    const validateUser = z.object({
        username: z.string().min(1, "Ім'я обов’язкове"),
        password: z.string().min(8, 'Пароль повинен містити не менше 8 символів'),
    });
    return <div className="p-3 flex items-center justify-center">
        <div className="max-w-[500px] w-full">
            {registrationShow ? <Registration validateUser={validateUser}/> :  <Login setRegistrationShow={setRegistrationShow} iconShow={iconShow} setIconShow={setIconShow}/>}
        </div>
    </div>
}