import "../styles/Login.css"
import Logo from "../assets/logo.png"

export const Login = () => {
  return (
    <div className="container-login">
      <div className="box-login">
        <div className="avatar">
          <img src={Logo} />
        </div>
        <h2>Login</h2>
        <h3>Bienvenido Escuela de Futbol</h3>

        <form className="login-form">
          <div className="textbox">
            <input type="email" placeholder="Username" />
          </div>
          <div className="textbox">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">LOGIN</button>
          {/* <a href="https://website.com">Olvidaste tu contraseña?</a> */}
        </form>
      </div>

    </div>
  )
}