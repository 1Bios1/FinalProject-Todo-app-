
import { useState } from "react"
import TasksPage from "./pages/TasksPage"
import LoginPage from "./pages/authorisationPages/LoginPage"

import { Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/authorisationPages/RegisterPage"

export default function App() {

    const [login, setLogin] = useState(false)

    const handlelogin = () => {
        setLogin(true)
    }

    const handleregister = () => {
        setLogin(false)
    }

    return (
        <>
            {
                login ? (
                    <Routes>
                        <Route index path='/' element={<TasksPage />}/>
                    </Routes>
                ) : (
                    <Routes>
                        <Route index path='/' element={<LoginPage loginfunc={handlelogin} />} />
                        <Route path='/registerPage' element={<RegisterPage registerfunc={handleregister} />}/>
                    </Routes>
                )
            }
        </>
    )
}