import { AddExplain } from "@components/addExplain/AddExplain"
import { AddImage } from "@components/addImage/AddImage"
import { useState } from "react"

export const ProfileEdit = () => {
    const [formEdit, setFormEdit] = useState()
    return <form className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <label htmlFor="">
                <h5>First Name</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>Last Name</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>User Name</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>Old Password</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>Password</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>Email</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
        </div>
        <AddImage title="Add Banner" ImageStyle="h-[360px] md:h-[170px] lg:h-[204px]" ImageContentStyle=" md:flex-row"/>           
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[394px]">
            <AddExplain setForm={setFormEdit} stylesHeight="md:h-[394px] lg:h-full"/>
            <AddImage title="Add Image" ImageStyle="h-[394px] lg:h-full" ImageContentStyle="md:flex-col"/>           
        </div>
    </form>
}