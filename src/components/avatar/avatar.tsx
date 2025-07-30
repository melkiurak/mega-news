import type { User } from "src/types";

export const Avatar = ({user}) => {

    return <div>
        {user?.avatar ? (
            <div className="h-12 w-12 bg-no-repeat bg-center bg-cover rounded-xl"  style={{backgroundImage: `url(${user?.avatar})`}}>
            </div>
        ) : (
            <div className="bg-[#F5F5F5] rounded-xl w-12 h-12 flex items-center justify-center">
                <h5 className="text-h5 text-black">{user?.username?.charAt(0).toLocaleUpperCase()}</h5>
            </div>
        )}
    </div>
}