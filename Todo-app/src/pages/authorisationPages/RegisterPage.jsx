
import { useState } from "react";
import './LoginForm.css'
import './FontSize.css'
import { Link } from "react-router-dom"

export default function RegisterPage({ registerfunc }) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.length <= 3) {
            alert('Имя пользователя не должно быть меньше 4х символов!')
        } else if (password.length < 8) {
            alert('Пароль не должен быть менее 8ми символов!')
        }
        
            localStorage.setItem(username, password);
            alert('Вы успешно зарегистрировались!')
            registerfunc();
        
    }

    const handleUserName = (e) => {
        setUsername(e.target.value)
    }

    const handleUserPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form action='POST' className="login100-form validate-form" onSubmit={handleSubmit}>
                            <span className="login100-form-title p-b-49">
                                Создайте аккаунт
                            </span>

                            <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                                <span className="label-input100">Имя пользователя</span>
                                <input className="input100" onChange={handleUserName} type="text" name="username" placeholder="Придумайте имя пользователя" />
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Пароль</span>
                                <input className="input100" onChange={handleUserPassword}  type="password" name="pass" placeholder="Придумайте пароль"/>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button type="submit" className="login100-form-btn">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>


                            <div className="flex-col-c p-t-155">
                                <Link className="txt2" to='/'>
                                    Уже есть аккаунт? - Войти
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}