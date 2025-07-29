import { AddExplain } from "@components/addExplain/AddExplain"
import { AddImage } from "@components/addImage/AddImage"
import { useState } from "react"
import { FaRegFloppyDisk,  } from "react-icons/fa6";

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
        <AddImage title="Add Banner" ImageHieghtStyle="h-[360px] md:h-[170px] lg:h-[204px]" ImageContentStyle=" md:flex-row"/>           
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[394px]">
            <div className=" h-[511px]  md:h-[394px] lg:h-full flex-1/2">
                <AddExplain setForm={setFormEdit}/>
            </div>
            <div className="h-[394px] lg:h-full flex-1">
                <AddImage title="Add Image" ImageContentStyle="md:flex-col"/>           
            </div>
        </div>
        <div className="flex w-full justify-end">
            <button className="bg-Primary/75 text-white flex items-center gap-2 rounded-xl  px-6 h-10">
                <FaRegFloppyDisk/>
                <span className="text-btn">save</span>
            </button>
        </div>
    </form>
}