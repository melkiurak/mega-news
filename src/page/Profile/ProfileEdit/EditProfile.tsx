export const ProfileEdit = () => {
    return <form>
        <div className="grid grid-cols-1 gap-5">
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
        <div></div>
        <div></div>
    </form>
}