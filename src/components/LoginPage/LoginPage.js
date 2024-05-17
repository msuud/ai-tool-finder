import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div>
      <div class="nav-menu" id="navMenu"></div>
      <div class="nav-button">
        <button class="btn white-btn" id="loginBtn" onclick="login()">
          Sign In
        </button>
        <button class="btn" id="registerBtn" onclick="register()">
          Sign Up
        </button>
      </div>
      <div class="nav-menu-btn">
        <i class="bx bx-menu" onclick="myMenuFunction()"></i>
      </div>
      <div class="form-box">
        <div class="login-container" id="login">
          <div class="top">
            <span>
              Don't have an account?{" "}
              <a href="#" onclick="register()">
                Sign Up
              </a>
            </span>
            <header>Login</header>
          </div>
          <div class="input-box">
            <input
              type="text"
              class="input-field"
              placeholder="Username or Email"
            ></input>
            <i class="bx bx-user"></i>
          </div>
          <div class="input-box">
            <input
              type="password"
              class="input-field"
              placeholder="Password"
            ></input>
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Sign In"></input>
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="login-check"></input>
              <label for="login-check"> Remember Me</label>
            </div>
            <div class="two">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
          </div>
        </div>
        <div class="register-container" id="register">
          <div class="top">
            <span>
              Have an account?{" "}
              <a href="#" onclick="login()">
                Login
              </a>
            </span>
            <header>Sign Up</header>
          </div>
          <div class="two-forms">
            <div class="input-box">
              <input
                type="text"
                class="input-field"
                placeholder="Firstname"
              ></input>
              <i class="bx bx-user"></i>
            </div>
            <div class="input-box">
              <input
                type="text"
                class="input-field"
                placeholder="Lastname"
              ></input>
              <i class="bx bx-user"></i>
            </div>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Email"></input>
            <i class="bx bx-envelope"></i>
          </div>
          <div class="input-box">
            <input
              type="password"
              class="input-field"
              placeholder="Password"
            ></input>
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Register"></input>
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="register-check"></input>
              <label for="register-check"> Remember Me</label>
            </div>
            <div class="two">
              <label>
                <a href="#">Terms & conditions</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function myMenuFunction() {
  var i = document.getElementById("navMenu");
  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}
function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}
export default LoginPage;
