
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <>
            <nav className="navigation-bar">
                <div className="navigation-bar__container">
                    <ul className="navigation-bar__list">
                        <li className="navigation-bar__list-itm">
                            <Link to='/completed-tasks'>
                                Выполненые задания
                            </Link>
                        </li>
                        <li className="navigation-bar__list-itm">
                            <Link to='/'>
                                Задания
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}