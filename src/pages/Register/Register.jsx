import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {
const{createUser} = useContext (AuthContext)


const handleRegister = e =>{
e.preventDefault();  
console.log(e.currentTarget);
const form = new FormData(e.currentTarget);
const email = form.get('email') 
const name = form.get('name') 
const photo = form.get('photo') 
const password = form.get('password') 
console.log(email,name, photo, password);

// Create user
createUser(email, password)
.then(reasult =>{
 console.log(reasult)                   
})
.catch(error=>{
 console.error(error)                   
})
}


 return (
 <div>
    <Navbar></Navbar>                  
<div>
<h2 className="text-3xl my-10 text-center">Please Register</h2>
<form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
<div className="form-control">
          <label className="label">
            <span className="label-text">Photo URl</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered"  />
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
          <button className="btn btn-primary">Register</button>
        </div>                   
</form> 
<p className="text-center mt-4">Already Have An Account ? <Link className="text-red-600" to='/login'>Login</Link></p> 

</div>                                                          
 </div>
 );
};

export default Register;