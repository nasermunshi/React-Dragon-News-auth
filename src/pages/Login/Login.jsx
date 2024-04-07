import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
const {singIn} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
console.log('lohgdwaYIKJUJU Ygbdk', location);

const handleLogin = e =>{
  e.preventDefault();  
  console.log(e.currentTarget);
  const form = new FormData(e.currentTarget);
  const email = form.get('email');
  const password = form.get('password');  
  console.log(email, password);  
  singIn(email, password)
  .then(reasult =>{
  console.log(reasult)
  // Navigate after login
  navigate(location?.state ? location.state: '/');                  
  })

  .catch(error=>{
   console.error(error)                   
  })            
}

return (
<div>
  <Navbar></Navbar>                  
<div>
<h2 className="text-3xl my-10 text-center">Login Your Account</h2>
<form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>                   
</form> 
<p className="text-center mt-4">Do not Have An Account ? <Link className="text-red-600" to='/register'>Register</Link></p> 

</div>

</div>
 );
};

export default Login;