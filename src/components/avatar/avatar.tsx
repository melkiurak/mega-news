import type { User } from "src/types"


export const Avatar = ({avatar, username}:Partial<User>) => {

    return <div>
        {avatar ? (
            <div className="h-12 w-12 bg-no-repeat bg-center bg-cover rounded-xl"  style={{backgroundImage: `url(${avatar})`}}></div>
        ) : (
            <div className="bg-[#F5F5F5] shadow-[5px_0_20px_rgba(0,0,0,0.1),-5px_0_20px_rgba(0,0,0,0.1)] rounded-xl w-12 h-12 flex items-center justify-center">
                <h5 className="text-h5 text-black">{username?.charAt(0).toLocaleUpperCase()}</h5>
            </div>
        )}
    </div>
}