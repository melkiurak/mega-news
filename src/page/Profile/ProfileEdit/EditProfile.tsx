import Parse from '@lib/parseClient';
import { AddExplain } from "@components/addExplain/AddExplain"
import { AddImage } from "@components/addImage/AddImage"
import { useState } from "react"
import { FaRegFloppyDisk,  } from "react-icons/fa6";
import type { User } from "src/types";



export const ProfileEdit = () => {
    const [formEdit, setFormEdit] = useState<User>({
        username: '',
        isLogin: true,
        id: '',
        avatar: null,
        firstName: '',
        lastName: '',
        email: '',
        banner: null,
        explanation: [],
    });
    const [avatarValue, setAvatarValue] = useState<string | null>(null);
    const [bannerValue, setBannerValue] = useState<string | null>(null);
    const checkFieldsInput = (currentUser: Parse.User, formEdit: Record<string, any>, fields:string[]) => {
        fields.forEach((field) => {
            const value = formEdit[field];
            if(typeof value === 'string' && value.trim() !== ''){
                currentUser.set(field, value ?? null)
            } else if(value instanceof File) {
                const parseFile = new Parse.File(`${field}`, value);
                currentUser.set(field, parseFile)
            }
        })
    };
    const handlePutdate = async(e: React.FormEvent) => {
        e.preventDefault();
        try{
            const currentUser = await Parse.User.currentAsync();
            if(currentUser ){
                const filedsToUpdate = ['username', 'lastName', 'firstName', 'email', 'avatar', 'banner']
                checkFieldsInput(currentUser, formEdit, filedsToUpdate);
                await currentUser?.save();
            }
        }catch(error){
            console.error('Error in change data',error)
        }
    }
    return <form className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <label htmlFor="">
                <h5>First Name</h5>
                <input type="text" className="h-12 mt-3.5" value={formEdit.firstName || ''} onChange={(e) => setFormEdit({...formEdit, firstName: e.target.value})} />
            </label>
            <label htmlFor="">
                <h5>Last Name</h5>
                <input type="text" className="h-12 mt-3.5" value={formEdit.lastName || ''} onChange={(e) => setFormEdit({...formEdit, lastName: e.target.value})} />
            </label>
            <label htmlFor="">
                <h5>User Name</h5>
                <input type="text" className="h-12 mt-3.5" value={formEdit.username} onChange={(e) => setFormEdit({...formEdit, username: e.target.value})} />
            </label>
            <label htmlFor="">
                <h5>Old Password</h5>
                <input type="text" className="h-12 mt-3.5"/>
            </label>
            <label htmlFor="">
                <h5>Password</h5>
                <input type="text" className="h-12 mt-3.5" />
            </label>
            <label htmlFor="">
                <h5>Email</h5>
                <input type="text" className="h-12 mt-3.5" value={formEdit.email || ''} onChange={(e) => setFormEdit({...formEdit, email: e.target.value})} />
            </label>
        </div>
        <div className="h-[394px] md:h-[204px]">
            <AddImage title="Add Banner"  ImageContentStyle=" md:flex-row" image={bannerValue} onImageChange={(file) => {setFormEdit((prev) => ({...prev, banner: file})); setBannerValue(URL.createObjectURL(file));}}/>           
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:h-[394px]">
            <div className=" h-[511px]  md:h-[394px] lg:h-full flex-1/2">
                <AddExplain setForm={setFormEdit}/>
            </div>
            <div className="h-[394px] lg:h-full flex-1">
                <AddImage title="Add Image" ImageContentStyle="md:flex-col" image={avatarValue} onImageChange={(file) => {setFormEdit((prev) => ({...prev, avatar: file})); setAvatarValue(URL.createObjectURL(file));}}/>           
            </div>
        </div>
        <div className="flex w-full justify-end">
            <button className="bg-Primary/75 text-white flex items-center gap-2 rounded-xl  px-6 h-10" onClick={(e) => handlePutdate(e)}>
                <FaRegFloppyDisk/>
                <span className="text-btn">save</span>
            </button>
        </div>
    </form>
}