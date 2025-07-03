import { Link } from "react-router"

export const NotFoundPage = () => {
    return <div>
        <h1>404</h1>
        <Link to={'/'}>
            <button>Go back home</button>
        </Link>
    </div>
}