
import { Link } from "react-router-dom"

export default function LoginPage() {

    return (
        <>
            <h1>Here our users will Login</h1>
            <button>
                <Link to='/registerPage'>
                    регистрация
                </Link>
            </button>
        </>
    )
}