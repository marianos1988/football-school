import "@/styles/Login.css"

export default function Login() {
  return(
    <>
      <div className="container-login">
        <div className="box-login">
          <div className="avatar">
            {/* <img src={Logo} /> */}
          </div>
          <h2>Login</h2>
          <h3>Bienvenido Escuela de Futbol</h3>
          
          <form className="login-form">
            <div className="textbox">
              {/* <input type="text" name="username" placeholder="Username" onChange={onInputChange} value={formLogin.username} /> */}
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="textbox">
              {/* <input type={(statePass) ? (`text`) : (`password`)} name="password" placeholder="Password" onChange={onInputChange} value={formLogin.password}/> */}

            </div>
            {
              // (isActive) && (<h3 className="message-login">{message}</h3>)
            }
            {/* <button type="submit" onClick={(e)=>submitLogin(e)}>LOGIN</button> */}
            <button type="submit">LOGIN</button>
            {/* <Spinner 
              active= {stateSpinner}
              section={"login"}
            /> */}
            {/* <a href="https://website.com">Olvidaste tu contraseña?</a> */}
          </form>
        </div>
      </div>
    </>
  )
}