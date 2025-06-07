
import { Link } from "react-router-dom"
import './LoginForm.css'
import './FontSize.css'
import { useState } from "react"


export default function LoginPage({ loginfunc }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const getUserData = localStorage.getItem(username)

        if (getUserData && getUserData === password) {
            alert('Вы успешно вошли в систему!')
            loginfunc()
        } else {
            alert('Данные введены неверно!')
        }
    }

    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form action='POST' className="login100-form validate-form" onSubmit={handleSubmit}>
                            <span className="login100-form-title p-b-49">
                                Вход
                            </span>

                            <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                                <span className="label-input100">Имя пользователя</span>
                                <input className="input100" onChange={handleUsername} type="text" name="username" placeholder="Введите свое имя пользователя" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Пароль</span>
                                <input className="input100" onChange={handlePassword}  type="password" name="pass" placeholder="Введите свой пароль"/>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button type="submit" className="login100-form-btn">
                                        Войти
                                    </button>
                                </div>
                            </div>


                            <div className="flex-col-c p-t-155">
                                <Link className="txt2" to='/registerPage'>
                                    Еще нет аккаунта? - Регистрация
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}