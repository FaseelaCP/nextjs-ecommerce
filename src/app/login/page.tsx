import "./login.css";

function Login() {
  return (
    <div className="login mt-5 container-fluid text-center">
      <div className="mb-3">
        <img src="logo.jpg" style={{ width: 200, height: 200 }}></img>
      </div>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check ">
              <input
                className="form-check-input "
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label " htmlFor="gridCheck1">
                Remember Me!
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-light me-3 ">
          Login
        </button>
        <button type="submit" className="btn btn-light ">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
