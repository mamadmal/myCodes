import "./join.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function join() {
  return (
    <div className="join-body">
      
      <div className="container">
        <a href="/"><img src="./images/login-logo.svg" alt="" className="join-logo" /></a>
        <h2>از طریق فرم زیر ثبت نام کنید</h2>

        <div className="form-floating mb-3 form-j">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="نام خود را وارد کنید"
          />
          <label htmlFor="floatingInput">نام</label>
        </div>

        <div className="form-floating mb-3 form-j">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">ایمیل</label>
        </div>

        <div className="form-floating form-j">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">رمز عبور</label>
        </div>

        <button type="button" className="btn btn-primary form-bott">ثبت نام</button>

      </div>
    </div>
  );
}
